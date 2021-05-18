import React, { Component } from 'react'
import Card from './Card'

export default class CardContainer extends Component {
  render() {
    
    const { pokemonData } = this.props
    return (
      <div>
        <h1>Card Container</h1>

        <div className="Main-card-container">
          {pokemonData[0].pokemon.map((singlePokemon, index) => <Card key={singlePokemon.name + index} pokemon={singlePokemon}/>)}
        </div>
      </div>
    )
  }
}
