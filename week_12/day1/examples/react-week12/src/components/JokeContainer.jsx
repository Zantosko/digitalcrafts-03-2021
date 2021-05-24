import React, { useState, useEffect }  from 'react'
import Joke from './Joke'

export default function JokeContainer() {

  const [joke, setJoke] = useState("");

  useEffect(() => {
    console.log("Hello World")
  });

  //* componentDidMount
  //? This triggers everytime the component is mounted.
  // useEffect(() => {})

  //* componentDidUpdate
  //? The array at the end is known as the Dependency Array.
  //? This will trigger one time only, after the component is mounted.
  // useEffect(() => {}, [])
  //? This will trigger everytime the component is mounted and everytime the value in the array is updated.
  // useEffect(() => {}, ["value"])

  //* componentDidUnmount
  // useEffect(())

  const getJoke = async () => {

  }

  return (
    <div>
      <h1>JokeContainer</h1>
      <Joke />
    </div>
  )
}
