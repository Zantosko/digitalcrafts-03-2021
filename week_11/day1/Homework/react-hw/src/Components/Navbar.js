import React, { Component } from 'react'
import Dots from './assets/dots.png'
import Account from './assets/Account.png'

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
            <img src={Dots} height="38" width="38"/>
            <img src={Account} height="38" width="40"/>
          </ul>
        </div>
      </div>
    )
  }
}
