/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 statue.gltf -t 
Author: vmastilovic (https://sketchfab.com/vmastilovic)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/alan-turing-fb007160b72c4421ba4cc21d43326515
Title: Alan Turing
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    model_tex_u1_v1_0: THREE.Mesh
    model_tex_u1_v1_0_1: THREE.Mesh
    model_tex_u1_v1_0_2: THREE.Mesh
    model_tex_u1_v1_0_3: THREE.Mesh
    model_tex_u1_v1_0_4: THREE.Mesh
    model_tex_u1_v1_0_5: THREE.Mesh
    model_tex_u1_v1_0_6: THREE.Mesh
    model_tex_u1_v1_0_7: THREE.Mesh
    model_tex_u1_v1_0_8: THREE.Mesh
    model_tex_u1_v1_0_9: THREE.Mesh
  }
  materials: {
    tex_u1_v1: THREE.MeshBasicMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/statue.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.model_tex_u1_v1_0.geometry} material={materials.tex_u1_v1} />
        <mesh geometry={nodes.model_tex_u1_v1_0_1.geometry} material={materials.tex_u1_v1} />
        <mesh geometry={nodes.model_tex_u1_v1_0_2.geometry} material={materials.tex_u1_v1} />
        <mesh geometry={nodes.model_tex_u1_v1_0_3.geometry} material={materials.tex_u1_v1} />
        <mesh geometry={nodes.model_tex_u1_v1_0_4.geometry} material={materials.tex_u1_v1} />
        <mesh geometry={nodes.model_tex_u1_v1_0_5.geometry} material={materials.tex_u1_v1} />
        <mesh geometry={nodes.model_tex_u1_v1_0_6.geometry} material={materials.tex_u1_v1} />
        <mesh geometry={nodes.model_tex_u1_v1_0_7.geometry} material={materials.tex_u1_v1} />
        <mesh geometry={nodes.model_tex_u1_v1_0_8.geometry} material={materials.tex_u1_v1} />
        <mesh geometry={nodes.model_tex_u1_v1_0_9.geometry} material={materials.tex_u1_v1} />
      </group>
    </group>
  )
}

useGLTF.preload('/statue.gltf')
