import React, { Component } from 'react'

export default class AmericanMotorcycles extends Component {
  render() {
    const americanMotorcycles = this.props.Motorcycles.AmericanMotorcycles[0]
    return (
      <div>
        <h4>American Motorcycles</h4>
        <ul>
          <li>Vehicle name: {americanMotorcycles.name}</li>
        </ul>
      </div>
    )
  }
}
