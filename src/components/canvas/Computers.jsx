import { React, Suspense, useEffect, useState} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';


const Computers = (isMobile) =>{
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return(
    <mesh>
      <hemisphereLight intensity={0.30}
      groundColor="black"/>
      <pointLight intensity={15}/>
      <spotLight position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}/>
      <primitive
      object={computer.scene}
      scale={isMobile ? 0.6 : 0.7}
      position={isMobile ? [0, -3.3, -1.5] : [0, -3.5, -1.0]}
      rotation={[-0.01, -0.2, -0.1]}/>
    </mesh>
  )
}

const ComputersCanvas= () =>{
  const [isMobile, setisMobile] = useState(false);

  useEffect (() =>{
    //add a listener for changes to the screen size

    const mediaQuery = window.matchMedia("(max-width:500px)");

    //set the initial value of the `isMobile` state variable
    setisMobile(mediaQuery.matches);

    //define a callback function to handle changes to
    //the media query
    const handlemediaQueryChange = (event) => {
      setisMobile(event.matches);
    };

    //add the callback function as a listener for changes
    //to the mediaQuery
    mediaQuery.addEventListener("change", handlemediaQueryChange);

    //remove the listener when the component is unmounted
    return() =>{
      mediaQuery.removeEventListener("change", 
      handlemediaQueryChange);
    }
  }, []);
  return(
    <Canvas 
    frameloop="demand"
    shadows
    camera={{position: [20,3,5],fov: 25}}
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas;
