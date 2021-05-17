import React, { Component } from 'react'

export default class C2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      season: "Summer 🔥",
      bgColor: "red"
    }

  }

  render() {
    const { season } = this.state
    return (
      <div>
        <h1>Component 2</h1>
        <p style={{backgroundColor:this.state.bgColor}}>{season}</p>
        <button onClick={() => this.setState({
          season: "Winter 🍨",
          bgColor: "blue"  
        })}>Change Season</button>
        <button onClick={() => this.setState({
          season: "Summer 🔥",
          bgColor: "red"
        })}>Revert Season</button>
      </div>
    )
  }
}
