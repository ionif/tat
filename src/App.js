import React, { useEffect,Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import Model from './Model'

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 3;
      controls.maxDistance = 20;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

const Scene = () => {
  return (
    <>
    <ambientLight />
    <spotLight intensity={0.3} position={[5, 10, 50]} />
    <primitive object={new THREE.AxesHelper(10)} />
    <mesh>
      <boxGeometry attach="geometry" args={[3, 2, 1]} />
      <meshPhongMaterial attach="material" color="hotpink" />
    </mesh>
    <Suspense fallback={null}>
      <Model position={[0, -2, 0]}/>
    </Suspense>
    </>
  );
};

const App = () => {
  return (
    <Canvas>
      <CameraController />
      <Scene />
    </Canvas>
  );
};

export default App;
