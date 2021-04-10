import React from "react"
import * as pack from "../../../package.json"

const date = new Date()
const year = date.getFullYear()

const Title: React.FC = () => {
  return (
    <div>
      <p>
        Mikey Pinaud {year} V{pack.version}
      </p>
    </div>
  )
}

export default Title
