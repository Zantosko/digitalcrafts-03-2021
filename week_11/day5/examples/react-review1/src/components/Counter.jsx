import React, { useState } from 'react'

export default function Counter(props) {
  const [count, setCount] = useState(10)

  const handleClick = (e) => {
    setCount(e.target.name === "minus" ? (count - 1) : (count + 1))
  }

  return (
    <div>
      <h1>{props.greet} needs {count} job interviews</h1>
      <button
        name="minus"
        onClick={handleClick}
      >-</button>
      <button
        onClick={handleClick}
      >+</button>
    </div>
  )
}
