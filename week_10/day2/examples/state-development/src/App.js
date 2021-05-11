import './App.css';
import React, { Component } from 'react'
import Weather from './Weather';
import Students from './Students';

export default class App extends Component {
  
  // create the constructor (props)
  // invoke super inside of the constructor, pass it props as an argument
  // degine this.state={}


  constructor(props) {
    super(props);

    //* state management
  
    // the process of components passing data to each other is called props.
  
    // the process of a component managing it's own and preserving it in a holding space, temporarily this is called state management.

    // A change in state and mounting/unmounting on the DOM causes the page to re-render. You want to keep re-renders to a minimum because too many will cause your page to slow down.
    this.state = {
      counter: 0,
      title: "State Mangement",
      itIsRainingInHouston: false,
      restaurants: [
        {
          name: "uchi"
        },
        {
          name: "Longhorn"
        }
      ],
      students: [
        { name: "ZachAntosko"},
        { name: "CarloCarbonel"},
        { name: "PatrickGroves"}
      ]
    }
    //? this.setState
    // this is the built in function to manipulate any state variable
    // you will only use this.setState to change state.
  }


  
  
  render() {
    const { counter, title, itIsRainingInHouston, restaurants } = this.state
    return (
      <div>
        <h1>State Management</h1>
        <p>Counter {counter}</p>
        <p>Title {title}</p>
        <p>
          Is it raining in Houston?
          <Weather itIsRainingInHouston={itIsRainingInHouston} restaurants={restaurants}/>
          {itIsRainingInHouston ? (
            <div className={itIsRainingInHouston ? "rain" : "no-rain"}>
              <p>It's raining</p>
            </div>) : 
            (<div className={itIsRainingInHouston ? "rain" : "no-rain"}>
              <p>Nope, its sunny outside!</p>
            </div>
          )}
        </p>
        <button onClick={(e) => console.log(e.target.type)}>Add</button>
        <button onClick={() => this.setState({
          counter: this.state.counter - 1
        })}>Subtract</button>

        <button onClick={() => 
          this.setState({
            itIsRainingInHouston: !itIsRainingInHouston
          })
        }>
          {itIsRainingInHouston ? "Beautiful day" : "It's raining, I'm sad"}
        </button>


        <h1>Students of DC</h1>
        {this.state.students.map((student) => {
          return <Students name={student.name} />
        })}
      </div>
    )
  }
}
