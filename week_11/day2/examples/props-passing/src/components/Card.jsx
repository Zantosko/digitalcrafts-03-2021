import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flip: true
    }
  }


  render() {
    const { hp, id, name, sprites } = this.props.pokemon
    const { flip } = this.state
    return (
      <div>
        <img src={flip ? sprites.front : sprites.back} />
        <h2>{name}</h2>
        <p>{hp}</p>
        <p>{id}</p>
        <button onClick={() => this.setState({flip: !flip})}>Flip</button>
      </div>
    )
  }
}

