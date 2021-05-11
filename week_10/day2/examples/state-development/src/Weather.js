import React, { Component } from 'react'

export default class Weather extends Component {
  render() {
    return (
      <div>
        <p>The weather in Houston is: {" "}
          {this.props.itIsRainingInHouston ? "rain" : "sunny"}
        </p>
        <p> My favorite restaurant is: {" "}
          {this.props.restaurants.map((restaurant) => {
            return <p>{restaurant.name}</p>;
          })}

        </p>
      </div>
    )
  }
}
