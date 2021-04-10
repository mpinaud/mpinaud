import * as THREE from "three"
import React, { useRef, useState } from "react"
import { useFrame } from "react-three-fiber"

interface BoxProps {
  position: number[]
}

const Box: React.FC<BoxProps> = ({ position }) => {
  // Direct access to the mesh
  const mesh = useRef<THREE.Mesh>()
  const [hovered, setHover] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.05
    }
  })

  return (
    <mesh
      {...position}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? 0x000000 : 0x808080}
      />
    </mesh>
  )
}

export default Box
