import React, { useState, useEffect }  from 'react'
import Joke from './Joke'

export default function JokeContainer() {
  const [joke, setJoke] = useState("");
  const [name, setName] = useState("Zach");

  useEffect(() => {
    getJoke();
  },[name]);

  //* componentDidMount
  //? This triggers everytime the component is mounted.
  // useEffect(() => {})

  //* componentDidUpdate
  //? The array at the end is known as the Dependency Array.
  //? This will trigger one time only, after the component is mounted.
  //? If you do an API call that sets state, don't do it without the dependency array. Without the dependency array you'll be caught in an infinite loop.
  // useEffect(() => {}, [])

  //? This will trigger everytime the component is mounted and everytime the value in the array is updated.
  // useEffect(() => {}, ["value"])

  //* componentDidUnmount
  // useEffect(())

  const getJoke = async () => {
    const fetchJoke = await fetch("https://icanhazdadjoke.com", {
      headers: {
        "Accept": "application/json"
      }
    });
    const jsonJoke = await fetchJoke.json()
    console.log(jsonJoke)

    setJoke(jsonJoke)
  }

  return (
    <div>
      <h1>JokeContainer</h1>
      <Joke />
    </div>
  )
}
