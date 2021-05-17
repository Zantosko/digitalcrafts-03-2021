import React, { Component } from 'react'

export default class C3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: "Hover over me for a suprise!"
    }

  }

  render() {
    const { hover } = this.state
    return (
      <div>
        <h1>Component 3</h1>
        <p onMouseOver={() => this.setState({
            hover: "It's nothing special"
          })}
          onMouseOut={() => this.setState({
            hover: "Hover over me for a suprise!"
          })}
        >{hover}</p>
      </div>
    )
  }
}
