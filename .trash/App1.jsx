import { Canvas, useThree, useFrame } from '@react-three/fiber'
import React, {useEffect, useRef, useState} from 'react'
import NodeIcon from './components/NodeIcon.jsx'
import ReactLogo from './components/ReactLogo.jsx'
import { OrthographicCamera, PerspectiveCamera, SpotLight, Text3D, View } from '@react-three/drei'
import { AmbientLight, Euler } from 'three'
import { useSpring, animated, easings } from '@react-spring/three'
import { Bloom, EffectComposer, DotScreen } from '@react-three/postprocessing'
import * as THREE from "three"
import CursorFollower from './components/CursorFollower.jsx'

const App = () => {
  const container = useRef();
  const view = useRef();
  const backgroundCamera = useRef();
  
  const [rotation,setRotation] = useState(2);

  const spring = useSpring({
    from: { rotation: [0, 0, 0] },
    to: { rotation: [0, rotation * Math.PI * 2/3, 0] },
    config: { easing: easings.easeInOutBack(2000) },
  })
  const spin = useSpring({
    from: { rotation: [0, 0, 0] },
    to: { rotation: [0, Math.PI * 2, 0] },
    loop: true,
    config: { duration: 5000 },
  })
  const bob = useSpring({
    from: { position:[0,-0.5,0] },
    to: { position:[0,0.5,0] },
    config: { loop: true,easing: easings.easeInOutBack(2000) },
  })

  useEffect(()=>{
    const interval = setInterval(()=>{
      setRotation(rotation+1);
    },5000);
    
    return () => {clearInterval(interval);}
  })

  return (
    <main ref={container} className='min-h-[100vh] bg-black overflow-hidden z-50'>
      <div onMouseDown={event => console.log(event)}>
      <View className='h-[100vh] w-[100vw] fixed top-0 left-0 z-50' ref={view} index={1}>
        <OrthographicCamera position={[0,0,1]} ref={backgroundCamera} makeDefault zoom={80} />
        <ambientLight/>
        <CursorFollower view={view}/>
      </View>
      </div>
      <div className='w-[1000px] mx-auto py-20'>
        <div className='flex max-h-[200px] my-40'>
          <View style={{ width: 400, height: 500 }} className=' relative translate-y-[-50%] top-[50%]' index={2}>
            <NodeIcon rotation={new Euler(-0.2,Math.PI * 0.2,0,'YXZ')}/>
            <mesh position={[0,-3.5,0]} castShadow receiveShadow>
              <boxGeometry args={[4,4,4]}/>
              <meshStandardMaterial color={0x444444} roughness={0.8}/>
            </mesh>
            <ambientLight intensity={0.1}/>
            <SpotLight position={[2,4,2]} angle={0.55} attenuation={5} distance={9} intensity={35} anglePower={4} penumbra={1} decay={2} castShadow/>
          </View>
          <div className='text-white max-w-[600px] h-fit z-10'>I used Node.js to build a real-time chat application, taking advantage of its event-driven, non-blocking architecture to ensure seamless performance. By implementing WebSocket, I enabled instant messaging with the ability to handle thousands of simultaneous connections efficiently. I also utilized the Express framework to create RESTful APIs for features like user authentication and message storage. This project showcases my ability to design scalable, high-performance applications, demonstrating both backend expertise and a focus on delivering responsive user experiences.</div>
        </div>

        <div className='flex max-h-[200px] my-40'>
          <div>
          <h1 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-300 mb-4'>Gold Heading</h1>
          <div className='text-white max-w-[600px] h-fit z-10'>I developed a real-time chat application using React, focusing on creating an intuitive and dynamic user interface. Leveraging React's component-based architecture, I built reusable UI elements for messaging, notifications, and user management. By integrating WebSocket, the app supported instant updates, ensuring messages appeared seamlessly without page refreshes. I also used state management tools like Redux to handle complex data flows efficiently. This project highlights my ability to build responsive, user-friendly applications with a clean and maintainable frontend architecture.</div>
          </div>
          <View  style={{ width: 400, height: 500 }} className=' relative translate-y-[-50%] top-[50%]' index={3}>
            <animated.group position={bob.position} rotation={spin.rotation}>
              <ReactLogo scale={[6,6,6]} position={[0,0,2.85]}/>
            </animated.group>
            <ambientLight intensity={0.1}/>
            <pointLight position={[0,0,-0.5]} color={'blue'} intensity={2}/>
            <mesh position={[0,-3.5,0]} castShadow receiveShadow>
              <boxGeometry args={[4,4,4]}/>
              <meshStandardMaterial color={0x444444} roughness={0.8}/>
            </mesh>
            <SpotLight position={[-2,4,2]} angle={0.55} attenuation={5} distance={9} intensity={35} anglePower={4} penumbra={1} decay={2} castShadow/>
          </View>
        </div>

        <div className='flex flex-wrap my-40 z-10'>
          <div className='text-white max-w-[100%] h-fit z-10'>I developed a real-time chat application using React, focusing on creating an intuitive and dynamic user interface. Leveraging React's component-based architecture, I built reusable UI elements for messaging, notifications, and user management. By integrating WebSocket, the app supported instant updates, ensuring messages appeared seamlessly without page refreshes. I also used state management tools like Redux to handle complex data flows efficiently. This project highlights my ability to build responsive, user-friendly applications with a clean and maintainable frontend architecture.</div>
          <View  style={{ height: 200, width:'100%' }} className='' index={4}>
            <animated.group rotation={spring.rotation}>
              <group>
                <pointLight color={0xf7df1e} position={[0,2,7]} intensity={5}/>
                <Text3D font={'/fonts/gt.json'} position={[-0.8,1.5,6]} scale={[1,1,1]}>
                  JS
                  <meshStandardMaterial  color={0xbbbbbb}/>
                </Text3D>
              </group>
              <group rotation={[0,Math.PI * 2 / 3,0]}>
                <pointLight color={0xe34c26} position={[-1,2,7]} intensity={5}/>
                <pointLight color={0xf06529} position={[1,2,7]} intensity={5}/>
                <Text3D font={'/fonts/gt.json'} position={[-1.8,1.5,6]} scale={[1,1,1]}>
                  HTML
                  <meshStandardMaterial  color={0xbbbbbb}/>
                </Text3D>
              </group>
              <group  rotation={[0,Math.PI * 4 / 3,0]}>
              < pointLight color={0x663399} position={[0,2,7]} intensity={5}/>
                <Text3D font={'/fonts/gt.json'} position={[-1.4,1.5,6]} scale={[1,1,1]}>
                  CSS
                  <meshStandardMaterial  color={0xbbbbbb}/>
                </Text3D>
              </group>
            </animated.group>
            <ambientLight intensity={0.1}/>
          </View>
        </div>
      </div>
      <Canvas style={{position: 'fixed',top: 0,left:0, width: '100%',height: '100%', zIndex: '60' }}  
      // camera={{position:[0,2,8],rotation: [0,0,0]}} 
      shadows>
        <View.Port/>
      </Canvas>
    </main>
  )
}

export default App