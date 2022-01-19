
import React from 'react'
import ReactDOM from 'react-dom'

const Title = props => (
  <div>Hello Title</div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Title />,
    document.body.appendChild(document.createElement('div')),
  )
})

