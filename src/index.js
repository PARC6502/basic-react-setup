import React from "react"
import ReactDOM from "react-dom"

const Title = ({ text }) => <h1>{text}</h1>

ReactDOM.render(
  <Title text="Basic React App" />,
  document.getElementById("app")
)

module.hot.accept()
