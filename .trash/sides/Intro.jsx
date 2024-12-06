import React, { useRef, useMemo, useState } from 'react';
import Monitor from '../../.trash/Monitor';
import Keyboard from '../../.trash/Keyboard';
import Coffee from '../../.trash/Coffee';
import { Text } from '@react-three/drei';
import { SpotLight } from 'three';
import { useFrame } from '@react-three/fiber';

let accumulator = 0;
const introText =
  "Howdy, I'm Calvin Driesner,\na developer crafting immersive digital experiences.\nExplore my projects, skills, and journey designed to\ninspire, innovate, and transform.";

const Intro = props => {
  const spotlight = useMemo(() => new SpotLight('#eef'), []);
  const [characters, setCharacters] = useState(0);

  useFrame((scene, delta) => {
    if (characters < introText.length) {
      accumulator += delta;
      if (accumulator > 0.04) {
        setCharacters(characters + 1);
        accumulator = 0;
      }
    }
  });

  return (
    <group {...props}>
      <Monitor
        scale={[2.5, 2.5, 2.5]}
        position={[0, 0.3, 0]}
        rotation={[Math.PI * 0.5, Math.PI * 0.5, 0]}
      />
      <group position={[0, 0.334, 0.65]}>
        <group>
          <primitive
            object={spotlight}
            position={[0, 0, 0]}
            intensity={0.5}
            penumbra={0.2}
            radius={Math.PI}
            castShadow
          />
          <primitive object={spotlight.target} position={[0, -1, 0]} />
        </group>
        <mesh>
          <boxGeometry args={[1.5, 0.1, 0.84]} />
          <meshStandardMaterial emissive={0xeeeeff} color={0xbbbbff} />
        </mesh>
        <Text
          scale={[0.05, 0.05, 0.05]}
          position={[0, -0.051, 0.3]}
          rotation={[Math.PI * 0.5, 0, 0]}
          color={0x000000}>
          Welcome to my 3D world!
        </Text>
        <Text
          scale={[0.05, 0.05, 0.05]}
          position={[0, -0.051, 0]}
          rotation={[Math.PI * 0.5, 0, 0]}
          color={0x000000}>
          {introText.substring(0, characters)}
        </Text>
      </group>
      <Keyboard
        scale={[2.5, 2.5, 2.5]}
        position={[0, -0.7, 0.05]}
        rotation={[Math.PI * 0.5, 0, 0]}
      />
      <Coffee
        castShadows
        scale={[0.1, 0.1, 0.1]}
        rotation={[Math.PI * 0.5, Math.PI * 0.7, 0]}
        position={[-0.7, -0.6, 0.03]}
      />
    </group>
  );
};

export default Intro;
