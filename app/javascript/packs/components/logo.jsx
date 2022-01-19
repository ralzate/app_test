import React from 'react'
import ReactDOM from 'react-dom'

const Logo = props => (
  <div>Hello Logo</div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Logo />,
    document.body.appendChild(document.createElement('div')),
  )
})

