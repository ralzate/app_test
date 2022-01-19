
import React from 'react'
import ReactDOM from 'react-dom'

const Sidebar = props => (
  <div>Hello Sidebar</div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Sidebar />,
    document.body.appendChild(document.createElement('div')),
  )
})

