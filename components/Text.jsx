
import { Canvas } from '@react-three/fiber'
import { SoftShadows, OrbitControls } from "@react-three/drei";
import { Physics } from '@react-three/rapier'

import Letter from "./Letter";

export default function Text() {

  return (
    <Canvas dpr={[1.5, 2]} camera={{ position: [-20, 40, 30], fov: 45, near: 1, far: 300 }}>

      <Physics gravity={[0, -60, 0]}>
      <Letter char="P" position={[1, 50, -1]} rotation={[0, 0, 0]}>
          {/** The sandboxes dropped into here have no idea what's going to happen.
               For all intents and purposes they're just self-contained components.  */}
        </Letter>
      </Physics>

      <OrbitControls
        makeDefault
        rotateSpeed={2}
      />
    </Canvas>
  )
}