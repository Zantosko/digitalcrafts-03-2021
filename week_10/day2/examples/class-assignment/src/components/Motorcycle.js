import React, { Component } from 'react'
import AmericanMotorcycles from './American-Motorcycles'
import ForeignMotorcycles from './Foreign-Motorcycles'

export default class Motorcycle extends Component {
  render() {
    return (
      <div>
        <h3>Motorcycles</h3>
        <AmericanMotorcycles Motorcycles={this.props.vehicles.Motorcycles[0]}/>
        <ForeignMotorcycles Motorcycles={this.props.vehicles.Motorcycles[1]}/>
      </div>
    )
  }
}
