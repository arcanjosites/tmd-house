"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { AthleteLighting } from "./AthleteLighting";
import { AthleteModel } from "./AthleteModel";
import { AthleteLoader } from "./AthleteLoader";
import type { AthleteRotationRefs } from "@/lib/three/useAthleteRotation";

type SceneContentProps = {
  rotationRefs: React.MutableRefObject<AthleteRotationRefs>;
  entranceProgress: number;
  reducedMotion: boolean;
  isMobile: boolean;
  usePlaceholder: boolean;
};

const SAMPLE_ANGLES = [
  0,
  Math.PI * 0.25,
  Math.PI * 0.5,
  Math.PI * 0.75,
  Math.PI,
  Math.PI * 1.25,
  Math.PI * 1.5,
  Math.PI * 1.75,
];

function CameraRig({
  targetRef,
  entranceProgress,
  isMobile,
}: {
  targetRef: React.RefObject<THREE.Group | null>;
  entranceProgress: number;
  isMobile: boolean;
}) {
  const { camera, size: viewport } = useThree();
  const fitted = useRef(false);
  const fitZ = useRef(isMobile ? 3.8 : 3.4);
  const fitCamY = useRef(0.92);
  const fitLookY = useRef(0.88);
  const smoothZ = useRef(fitZ.current * 1.12);
  const smoothY = useRef(fitCamY.current - 0.06);
  const box = useMemo(() => new THREE.Box3(), []);
  const boxSize = useMemo(() => new THREE.Vector3(), []);
  const center = useMemo(() => new THREE.Vector3(), []);

  useFrame(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) return;

    const target = targetRef.current;
    if (!fitted.current && target) {
      let maxX = 0;
      let maxY = 0;
      const originalY = target.rotation.y;

      for (const angle of SAMPLE_ANGLES) {
        target.rotation.y = angle;
        target.updateMatrixWorld(true);
        box.setFromObject(target);
        if (!box.isEmpty()) {
          box.getSize(boxSize);
          maxX = Math.max(maxX, boxSize.x);
          maxY = Math.max(maxY, boxSize.y);
        }
      }

      target.rotation.y = originalY;
      target.updateMatrixWorld(true);

      if (maxY > 0.5) {
        box.setFromObject(target);
        box.getCenter(center);

        const aspect = viewport.width / viewport.height || 1;
        const vFov = (camera.fov * Math.PI) / 180;
        const hFov = 2 * Math.atan(Math.tan(vFov / 2) * aspect);
        const padding = isMobile ? 1.24 : 1.18;

        const distY = maxY / 2 / Math.tan(vFov / 2);
        const distX = maxX / 2 / Math.tan(hFov / 2);
        const dist = Math.max(distY, distX) * padding;

        fitZ.current = dist;
        fitLookY.current = center.y;
        fitCamY.current = center.y + maxY * 0.03;
        smoothZ.current = dist * 1.1;
        smoothY.current = fitCamY.current - 0.05;
        fitted.current = true;
      }
    }

    const p = isMobile ? 1 : entranceProgress;
    const goalZ = THREE.MathUtils.lerp(fitZ.current * 1.1, fitZ.current, p);
    const goalY = THREE.MathUtils.lerp(fitCamY.current - 0.05, fitCamY.current, p);
    const damp = isMobile ? 0.14 : 0.1;

    smoothZ.current = THREE.MathUtils.lerp(smoothZ.current, goalZ, damp);
    smoothY.current = THREE.MathUtils.lerp(smoothY.current, goalY, damp);

    camera.position.set(0, smoothY.current, smoothZ.current);
    camera.lookAt(0, fitLookY.current, 0);
  });

  return null;
}

function SceneContent({
  rotationRefs,
  entranceProgress,
  reducedMotion,
  isMobile,
  usePlaceholder,
}: SceneContentProps) {
  const scrollRef = useRef<THREE.Group>(null);
  const dragRef = useRef<THREE.Group>(null);
  const cursorRef = useRef<THREE.Group>(null);

  useEffect(() => {
    rotationRefs.current = {
      scrollGroup: scrollRef.current,
      dragGroup: dragRef.current,
      cursorGroup: cursorRef.current,
    };
  }, [rotationRefs]);

  return (
    <>
      <CameraRig targetRef={scrollRef} entranceProgress={entranceProgress} isMobile={isMobile} />
      <AthleteLighting entranceProgress={entranceProgress} isMobile={isMobile} />
      <group ref={scrollRef}>
        <group ref={dragRef}>
          <group ref={cursorRef}>
            <AthleteModel
              reducedMotion={reducedMotion}
              isMobile={isMobile}
              usePlaceholder={usePlaceholder}
            />
          </group>
        </group>
      </group>
    </>
  );
}

type AthleteSceneProps = {
  rotationRefs: React.MutableRefObject<AthleteRotationRefs>;
  entranceProgress: number;
  reducedMotion: boolean;
  isMobile: boolean;
  usePlaceholder: boolean;
};

export function AthleteScene({
  rotationRefs,
  entranceProgress,
  reducedMotion,
  isMobile,
  usePlaceholder,
}: AthleteSceneProps) {
  const [dpr, setDpr] = useState<[number, number]>([1, 2]);

  useEffect(() => {
    setDpr(isMobile ? [1, 1] : window.innerWidth < 768 ? [1, 1.5] : [1, 2]);
  }, [isMobile]);

  return (
    <Canvas
      shadows={false}
      dpr={dpr}
      gl={{
        antialias: !isMobile,
        alpha: true,
        powerPreference: isMobile ? "low-power" : "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: isMobile ? 1.15 : 1.28,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
      camera={{ position: [0, 0.92, 3.6], fov: isMobile ? 34 : 32, near: 0.1, far: 50 }}
      style={{ touchAction: "pan-y", width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <SceneContent
          rotationRefs={rotationRefs}
          entranceProgress={entranceProgress}
          reducedMotion={reducedMotion}
          isMobile={isMobile}
          usePlaceholder={usePlaceholder}
        />
      </Suspense>
    </Canvas>
  );
}

export function AthleteSceneFallback() {
  return <AthleteLoader />;
}
