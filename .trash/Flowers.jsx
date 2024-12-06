import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Flower1(props) {
  const { nodes, materials } = useGLTF('/Bell Flower.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        
        
        geometry={nodes['Bell_flowers_Circle004-Mesh'].geometry}
        material={materials.Green_BellFlowers}
      />
      <mesh
        
        
        geometry={nodes['Bell_flowers_Circle004-Mesh_1'].geometry}
        material={materials.Purple_BellFlowers}
      />
    </group>
  )
}

useGLTF.preload('/Bell Flower.glb')

export function Flower2(props) {
  const { nodes, materials } = useGLTF('/Desert marigold.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        
        
        geometry={nodes.DesertMarigold_mesh.geometry}
        material={materials.DesertMarigold_mat}
      />
    </group>
  )
}

useGLTF.preload('/Desert marigold.glb')


export function Flower3(props) {
  const { nodes, materials } = useGLTF('/Flowers.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        
        
        geometry={nodes.Flowers.geometry}
        material={materials.Material}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/Flowers.glb')

export function Flower4(props) {
  const { nodes, materials } = useGLTF('/Pastel Plume Flowers.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        
        
        geometry={nodes['Node-Mesh'].geometry}
        material={materials.mat9}
      />
      <mesh
        
        
        geometry={nodes['Node-Mesh_1'].geometry}
        material={materials.mat5}
      />
      <mesh
        
        
        geometry={nodes['Node-Mesh_2'].geometry}
        material={materials.mat0}
      />
      <mesh
        
        
        geometry={nodes['Node-Mesh_3'].geometry}
        material={materials.mat2}
      />
      <mesh
        
        
        geometry={nodes['Node-Mesh_4'].geometry}
        material={materials.mat4}
      />
    </group>
  )
}

useGLTF.preload('/Pastel Plume Flowers.glb')

export function getRandomFlower(position) {
  const i = Math.floor(Math.random() * 4);
  const rotation=[0,Math.random() * 2 * Math.PI,0]
  switch (i) {
    case 0:
      return <Flower1 position={position} rotation={rotation} scale={[0.05,0.05,0.05]}/>
    case 1:
      return <Flower2 position={position} rotation={rotation} scale={[0.01,0.01,0.01]}/>
    case 2:
      return <Flower3 position={position} rotation={rotation} scale={[0.3,0.3,0.3]}/>
    case 3:
      return <Flower4 position={position} rotation={rotation} scale={[0.05,0.05,0.05]}/>
  }
}