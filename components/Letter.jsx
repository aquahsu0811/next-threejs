"use client"

import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { Text3D, Center, Preload, RenderTexture, MeshTransmissionMaterial } from '@react-three/drei'

export default function Letter({ char, children, stencilBuffer = false, ...props }) {
	const main = useRef()
	const contents = useRef()
	const events = useThree((state) => state.events)
	const controls = useThree((state) => state.controls)
	// The letters contents are moved to its whereabouts in world coordinates
	//useFrame(() => contents.current.matrix.copy(main.current.matrixWorld))
	return (
		/** A physics rigid body */
		<RigidBody restitution={0.1} colliders="cuboid" {...props}>
			{/** Center each letter */}
			<Center ref={main}>
				<Text3D
					bevelEnabled
					onDoubleClick={(e) => (e.stopPropagation(), controls.fitToBox(main.current, true))}
					font="/assets/font/bold.blob"
					smooth={1}
					scale={0.125}
					size={80}
					height={4}
					curveSegments={10}
					bevelThickness={10}
					bevelSize={2}
					bevelOffset={0}
					bevelSegments={5}>
					{char}
					<MeshTransmissionMaterial clearcoat={1} samples={3} thickness={40} chromaticAberration={0.25} anisotropy={0.4}>
						{/** Render a portalled scene into the "buffer" attribute of transmission material, which is a texture.
                 Since we're moving the contents with the letter shape in world space we take the standard event compute. */}
						<RenderTexture attach="buffer" stencilBuffer={stencilBuffer} width={512} height={512} compute={events.compute}>
							{/** Everything in here is self-contained, behaves like a regular canvas, but we're *in* the texture */}
							<color attach="background" args={['#4899c9']} />
							<group ref={contents} matrixAutoUpdate={false}>
								{/** Drop the children in here, this is where the sandboxes land. */}
								{children}
							</group>
							<Preload all />
						</RenderTexture>
					</MeshTransmissionMaterial>
				</Text3D>
			</Center>
		</RigidBody>
	)
}
