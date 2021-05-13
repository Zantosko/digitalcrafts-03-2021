import React, { Component } from 'react'
import ExoticCars from './Exotic-Cars'
import Motorcycle from './Motorcycle'
import MuscleCars from './Muscle-Cars'

export default class Garage extends Component {
  constructor(props) {
    super(props);


    this.state = {
      vehicles: [
        {
          Motorcycles: [
            {
              AmericanMotorcycles: [
                {name: "A-motorcycle"}
              ]
            },
            {
              ForeignMotorcycles: [
                {name: "F-motorcycle"}
              ]
            }
          ]
        },
        {
          ExoticCars: [
            {
              AmericanExCars: [
                {name: "A-Ex-car"}
              ]},
            {
              ForeignExCars: [
                {name: "F-Ex-car"}
              ]
            }
          ]
        },
        {
          MuscleCars: [
            {
              AmericanMusCars: [
                {name: "A-Mus-car"}
              ]
            }
          ]
        }
      ]
    }
  }


  render() {
    const { vehicles } = this.state
    return (
      <div>
        <h2>Garage</h2>
        <MuscleCars vehicles={vehicles[2]}/>
        <ExoticCars vehicles={vehicles[1]}/>
        <Motorcycle vehicles={vehicles[0]}/>
      </div>
    )
  }
}
