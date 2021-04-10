import React from "react"
import Title from "./components/Title"
import Box from "./components/Box"
import { Canvas } from "react-three-fiber"
import "./styles.css"

// eslint-disable-next-line react/display-name
export default () => (
  <main>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
    <Title />
  </main>
)
