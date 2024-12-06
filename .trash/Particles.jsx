import * as THREE from 'three';
import { useMemo, useRef, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PointMaterial } from '@react-three/drei';

function Particles({ count }) {
  const orange = new THREE.Color('orange');
  const [positions, colors] = useMemo(() => {
    const positions = [...new Array(count * 3)].map(
      () => 5 - Math.random() * 10
    );
    const colors = [...new Array(count)].flatMap(() => orange.toArray());
    return [new Float32Array(positions), new Float32Array(colors)];
  }, [count]);

  console.log(positions);

  const points = useRef(null);

  useFrame(state => {
    const t = state.clock.elapsedTime;
    positions.forEach(
      (p, i) =>
        (positions[i] += Math[i % 2 ? 'sin' : 'cos'](1000 * i + t) / 300)
    );
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          usage={THREE.DynamicDrawUsage}
          attach='attributes-position'
          args={[positions, 3]}
        />
        <bufferAttribute
          usage={THREE.DynamicDrawUsage}
          attach='attributes-color'
          args={[colors, 3]}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        vertexColors
        size={10}
        sizeAttenuation={false}
        depthWrite={false}
        toneMapped={false}
      />
    </points>
  );
}

export default Particles;
