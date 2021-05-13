import React, { Component } from 'react'
import AmericanMusCars from './American-Mus-Cars'

export default class MuscleCars extends Component {
  render() {
    return (
      <div>
        <h3>MuscleCars</h3>
        <AmericanMusCars MuscleCars={this.props.vehicles.MuscleCars[0]}/>
      </div>
    )
  }
}
