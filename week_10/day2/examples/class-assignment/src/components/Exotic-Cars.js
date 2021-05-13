import React, { Component } from 'react'
import AmericanExCars from './American-Ex-Cars'
import ForeignExCars from './Foreign-Ex-Cars'

export default class ExoticCars extends Component {
  render() {
    return (
      <div>
        <h3>ExoticCars</h3>
        <AmericanExCars ExoticCars={this.props.vehicles.ExoticCars[0]}/>
        <ForeignExCars ExoticCars={this.props.vehicles.ExoticCars[1]}/>
      </div>
    )
  }
}
