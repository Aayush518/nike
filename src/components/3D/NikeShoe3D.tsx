import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PresentationControls, Environment, ContactShadows } from '@react-three/drei';
import { Vector3 } from 'three';

function NikeShoeModel() {
  const group = useRef();
  
  // Create a simple shoe model instead of loading an external one
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  return (
    <group ref={group} dispose={null} position={[0, -1, 0]} scale={3}>
      {/* Simple shoe shape made with basic geometries */}
      <mesh castShadow receiveShadow position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 0.4, 1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh castShadow receiveShadow position={[0.8, 0.5, 0]}>
        <boxGeometry args={[0.6, 0.6, 1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh castShadow receiveShadow position={[-0.2, 0.3, 0]}>
        <boxGeometry args={[1.5, 0.8, 1.2]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* Red Nike swoosh */}
      <mesh castShadow receiveShadow position={[0, 0.6, 0.6]}>
        <torusGeometry args={[0.5, 0.1, 16, 100, Math.PI]} />
        <meshStandardMaterial color="#ff0000" />
      </mesh>
    </group>
  );
}

function NikeShoe3D() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <React.Suspense fallback={null}>
          <NikeShoeModel />
          <Environment preset="city" />
        </React.Suspense>
      </PresentationControls>
      <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={1.5} far={4} />
    </Canvas>
  );
}

export default NikeShoe3D;