import { Canvas, useThree, useFrame } from '@react-three/fiber'
import React, {useEffect, useRef, useState, useMemo} from 'react'
import * as THREE from "three"
import { PointMaterial } from '@react-three/drei'
import { animated, useSpring } from '@react-spring/three'

const CursorFollower = ({view}) => {
  const cursorFollower = useRef();
  const {scene,camera} = useThree();
  const particleRef = useRef();
  const [cursor, setCursor] = useState([0,0]);

  
  const cursorSpring = useSpring({
    to: {position:[cursor[0],cursor[1],0]},
    from: {position:[cursorFollower?.current?.position.x,cursorFollower?.current?.position.y,cursorFollower?.current?.position.z,] || [0,0,0]},
    config:{
      mass: 1, tension: 280, friction: 10 
    }
  })

  const handleWindowMouseMove = event => {
    const normalizedX = (event.x / view.current.clientWidth) * 2 - 1;
    const normalizedY = (event.y / view.current.clientHeight) * 2 - 1;
    var vector = new THREE.Vector3(normalizedX,normalizedY,0);
    vector.unproject(camera);
    setCursor([vector.x,-vector.y]);
  };

  const particles = useMemo(()=>{
    const count = 10;
    const positions = new Float32Array(count * 3);
    const offsets = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const speed = [];
    for(let i = 0; i < count * 30; i+=3){
      positions[i] = 0;
      positions[i+1]=0;
      positions[i+2]=0;
      offsets[i] = Math.random() * 2 * Math.PI;
      offsets[i+1] = Math.random() * 2 * Math.PI;
      offsets[i+2] = Math.random() * 2 * Math.PI;
      colors[i] = 1;
      colors[i+1] = 0;
      colors[i+2] = 0;
      speed[i] = Math.random() * 4 + - 2; 
      speed[i + 1] = Math.random() * 4 + - 2; 
      speed[i + 2] = Math.random() * 4 + - 2; 
    }
    return {positions,offsets,colors,speed};
  },[])

  useEffect(() => {
    if(camera.isOrthographicCamera){
      window.addEventListener('mousemove', handleWindowMouseMove);
    }

    return () => {window.removeEventListener('mousemove', handleWindowMouseMove);}
  },[camera])


  useFrame(({clock})=>{
    if(particleRef.current){
      const time = clock.getElapsedTime();
      const positions = particleRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] = Math.sin(time * particles.speed[i] + particles.offsets[i]) / 2;
        positions[i + 1] = Math.sin(time * (particles.speed[i + 1] + 0.1) + particles.offsets[i + 1])/ 2;
        positions[i + 2] = Math.sin(time * (particles.speed[i + 2] + 0.2) + particles.offsets[i + 1])/ 2;
      }
      particleRef.current.geometry.attributes.position.needsUpdate = true;
    }
  })

  return (
    <animated.group position={cursorSpring.position} castShadow receiveShadow ref={cursorFollower}>
      <points ref={particleRef}>
        <bufferGeometry>
          <bufferAttribute
          attach='attributes-position'
            args={[particles.positions, 3]}
            usage={THREE.DynamicDrawUsage}/>
          <bufferAttribute
          attach='attributes-color'
            args={[particles.colors, 3]}
            usage={THREE.DynamicDrawUsage}/>
        </bufferGeometry>
        <PointMaterial
          transparent
          vertexColors
          size={6}
          sizeAttenuation={false}
          depthWrite={false}
          toneMapped={false}
          opacity={0.8}
        />
      </points>
    </animated.group>
  )
}
export default CursorFollower