/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: thethieme (https://sketchfab.com/thethieme)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/keyboard-cc7e7ed38d9a469ea499893295bc767a
Title: Keyboard
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

function Keyboard(props) {
  const { nodes, materials } = useGLTF('/keyboard/scene.gltf');
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.161}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials.KeyBoard_01}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

export default Keyboard;

useGLTF.preload('/keyboard/scene.gltf');
