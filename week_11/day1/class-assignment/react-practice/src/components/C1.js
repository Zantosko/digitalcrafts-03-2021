import React, { Component } from 'react'

export default class C1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greeting: "Hello Friend"
    }

  }



  render() {
    const { greeting } = this.state
    return (
      <div>
        <h1>Component 1</h1>
        <p>{greeting}</p>
        <button onClick={() => this.setState({
          greeting: "Howdy Partner"
        })}>Change State</button>
        <button onClick={() => this.setState({
          greeting: "Hello Friend"
        })}>Revert State</button>
      </div>
    )
  }
}
