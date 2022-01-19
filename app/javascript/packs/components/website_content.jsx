
import React from 'react'
import ReactDOM from 'react-dom'

const WebsideContent = props => (
  <div>Hello WebsideContent</div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <WebsideContent />,
    document.body.appendChild(document.createElement('div')),
  )
})

