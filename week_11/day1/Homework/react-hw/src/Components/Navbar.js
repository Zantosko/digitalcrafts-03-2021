import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="left-nav">
          <ul className="nav-container">
            <li>About</li>
            <li>Store</li>
          </ul>
        </div>
        <div className="right-nav">
        <ul className="nav-container">
            <li>Gmail</li>
            <li>Images</li>
          </ul>
        </div>
      </div>
    )
  }
}
