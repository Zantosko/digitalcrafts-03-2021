import React, { Component } from 'react'
import MagnifyGlass from './assets/MagnifyGlass2.png'
import Microphone from './assets/Microphone.png'

export default class SearchBar extends Component {
  render() {
    return (
      <div className="Search-container">
        <div className="icon">
          <img src={MagnifyGlass} height="30" width="30"/>
        </div>
        <input type="text" className="SearchBar"/>
        <div className="icon">
          <img src={Microphone} width="18" height="26"/>
        </div>
      </div>
    )
  }
}
