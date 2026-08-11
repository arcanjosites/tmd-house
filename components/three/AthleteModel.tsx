"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { ATHLETE_MODEL_PATH, TMD_COLORS } from "@/lib/three/constants";
import { IMAGES } from "@/lib/images";

type Props = {
  reducedMotion: boolean;
  isMobile: boolean;
};

function isGiMesh(name: string) {
  const n = name.toLowerCase();
  return (
    n.includes("gi") ||
    n.includes("kimono") ||
    n.includes("jacket") ||
    n.includes("pants") ||
    n.includes("pant") ||
    n.includes("trouser") ||
    n.includes("cloth") ||
    n.includes("uniform") ||
    n.includes("fabric") ||
    n.includes("robe") ||
    n.includes("belt")
  );
}

function isSkinMesh(name: string) {
  const n = name.toLowerCase();
  return n.includes("skin") || n.includes("face") || n.includes("head") || n.includes("hair");
}

function enhanceMaterial(mat: THREE.Material, isMobile: boolean, meshName: string) {
  if (!(mat instanceof THREE.MeshStandardMaterial)) return;

  if (mat.map) mat.map.colorSpace = THREE.SRGBColorSpace;

  const gi = isGiMesh(meshName) || (mat.map && !isSkinMesh(meshName));

  // Avoid specular fireflies on dark gi fabric
  mat.envMapIntensity = 0;
  mat.metalness = 0;
  mat.roughness = Math.max(mat.roughness ?? 0.75, gi ? 0.88 : 0.72);

  if (gi) {
    if (mat.map) {
      mat.color.set("#b8c6bc");
      mat.roughness = Math.min(mat.roughness, 0.9);
    } else {
      mat.color.set(TMD_COLORS.kimonoFabric);
      mat.roughness = 0.9;
    }
  }

  if (isMobile && mat.map) {
    mat.map.minFilter = THREE.LinearFilter;
    mat.map.anisotropy = 2;
  }
}

function KimonoLogos({ logoTexture }: { logoTexture: THREE.Texture }) {
  return (
    <>
      <Decal position={[0, 0.08, 0.12]} rotation={[0, 0, 0]} scale={[0.14, 0.14, 0.14]} map={logoTexture} depthTest />
      <Decal
        position={[-0.22, 0.22, 0.04]}
        rotation={[0, 0.35, 0]}
        scale={[0.09, 0.09, 0.09]}
        map={logoTexture}
        depthTest
      />
      <Decal
        position={[0, 0.05, -0.14]}
        rotation={[0, Math.PI, 0]}
        scale={[0.32, 0.32, 0.32]}
        map={logoTexture}
        depthTest
      />
    </>
  );
}

function findTorsoMesh(root: THREE.Object3D): THREE.Mesh | null {
  let best: THREE.Mesh | null = null;
  let maxY = 0;

  root.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      const box = new THREE.Box3().setFromObject(child);
      const size = box.getSize(new THREE.Vector3());
      const centerY = box.getCenter(new THREE.Vector3()).y;
      // Torso: wide in X, in upper body region
      if (size.y > 0.3 && size.x > size.z && centerY > 0.8 && centerY < 1.5) {
        if (centerY > maxY) {
          maxY = centerY;
          best = child;
        }
      }
    }
  });

  if (best) return best;
  return findLargestMesh(root);
}

function findLargestMesh(root: THREE.Object3D): THREE.Mesh | null {
  let largest: THREE.Mesh | null = null;
  let maxVol = 0;
  root.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      const box = new THREE.Box3().setFromObject(child);
      const size = box.getSize(new THREE.Vector3());
      const vol = size.x * size.y * size.z;
      if (vol > maxVol) {
        maxVol = vol;
        largest = child;
      }
    }
  });
  return largest;
}

function GlbTorsoDecals({
  root,
  logoTexture,
}: {
  root: THREE.Object3D;
  logoTexture: THREE.Texture;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const torso = findTorsoMesh(root);
    if (torso) {
      meshRef.current = torso;
      setReady(true);
    }
  }, [root]);

  if (!ready) return null;

  return (
    <>
      <Decal mesh={meshRef} position={[0, 0.08, 0.12]} scale={[0.14, 0.14, 0.14]} map={logoTexture} depthTest />
      <Decal
        mesh={meshRef}
        position={[-0.22, 0.22, 0.04]}
        rotation={[0, 0.35, 0]}
        scale={[0.09, 0.09, 0.09]}
        map={logoTexture}
        depthTest
      />
      <Decal
        mesh={meshRef}
        position={[0, 0.05, -0.14]}
        rotation={[0, Math.PI, 0]}
        scale={[0.32, 0.32, 0.32]}
        map={logoTexture}
        depthTest
      />
    </>
  );
}

function GlbAthlete({
  reducedMotion,
  isMobile,
  logoTexture,
}: {
  reducedMotion: boolean;
  isMobile: boolean;
  logoTexture: THREE.Texture;
}) {
  const { scene } = useGLTF(ATHLETE_MODEL_PATH);
  const idleRef = useRef<THREE.Group>(null);

  const cloned = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = false;
        child.receiveShadow = false;
        if (child.material) {
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          mats.forEach((m) => enhanceMaterial(m, isMobile, child.name || ""));
        }
      }
    });

    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 1.48 / maxDim;
    clone.position.set(0, -box.min.y * scale + 0.1, 0);
    clone.scale.setScalar(scale);

    return clone;
  }, [scene, isMobile]);

  useFrame((state) => {
    if (reducedMotion || isMobile || !idleRef.current) return;
    idleRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.65) * 0.002;
  });

  return (
    <group ref={idleRef}>
      <primitive object={cloned} />
      <GlbTorsoDecals root={cloned} logoTexture={logoTexture} />
    </group>
  );
}

export function AthleteModel({
  reducedMotion,
  isMobile,
  usePlaceholder,
}: Props & { usePlaceholder: boolean }) {
  const logoTexture = useTexture(IMAGES.logo);

  useEffect(() => {
    logoTexture.colorSpace = THREE.SRGBColorSpace;
  }, [logoTexture]);

  if (usePlaceholder) {
    return (
      <group>
        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color={TMD_COLORS.surface} wireframe />
        </mesh>
      </group>
    );
  }

  return <GlbAthlete reducedMotion={reducedMotion} isMobile={isMobile} logoTexture={logoTexture} />;
}

useGLTF.preload(ATHLETE_MODEL_PATH);
