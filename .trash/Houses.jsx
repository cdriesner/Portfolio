import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function House1(props) {
  const { nodes, materials } = useGLTF('/House1.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.House1_1.geometry}
          material={materials.Grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.House1_2.geometry}
          material={materials.DarkGrey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.House1_3.geometry}
          material={materials.Brown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.House1_4.geometry}
          material={materials.White}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/House1.glb')

export function House2(props) {
  const { nodes, materials } = useGLTF('/House2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh'].geometry}
        material={materials.mat18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_1'].geometry}
        material={materials.mat20}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_2'].geometry}
        material={materials.mat25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_3'].geometry}
        material={materials.mat10}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_4'].geometry}
        material={materials.mat9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_5'].geometry}
        material={materials.mat22}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_6'].geometry}
        material={materials.mat15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_7'].geometry}
        material={materials.mat21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_8'].geometry}
        material={materials.mat8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_9'].geometry}
        material={materials.mat17}
      />
    </group>
  )
}

useGLTF.preload('/House2.glb')

export function House3(props) {
  const { nodes, materials } = useGLTF('/House3.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.house.geometry} material={materials.None} />
    </group>
  )
}

useGLTF.preload('/House3.glb')
