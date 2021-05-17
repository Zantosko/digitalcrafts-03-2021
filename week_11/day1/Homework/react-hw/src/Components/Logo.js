import React, { Component } from 'react'
import Img from './assets/GoogleLogo.png'

export default class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <img src={Img} alt="pic" width="272" height="92"/>
      </div>
    )
  }
}
