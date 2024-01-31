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

        </RigidBody>
    )
}
