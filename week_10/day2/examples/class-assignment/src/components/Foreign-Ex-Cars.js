import React, { Component } from 'react'

export default class ForeignExCars extends Component {
  render() {
    const foreignExotic = this.props.ExoticCars.ForeignExCars[0]
    return (
      <div>
        <h4>Foreign Exotic Cars</h4>
        <ul>
          <li>Vehicle name: {foreignExotic.name}</li>
        </ul>
      </div>
    )
  }
}
