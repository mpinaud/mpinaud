import React from "react"
import renderer from "react-test-renderer"
import App from "./App"

describe("App", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<App siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
