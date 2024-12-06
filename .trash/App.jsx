import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';
import Intro from '../src/sides/Intro';
import Technologies from '../src/sides/Technologies';
import {
  Bloom,
  EffectComposer,
  DepthOfField
} from '@react-three/postprocessing';
import { Cloud, Environment, Text3D, Sky, OrbitControls } from '@react-three/drei';
import ShaderObject from './ShaderObject';
import Particles from './Particles';
import Loc from '../src/sides/Loc';
import { Water } from 'three-stdlib';
import Lake from './Lake';

extend({ Water })


const RotatingCube = ({ targetFace, prevFace }) => {
  const cubeRef = useRef();
  const [amountToRotate, setAmountToRotate] = useState({ y: 0, z: 0 });
  const rotations = [
    { y: 0, x: 0 },
    { y: 0, x: Math.PI / 2 },
    { y: 0, x: Math.PI },
    { y: 0, x: Math.PI * 1.5 },
    { y: Math.PI * 0.5, x: 0 },
    { y: Math.PI * 1.5, x: 0 }
  ];

  useEffect(() => {
    if (cubeRef.current) {
      setAmountToRotate(rotations[targetFace]);
    }
  }, [targetFace]);

  useFrame(() => {
    if (amountToRotate.y > cubeRef.current.rotation.y) {
      if (cubeRef.current.rotation.y + 0.1 > amountToRotate.y) {
        cubeRef.current.rotation.y = amountToRotate.y;
      } else {
        cubeRef.current.rotation.y += 0.1;
      }
    } else if (amountToRotate.y < cubeRef.current.rotation.y) {
      if (cubeRef.current.rotation.y - 0.1 < amountToRotate.y) {
        cubeRef.current.rotation.y = amountToRotate.y;
      } else {
        cubeRef.current.rotation.y -= 0.1;
      }
    }

    if (amountToRotate.x > cubeRef.current.rotation.x) {
      if (cubeRef.current.rotation.x + 0.1 > amountToRotate.x) {
        cubeRef.current.rotation.x = amountToRotate.x;
      } else {
        cubeRef.current.rotation.x += 0.1;
      }
    } else if (amountToRotate.x < cubeRef.current.rotation.x) {
      if (cubeRef.current.rotation.x - 0.1 < amountToRotate.x) {
        cubeRef.current.rotation.x = amountToRotate.x;
      } else {
        cubeRef.current.rotation.x -= 0.1;
      }
    }
  });

  return (
    <group ref={cubeRef} position={[0, -1.9, -1.2]}>
      <mesh receiveShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial attach='material' color='orange'/>
      </mesh>
      <Intro position={[0, 0, 1]} />
      <Technologies position={[0, 1, 0]} rotation={[0, Math.PI * 0.5, 0]} currentSide={targetFace}/>
      <Loc position={[0, 0, -1]} rotation={[0, Math.PI * 0.5, Math.PI * -0.5]}/>
      
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial attach='material' color='green' />
      </mesh>
      <mesh position={[-1, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial attach='material' color='orange' />
      </mesh>
      <mesh position={[1, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial attach='material' color='red' />
      </mesh>
    </group>
  );
};

const HeadingText = ({targetFace,position,rotation}) => {
  const titles = ['INTRO','TECHNOLOGIES','LOC','FLYBUYWIRE','OTHER','OTHER']
  const offsets = [-0.1,-0.25,-0.1,-0.2,-0.1,-0.1]
  const rotatorRef = useRef();
  const [targetRotation,setTargetRotation] = useState(0);

  useEffect(()=>{
    setTargetRotation(-Math.PI * targetFace / 3);

  },[targetFace])

  useFrame((scene,delta)=>{
    if(!rotatorRef.current || rotatorRef.current.rotation.y === targetRotation) return;
    const object = rotatorRef.current;
    const speed = 5;
    if(Math.abs(targetRotation - object.rotation.y) < speed * delta){
      object.rotation.y = targetRotation;
      return;
    }
    if(object.rotation.y > targetRotation){
      object.rotation.y -= speed * delta;
    }else{
      object.rotation.y += speed * delta;
    }
  })

  return (
    <group position={position} rotation={rotation}>
      <group ref={rotatorRef}>
      {titles.map((title, index) => {return <group rotation={[0,Math.PI * index / 3,0]}>
        <Text3D
        font={'/fonts/gt.json'}
        scale={[0.05, 0.05, 0.05]}
        rotation={[0, Math.PI * -0.5, 0]}
        position={[-2, 0, offsets[index]]}
        letterSpacing={-0.1}
        depth={100}>
        {title}
        <meshStandardMaterial color={0x000000}/>
      </Text3D>
      </group>} )}
      </group>
    </group>
  )
}

const App = () => {
  const [targetFace, setTargetFace] = useState(2);
  const [prevFace, setPrevFace] = useState(0);

  const worldRef = useRef();

  const setFace = increment => {
    setPrevFace(targetFace);
    if (increment) {
      if (targetFace + 1 === 6) {
        setTargetFace(0);
      } else {
        setTargetFace(targetFace + 1);
      }
    } else {
      if (targetFace - 1 === -1) {
        setTargetFace(5);
      } else {
        setTargetFace(targetFace - 1);
      }
    }
  };

  return (
    <>
      {/* 3D Canvas */}
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
        camera={{
          position: [0, -4.8, 0.5],
          // position: [1, 1, 1],
          frustumCulled: false,
          fov: 30
        }}
        shadows>
        <directionalLight
          castShadow
          position={[1, 6, 6]}
          shadow-mapSize={[1024, 1024]}
          intensity={0.7}>
          <orthographicCamera
            attach='shadow-camera'
            args={[-10, 10, 10, -10]}
          />
        </directionalLight>
        <ambientLight intensity={0.5} />
        <RotatingCube targetFace={targetFace} prevFace={prevFace} />
        <HeadingText rotation={[Math.PI * 0.5,Math.PI * 0.5,0]} position={[0,0.5,0.94]} targetFace={targetFace}/>
        <Sky scale={10} sunPosition={[0.2,0.5,0.1]} turbidity={0.1} azimuth={0.01} inclination={0}/>
      </Canvas>

      {/* Scrollable Content */}
      <div className='flex w-[100vw] h-[100vh] fixed justify-between overflow-hidden'>
        <button className='m-4' onClick={() => setFace(false)}>
          Back
        </button>
        <button className='m-4' onClick={() => setFace(true)}>
          Next
        </button>
      </div>
    </>
  );
};

export default App;
