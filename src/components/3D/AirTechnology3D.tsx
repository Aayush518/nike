import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { MotionConfig } from 'framer-motion';
import * as THREE from 'three';

function AirBubble({ position, color, scale, speed, distort }) {
  const ref = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.y = position[1] + Math.sin(t) * 0.2;
    // Add a slight rotation for more dynamic movement
    ref.current.rotation.x = Math.sin(t * 0.5) * 0.1;
    ref.current.rotation.z = Math.cos(t * 0.3) * 0.1;
  });

  return (
    <mesh
      ref={ref}
      position={position}
      scale={scale}
    >
      <Sphere args={[1, 32, 32]}>
        <MeshDistortMaterial
          color={color}
          speed={0.5}
          distort={distort}
          radius={1}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </mesh>
  );
}

function AirTechnology3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <MotionConfig transition={{ duration: 0.5 }}>
        <AirBubble position={[0, 0, 0]} color="#ff0000" scale={1.2} speed={1} distort={0.4} />
        <AirBubble position={[-1.5, 0.5, -1]} color="#ff3333" scale={0.7} speed={1.5} distort={0.3} />
        <AirBubble position={[1.5, -0.5, -1]} color="#ff6666" scale={0.9} speed={0.8} distort={0.5} />
        <AirBubble position={[0, -1, -0.5]} color="#ff9999" scale={0.5} speed={1.2} distort={0.2} />
      </MotionConfig>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}

export default AirTechnology3D;