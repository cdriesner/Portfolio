import React from 'react'
import { House1, House2, House3 } from '../../.trash/Houses'
import Lake from '../../.trash/Lake'
import Rocks from '../../.trash/Rocks'
import Boat from '../../.trash/Boat'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { getRandomFlower } from '../../.trash/Flowers'
import Tree from '../../.trash/Tree'

const Loc = (props) => {

  const Flower = ({ position }) => (
    <mesh position={position}>
      <sphereGeometry args={[0.02, 16, 16]} />
      <meshStandardMaterial color={'pink'} />
    </mesh>
  );

  const positions = (centers ,counts, sizes) => {
    const positions = [];
    for(let i = 0; i < centers.length; i++){
      const center = centers[i];
      const size = sizes[i];
      for(let j = 0;  j < counts[i];j++){
        positions.push([Math.random() * size[0] + center[0] - 0.5 * sizes[i][0] ,0.01,Math.random() * size[1] + center[1] - 0.5 * size[1] ]);
      }
    }
    return positions;
  }

  const flowerPositions = positions([[-0.5,-0.7],[-0.88,0],[-0.5,0.7]],[20,10,20],[[0.9,0.5],[0.2,1],[0.9,0.5]])
  console.log(flowerPositions);

  const dirtTexture = useLoader(THREE.TextureLoader,'/dirt-normal.jpg');
  dirtTexture.repeat.set(4,4)
  dirtTexture.wrapS = dirtTexture.wrapT = THREE.RepeatWrapping
  return (
    <group {...props}>
      <pointLight position={[-0.5,1,0.3]} intensity={2}/>
      <mesh position={[0,0.0001,0]} rotation={[Math.PI * -0.5,0,0]}>
        <planeGeometry args={[2,2]}/>
        <meshStandardMaterial normalMap={dirtTexture} color={'green'}/>
      </mesh>
      <House1 scale={[0.08,0.08,0.08]} rotation={[0,Math.PI * -0.7,0]} position={[0.45,0,0.45]}/>
      <House2 scale={[0.8,0.8,0.8]} rotation={[0,Math.PI * 1.2,0]} position={[0.3,0.065,-0.5]}/>
      <House3 scale={[0.2,0.2,0.2]} rotation={[0,Math.PI * 0.5,0]} position={[0.5,0.108,-0.05]}/>
      <group position={[-0.2,0,0]}>
        <Lake scale={[1,1,1]} rotation={[0,0,0]} position={[0, 0.001, 0]}/>
        <mesh scale={[1,1,1]} rotation={[Math.PI * 0.5,0,0]} position={[0,-0.04,0]} >
          <torusGeometry args={[0.5,0.05,16,100]}/>
          <meshStandardMaterial color={'green'}/>
        </mesh>
        <Boat scale={[0.0003,0.0003,0.0003]} position={[0,-0.015,0]} rotation={[0,2.3,0]}/>
      </group>
      {flowerPositions.map((pos, index) => 
        getRandomFlower(pos)
      )}
      <Tree scale={[0.4,0.4,0.4]} position={[0.75,0.6,0.7]}/>
      <Tree scale={[0.4,0.4,0.4]} position={[0.75,0.6,-0.3]}/>
      <Tree scale={[0.4,0.4,0.4]} position={[0.8,0.6,0.2]}/>
      <Tree scale={[0.4,0.4,0.4]} position={[0.8,0.6,0.9]}/>
      <Tree scale={[0.4,0.4,0.4]} position={[0.7,0.6,-0.9]}/>
      <Tree scale={[0.4,0.4,0.4]} position={[0.8,0.6,-0.7]}/>
    </group>
  )
}

export default Loc