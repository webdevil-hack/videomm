"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Reel() {
  const mesh = useRef<THREE.Mesh>(null!);
  return (
    <mesh ref={mesh} rotation={[0.8, 0.3, 0]}>
      <torusGeometry args={[1.2, 0.35, 32, 128]} />
      <meshStandardMaterial
        color="#00e5ff"
        emissive="#00e5ff"
        emissiveIntensity={0.6}
        metalness={0.6}
        roughness={0.2}
      />
    </mesh>
  );
}

export function NeonReel() {
  return (
    <div className="h-40 w-40 rounded-xl overflow-hidden border glass-panel">
      <Canvas camera={{ position: [3, 2, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#9b6bff" />
        <Reel />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}
