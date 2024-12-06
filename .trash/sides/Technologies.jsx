import React, { useRef, useState, useMemo } from 'react';
import { Text, Text3D, Points, PointMaterial } from '@react-three/drei';
import ReactLogo from '../../src/components/ReactLogo';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import Laptop from '../Laptop';
import NodeIcon from '../../src/components/NodeIcon';

function normRand() {
    var x1, x2, rad;
    do {
        x1 = 2 * Math.random() - 1;
        x2 = 2 * Math.random() - 1;
        rad = x1 * x1 + x2 * x2;
    } while(rad >= 1 || rad == 0);
    var c = Math.sqrt(-2 * Math.log(rad) / rad);
    return x1 * c;
};

const Technologies = props => {

  const groundNormal = useLoader(THREE.TextureLoader, "/obsidian-normal-2.jpg")

  return (
    <group {...props}>
      <mesh position={[0,0.001,0]} rotation={[Math.PI * -0.5,0,Math.PI * -0.5]}>
        <planeGeometry args={[2,2]} />
        <meshStandardMaterial attach='material' color='black' roughness={0.7} normalMap={groundNormal}/>
      </mesh>
      <Cubes rotation={[0, 0.4, 0]} position={[0.4, 0, -0.6]} />
      {props.currentSide === 1 && (<>
        <ReactIcon position={[0.4, 0, 0.6]} />
        <Node position={[0.4,0,0]}/>
      </>)}
    </group>
  );
};

const Node = props => {

  return <group {...props}>
    <DataStream position={[-0.1, 0.2, -0.1]} count={30} rotation={[Math.PI * 0.5,0,0]}/>
      <Cloud scale={[0.1,0.1,0.12]} position={[0,0.7,0]}/>
      <pointLight position={[0.1,0.6,0]} color={0x00ff22} intensity={0.4}/>
      <Laptop scale={[0.015,0.015,0.015]} rotation={[0,Math.PI,0]} position={[0.1,0,0]}/>
      <NodeIcon rotation={new THREE.Euler(-0.2,Math.PI * -0.4,0,'YXZ')} scale={[0.07,0.07,0.07]} position={[0.15,0.4,0]}/>
      <Text3D
        font={'/fonts/gt.json'}
        scale={[0.05, 0.05, 0.05]}
        rotation={[0, Math.PI * -0.45, 0]}
        position={[-0.3, 0.01, -0.1]}
        letterSpacing={-0.1}
        depth={100}>
        NODE
        <meshStandardMaterial color={0x00ff00}/>
      </Text3D>
  </group>
}

const Cloud = (props) => {
  const spheres = useMemo(() => Array.from({ length: 20 }, () => ({
    position: [
      (normRand() - 0.5) * 0.2,
      (normRand() - 0.5) * 0.2,
      (normRand() - 0.5) * 0.4, 
    ],
    scale: Math.random() * 0.5 + 0.5,
    opacity: Math.random() * 0.5 + 0.2
  })));

  return (
    <group {...props}>
      {spheres.map((sphere, index) => (
        <mesh key={index} position={sphere.position} scale={sphere.scale}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshPhongMaterial color="#ffffff" opacity={sphere.opacity} transparent/>
        </mesh>
      ))}
    </group>
  );
}

const DataStream = ({ position, count, rotation }) => {
  const particleRefLarge = useRef();
  const particleRefMedium = useRef();
  const particleRefSmall = useRef();
  const colorLarge = new THREE.Color(0x00ff22);
  const colorMedium= new THREE.Color(0x00ff22);
  const colorSmall = new THREE.Color(0x00ff22);

  const particles = useMemo(() => {
    const positionsLarge = new Float32Array(count * 3);
    for (let i = 0; i < positionsLarge.length; i += 3) {
      positionsLarge[i] = Math.random() * 0.5;
      positionsLarge[i + 1] = Math.random() / 5;
      positionsLarge[i + 2] = Math.random();
    }
    const positionsMedium = new Float32Array(count * 3);
    for (let i = 0; i < positionsMedium.length; i += 3) {
      positionsMedium[i] = positionsLarge[i];
      positionsMedium[i + 1] = positionsLarge[i + 1];
      positionsMedium[i + 2] = positionsLarge[i + 2] - 0.05;
    }
    const positionsSmall = new Float32Array(count * 3);
    for (let i = 0; i < positionsSmall.length; i += 3) {
      positionsSmall[i] = positionsLarge[i];
      positionsSmall[i + 1] = positionsLarge[i + 1];
      positionsSmall[i + 2] = positionsLarge[i + 2] - 0.1;
    }
    const colorsLarge = new Float32Array(
      [...new Array(count)].flatMap(() => colorLarge.toArray())
    );
    const colorsMedium = new Float32Array(
      [...new Array(count)].flatMap(() => colorMedium.toArray())
    );
    const colorsSmall = new Float32Array(
      [...new Array(count)].flatMap(() => colorSmall.toArray())
    );
    const offsets = [];
    for (let i = 0; i < count; i++) {
      offsets[i] = Math.random() * Math.PI * 2;
    }

    return {
      positionsLarge,
      positionsMedium,
      positionsSmall,
      colorsLarge,
      colorsMedium,
      colorsSmall,
      offsets
    };
  }, []);

  // Animate the particles
  useFrame(({ clock }) => {
    if (
      particleRefLarge.current &&
      particleRefMedium.current &&
      particleRefSmall.current
    ) {
      const time = clock.getElapsedTime();
      const positionsLarge = particleRefLarge.current.geometry.attributes.position.array;
      const positionsMedium = particleRefMedium.current.geometry.attributes.position.array;
      const positionsSmall = particleRefSmall.current.geometry.attributes.position.array;

      // Update particle positions to flow in and out
      for (let i = 0; i < positionsLarge.length; i += 3) {
        positionsLarge[i + 2] =
          Math.sin(time / 2 + particles.offsets[i / 3]) * 0.5;
        positionsMedium[i + 2] =
          Math.sin(time / 2 + particles.offsets[i / 3] - 0.05) * 0.5;
        positionsSmall[i + 2] =
          Math.sin(time / 2 + particles.offsets[i / 3] - 0.1) * 0.5;
      }
      particleRefLarge.current.geometry.attributes.position.needsUpdate = true;
      particleRefMedium.current.geometry.attributes.position.needsUpdate = true;
      particleRefSmall.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      <points ref={particleRefLarge}>
        <bufferGeometry>
          <bufferAttribute
            attach='attributes-position'
            args={[particles.positionsLarge, 3]}
            usage={THREE.DynamicDrawUsage}
          />
          <bufferAttribute
            usage={THREE.DynamicDrawUsage}
            attach='attributes-color'
            args={[particles.colorsLarge, 3]}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          vertexColors
          size={6}
          sizeAttenuation={false}
          depthWrite={false}
          toneMapped={false}
          opacity={0.8}
        />
      </points>
      <points ref={particleRefMedium}>
        <bufferGeometry>
          <bufferAttribute
            attach='attributes-position'
            args={[particles.positionsMedium, 3]}
            usage={THREE.DynamicDrawUsage}
          />
          <bufferAttribute
            usage={THREE.DynamicDrawUsage}
            attach='attributes-color'
            args={[particles.colorsMedium, 3]}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          vertexColors
          size={5}
          sizeAttenuation={false}
          depthWrite={false}
          toneMapped={false}
          opacity={0.6}
        />
      </points>
      <points ref={particleRefSmall}>
        <bufferGeometry>
          <bufferAttribute
            attach='attributes-position'
            args={[particles.positionsSmall, 3]}
            usage={THREE.DynamicDrawUsage}
          />
          <bufferAttribute
            usage={THREE.DynamicDrawUsage}
            attach='attributes-color'
            args={[particles.colorsSmall, 3]}
          />
        </bufferGeometry>
        <PointMaterial
          transparent
          vertexColors
          size={4}
          sizeAttenuation={false}
          depthWrite={false}
          toneMapped={false}
          opacity={0.4}
        />
      </points>
    </group>
  );
};

const ReactIcon = props => {
  const logoRef = useRef();
  const groupRef = useRef();

  useFrame((scene, delta) => {
    const time = scene.clock.getElapsedTime();
    if(groupRef.current && logoRef.current){
      groupRef.current.position.y = Math.sin(time / 2) * 0.05 + 0.07;
      logoRef.current.rotation.y += delta * 0.5
    }
  });

  return (
    <group {...props} ref={groupRef}>
      <group ref={logoRef}>
        <ReactLogo position={[0, 0.25, 0.25]} scale={[0.5, 0.5, 0.5]} />
      </group>
      <pointLight color={0x7777ff} position={[0,0.25,0]} intensity={0.5}/>
      <Text3D
        font={'/fonts/gt.json'}
        scale={[0.05, 0.05, 0.05]}
        rotation={[0, Math.PI * -0.5, 0]}
        position={[0.05, 0, -0.1]}
        letterSpacing={-0.1}
        depth={100}>
        REACT
        <meshStandardMaterial color={0x0000ff}/>
      </Text3D>
    </group>
  );
};

const Cubes = props => {
  return (
    <group {...props}>
      <mesh
        position={[0, 0.1, -0.13]}
        rotation={[0, 0.2, 0]}
        castShadow
        receiveShadow>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial attach='material' color={0xf7df1e} />
        <Text
          scale={[0.1, 0.1, 0.1]}
          position={[-0.11, -0.02, 0.03]}
          rotation={[0, Math.PI * -0.5, 0]}
          color={0x000000}>
          JS
        </Text>
      </mesh>
      <mesh
        position={[0, 0.1, 0.13]}
        rotation={[0, -0.2, 0]}
        castShadow
        receiveShadow>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial attach='material' color={0xe34c26} />
        <Text
          scale={[0.06, 0.06, 0.06]}
          position={[-0.11, 0, 0]}
          rotation={[0, Math.PI * -0.5, 0]}
          color={0xbbbbbb}>
          HTML
        </Text>
      </mesh>
      <mesh
        position={[0, 0.3, -0]}
        rotation={[0, -0.1, 0]}
        castShadow
        receiveShadow>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial attach='material' color={0x663399} />
        <Text
          scale={[0.1, 0.1, 0.1]}
          position={[-0.11, 0, 0]}
          rotation={[0, Math.PI * -0.5, 0]}
          color={0xbbbbbb}>
          CSS
        </Text>
      </mesh>
    </group>
  );
};

export default Technologies;
