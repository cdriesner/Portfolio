/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: valeriydeyneca (https://sketchfab.com/valeriydeyneca)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/monitor-0f3d348a29c14242bf79d0560f027af1
Title: Monitor
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

function Monitor(props) {
  const { nodes, materials } = useGLTF('/monitor/scene.gltf');
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Monitor_Low_Monitor_0.geometry}
          material={materials.Monitor}
          position={[-0.922, 25.347, -0.032]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

export default Monitor;

useGLTF.preload('/monitor/scene.gltf');
