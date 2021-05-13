import React, { Component } from 'react'

export default class ForeignMotorcycles extends Component {
  render() {
    const foreignMotorcycles = this.props.Motorcycles.ForeignMotorcycles[0]
    return (
      <div>
        <h4>Foreign Motorcycles</h4>
        <ul>
          <li>Vehicle name: {foreignMotorcycles.name}</li>
        </ul>
      </div>
    )
  }
}
