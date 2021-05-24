import React from 'react'

export default function Joke({ joke }) {

  return (
    <div>
      <h1>Jokes</h1>
      <p>{joke.joke}</p>
    </div>
  )
}
