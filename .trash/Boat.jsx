

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

function Boat(props) {
  const { nodes, materials } = useGLTF('/Boat.glb')

  const ref = useRef();

  useFrame((scene,delta)=>{
    if(ref.current){
      ref.current.rotation.x = Math.sin(scene.clock.getElapsedTime()* 0.66) / 8;
      ref.current.rotation.z = Math.sin(scene.clock.getElapsedTime() * 0.75) / 40;
    }
  })

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Boat.geometry}
        material={materials.lambert3SG}
      />
    </group>
  )
}

export default Boat

useGLTF.preload('/Boat.glb')