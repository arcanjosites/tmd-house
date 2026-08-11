"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Environment } from "@react-three/drei";
import { TMD_COLORS } from "@/lib/three/constants";

type Props = {
  entranceProgress: number;
  isMobile: boolean;
};

export function AthleteLighting({ entranceProgress, isMobile }: Props) {
  const rimRef = useRef<THREE.SpotLight>(null);
  const sweepRef = useRef<THREE.SpotLight>(null);
  const keyRef = useRef<THREE.DirectionalLight>(null);
  const fillRef = useRef<THREE.DirectionalLight>(null);
  const frontRef = useRef<THREE.DirectionalLight>(null);

  useFrame(() => {
    const p = entranceProgress;
    if (rimRef.current)
      rimRef.current.intensity = THREE.MathUtils.lerp(0.4, isMobile ? 4.0 : 5.5, p);
    if (sweepRef.current) {
      sweepRef.current.intensity = THREE.MathUtils.lerp(0.3, isMobile ? 3.0 : 4.5, Math.min(p * 1.4, 1));
      sweepRef.current.position.x = THREE.MathUtils.lerp(-5, 2.5, p);
    }
    if (keyRef.current) keyRef.current.intensity = THREE.MathUtils.lerp(0.5, isMobile ? 2.4 : 3.2, p);
    if (fillRef.current) fillRef.current.intensity = THREE.MathUtils.lerp(0.2, isMobile ? 0.9 : 1.2, p);
    if (frontRef.current) frontRef.current.intensity = THREE.MathUtils.lerp(0.3, isMobile ? 1.0 : 1.4, p);
  });

  return (
    <>
      <fog attach="fog" args={[TMD_COLORS.bg2, 22, 40]} />
      <ambientLight intensity={isMobile ? 0.45 : 0.55} color="#dce8e0" />
      <hemisphereLight
        intensity={isMobile ? 0.35 : 0.45}
        color="#e8f4ec"
        groundColor="#1a2e22"
      />
      <directionalLight
        ref={keyRef}
        position={[3, 5, 4]}
        intensity={0.5}
        color="#f4faf6"
      />
      <directionalLight ref={fillRef} position={[-3, 2, 3]} intensity={0.2} color="#a8d4b8" />
      <directionalLight ref={frontRef} position={[0, 1.5, 5]} intensity={0.3} color="#eef6f0" />
      <spotLight
        ref={rimRef}
        position={[-4, 3, -3]}
        angle={0.42}
        penumbra={0.85}
        intensity={0.4}
        color={TMD_COLORS.greenHighlight}
        distance={14}
      />
      <spotLight
        ref={sweepRef}
        position={[-5, 2.2, 2]}
        angle={0.32}
        penumbra={0.92}
        intensity={0.3}
        color="#d4ecd8"
        distance={12}
      />
      {!isMobile && <Environment preset="city" environmentIntensity={0.28} />}
    </>
  );
}
