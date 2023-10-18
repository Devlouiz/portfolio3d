import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const Ball = (props) =>{
  const [decal] = useTexture([props.imgUrl])
  return(
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0, 0, 0.05]}/>
      <mesh scale={2.55} castShadow receiveShadow>
        <icosahedronGeometry args={[1, 1]}/>
        <meshStandardMaterial
        color={'#fff8eb'}
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading/>
        <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        flatShading
        map={decal}/>
      </mesh>
    </Float>
  )
}
const BallCanvas =({icon})=>{
  return(
    <div>
      <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false}/>
          <Ball imgUrl={icon}/>
        </Suspense>
      </Canvas>
    </div>
  )
}

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-3
    w-[80%] mx-auto">
      {technologies.map((tech) => (
        <div className="w-40px h-65px">
          <BallCanvas key={tech.name} icon={tech.icon}/>
        </div>
      ))}
    </div>
  )
}
export default SectionWrapper(Tech, 'Tech')