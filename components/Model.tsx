import {useState, Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Html } from '@react-three/drei'
import Enigma from './Enigma'
import Statue from './Statue'

type ModelProps = {
    index: number
}

const Model = ({index} : ModelProps) => {

  
  return (
    <div className='flexCenter relative h-screen w-full'>
        <div className='rounded-full bg-secondary py-8'/>
        <Canvas>
            <ambientLight />
            <OrbitControls enableZoom={false}/>
            <Suspense fallback={<Html><h1>Interactive 3D model is still loading...</h1></Html>}>
                {index == 1 ?  <Enigma scale={[4.5, 4.5, 4.5]} position={[0, -0.5, 0]}/> : <Statue scale={[1.5, 1.5, 1.5]} position={[0, -0.5, 0]}/>}
                
            </Suspense>
            <Environment preset='sunset' />
        </Canvas>
        <h2 className='absolute top-36 bold-32 text-gray'>Interactive!</h2>
        
    </div>
  )
}

export default Model