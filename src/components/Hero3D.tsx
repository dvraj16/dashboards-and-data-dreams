import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Grid } from '@react-three/drei';

// Subtle animated particles representing data points
function DataParticles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 1200;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3 + 0] = (Math.random() - 0.5) * 12; // x
      pos[i3 + 1] = (Math.random() - 0.5) * 6;  // y
      pos[i3 + 2] = (Math.random() - 0.5) * 4;  // z
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = Math.sin(t * 0.15) * 0.1;
    ref.current.rotation.x = Math.cos(t * 0.1) * 0.05;
  });

  return (
    <points ref={ref} frustumCulled>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      {/* Soft primary-accent hue */}
      <pointsMaterial color={new THREE.Color('#6ea8fe')} size={0.035} sizeAttenuation transparent opacity={0.65} />
    </points>
  );
}

// Animated bars like a live chart
function Bars() {
  const group = useRef<THREE.Group>(null);
  const bars = useMemo(() => {
    const arr: { x: number; delay: number }[] = [];
    const cols = 14;
    for (let i = 0; i < cols; i++) arr.push({ x: -3.9 + i * 0.6, delay: Math.random() * Math.PI * 2 });
    return arr;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      const mesh = child as THREE.Mesh;
      const scaleY = 0.6 + Math.abs(Math.sin(t * 1.2 + (i * 0.4))) * 1.8;
      mesh.scale.y = scaleY;
      mesh.position.y = scaleY / 2 - 1.2;
    });
  });

  return (
    <group ref={group} position={[0, -0.8, -1.2]}>
      {bars.map((b, i) => (
        <mesh key={i} position={[b.x, -1.2, 0]}>
          <boxGeometry args={[0.35, 1, 0.35]} />
          <meshStandardMaterial color={new THREE.Color('#7dd3fc')} metalness={0.2} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

// Subtle rotating ring to suggest analytics flow
function AnalyticRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.15;
    ref.current.rotation.z = t * 0.2;
  });
  return (
    <mesh ref={ref} position={[0, 0.6, -1.5]}>
      <torusGeometry args={[1.8, 0.02, 16, 160]} />
      <meshBasicMaterial color={new THREE.Color('#a78bfa')} wireframe opacity={0.6} transparent />
    </mesh>
  );
}

const Hero3D: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* Transparent canvas - background color omitted for alpha */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 6, 4]} intensity={0.8} />

        <Suspense fallback={null}>
          {/* Ground grid for spatial depth */}
          <Grid
            position={[0, -2.2, 0]}
            infiniteGrid
            cellSize={0.6}
            cellThickness={0.4}
            cellColor={new THREE.Color('#334155')}
            sectionSize={3}
            sectionThickness={0.6}
            sectionColor={new THREE.Color('#475569')}
            fadeDistance={18}
            fadeStrength={1}
          />

          <DataParticles />
          <Bars />
          <AnalyticRing />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3D;
