
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Tree(props) {
  const { nodes, materials } = useGLTF('/Pine Tree.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh'].geometry}
        material={materials.mat11}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_1'].geometry}
        material={materials.mat20}
      />
    </group>
  )
}

useGLTF.preload('/Pine Tree.glb')

export default Tree