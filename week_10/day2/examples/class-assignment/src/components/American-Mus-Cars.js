import React, { Component } from 'react'

export default class AmericanMusCars extends Component {
  render() {
    const americanMuscle  = this.props.MuscleCars.AmericanMusCars[0];
    return (
      <div>
        <h4>American Muscle Cars</h4>
        <ul>
          <li>Vehicle name: {americanMuscle.name}</li>
        </ul>
      </div>
    )
  }
}
