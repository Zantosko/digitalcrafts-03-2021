import React, { Component } from 'react'

export default class AmericanExCars extends Component {
  render() {
    const americanExotic = this.props.ExoticCars.AmericanExCars[0]
    return (
      <div>
        <h4>American Exotic Cars</h4>
        <ul>
          <li>Vehicle name: {americanExotic.name}</li>
        </ul>
      </div>
    )
  }
}
