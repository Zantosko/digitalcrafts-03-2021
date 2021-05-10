import React, { Component } from 'react'
import '../App.css'

export default class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <ul className="Nav-container">
          <li className="Nav-items">Home</li>
          <li className="Nav-items">About Me</li>
        </ul>
      </div>
    )
  }
}
