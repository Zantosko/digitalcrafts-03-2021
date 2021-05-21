import React, { useState } from 'react'
import Counter from './Counter'

export default function Greeter() {
  //* Set initial state
  //? Notice the use of square brackets when state variable is declared. This is the ES6 array destructuring syntax, and it means we’re assigning the first element of the array returned by useState to name and the second element to setName variable. So this means we have a state named name and we can update it by calling on setName() function.
  const [greet, setGreet] = useState("Zach")
  
  //* Grabs value of the input field and changes the initial state to whatever is typed in the input field. 
  const handleChange = (e) => {
    setGreet(e.target.value)
  }

  //* Passing initial state to "h1"
  return (
    <div>
      <h1>Welcome, {greet}</h1>
      <input 
        type="text"
        //* Setting change event to call handleChange()
        onChange={handleChange}
      />
      <Counter
        greet={greet}
      />
    </div>
  )
}
