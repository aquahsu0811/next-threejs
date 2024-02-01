
import { Canvas } from '@react-three/fiber'
import { Preload, SoftShadows, OrbitControls, Environment, Lightformer, ContactShadows, CameraControls } from "@react-three/drei";
import { Physics, CuboidCollider } from '@react-three/rapier'

import Letter from "./Letter";
import Basic from './sandboxes/Basic';

export default function Text() {

  return (
    <Canvas dpr={[1.5, 2]} camera={{ position: [-20, 40, 30], fov: 45, near: 1, far: 300 }}>

      <Physics gravity={[0, -60, 0]}>
        <Letter char="M" position={[-1, 80, 3]} rotation={[10, 11, 12]}>
          {/** The sandboxes dropped into here have no idea what's going to happen.
               For all intents and purposes they're just self-contained components.  */}
               <Basic scale={5}  />
        </Letter>

        <Letter char="P" position={[1, 50, -1]} rotation={[0, 0, 0]}>
          {/** The sandboxes dropped into here have no idea what's going to happen.
               For all intents and purposes they're just self-contained components.  */}
        </Letter>
        <Letter char="P" position={[1, 50, -1]} rotation={[0, 0, 0]}>
          {/** The sandboxes dropped into here have no idea what's going to happen.
               For all intents and purposes they're just self-contained components.  */}
        </Letter>

        <CuboidCollider position={[0, -6, 0]} type="fixed" args={[100, 1, 100]} />
        <CuboidCollider position={[0, 0, -30]} type="fixed" args={[30, 100, 1]} />
        <CuboidCollider position={[0, 0, 10]} type="fixed" args={[30, 100, 1]} />
        <CuboidCollider position={[-30, 0, 0]} type="fixed" args={[1, 100, 30]} />
        <CuboidCollider position={[30, 0, 0]} type="fixed" args={[1, 100, 30]} />
      </Physics>

      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dancing_hall_1k.hdr" resolution={1024}>
        {/** On top of the HDRI we add some rectangular and circular shapes for nicer reflections */}
        <group rotation={[-Math.PI / 3, 0, 0]}>
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
            <Lightformer key={i} form="circle" intensity={4} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
          ))}
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
        </group>
      </Environment>
      <ContactShadows smooth={false} scale={100} position={[0, -5.05, 0]} blur={0.5} opacity={0.75} />
      {/* <OrbitControls
        makeDefault
        rotateSpeed={2}
      /> */}
      {/** Yomotsu/camera-controls, a better replacement for OrbitControls */}
      <CameraControls makeDefault dollyToCursor minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      {/** Makes sure everything is processed and GPU uploaded before Threejs "sees" it */}
      <Preload all />
    </Canvas>
  )
}