import React from 'react'
import ReactDOM from 'react-dom'

const Main = props => (
  <div>Hello Main</div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Main />,
    document.body.appendChild(document.createElement('div')),
  )
})

