import React, { Component } from 'react'

export default class C4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "Default Value"
    }

  }


  render() {
    const { value } = this.state
    return (
      <div>
        <h1>Component 4</h1>
        <label>Text box</label>
        <br></br>
        <input type="text" value={value}/>
        <br></br>
        <br></br>
        <input type="button" onClick={() => this.setState({
          value: "New value"
        })} value="Button"/>
      </div>
    )
  }
}
