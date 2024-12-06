import React, { useRef, useMemo } from "react";
import { extend, useThree, useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { WaterMaterial } from "./WaterMaterial";

import { Water } from "three/examples/jsm/objects/Water.js";

extend({ WaterMaterial,Water });

const Lake = (props) => {
  const ref = useRef();
  const waterMaterialRef = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(
    THREE.TextureLoader, "/waternormals.jpeg"
  );
  waterNormals.repeat.set(100,100)
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.CircleGeometry(0.5), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(0,0.5,1),
      sunColor: 0xffffff,
      waterColor: 0x000000,
      distortionScale: 0.1,
      fog: false,
      format: gl.encoding,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [waterNormals]
  );
  useFrame(
    (state, delta) => 
      {
      ref.current.material.uniforms.time.value += delta * 0.1;
      waterMaterialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
      }
  );
  return (
    <group>
    <water
      ref={ref}
      args={[geom, config]}
      rotation-x={-Math.PI / 2}
      position={[0, 0, 0]}
      {...props}
    />
    <mesh rotation={[-Math.PI/2,0,0]} position={[0,0.001,0]}>
      <circleGeometry args={[0.5]} />
      <waterMaterial
        ref={waterMaterialRef}
        uColor={new THREE.Color("#00c3ff")}
        transparent
        uOpacity={0.4}
        uNoiseType={0}
        uSpeed={0.5}
        uRepeat={30}
        uFoam={0.4}
        uFoamTop={0.7}
      />
    </mesh>
    </group>
  );
}

export default Lake