import React from 'react'
import ReactDOM from 'react-dom'

const Footer = props => (

  <footer class="container">
    <p>&copy; 2022 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
  </footer>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Footer />,
    document.body.appendChild(document.createElement('div')),
  )
})

