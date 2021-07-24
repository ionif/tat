import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Venus_de_Milo.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['12328_Statue'].geometry}
        material={materials['default']}
      />
    </group>
  )
}

useGLTF.preload('/Venus_de_Milo.glb')