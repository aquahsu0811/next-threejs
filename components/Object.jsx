"use client"
import { Canvas } from "@react-three/fiber";
import { SoftShadows, OrbitControls } from "@react-three/drei";

export default function Object() {

  return (
    <Canvas shadows camera={{ fov: 65, position: [0, -0.1, 3.5] }} >
      <SoftShadows />

      <ambientLight intensity={1} />
      <directionalLight castShadow position={[0, 10, 3]} intensity={0.5} shadow-mapSize={1024}>
        <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
      </directionalLight>

      <pointLight position={[0, 0, 1]} color="white" intensity={0.2} />

      <OrbitControls
        makeDefault
        rotateSpeed={2}
      />
    </Canvas>
  )
}