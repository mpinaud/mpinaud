import React from "react"
import * as pack from "../../../package.json"

const date = new Date()
const year = date.getFullYear()

const App = () => {
  return (
    <div>
      <p>Mikey Pinaud {year}</p>
      <p>V{pack.version}</p>
    </div>
  )
}

export default App
