import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function User() {
  const username = useSelector(state => state.username);
  const dispactch = useDispatch();

  return (
    <div>
      <p>{username}</p>
      <button onClick={()=> dispactch({type: "CHANGE"})}>Change</button>
      <button onClick={()=> dispactch({type: "REVERT"})}>Revert</button>
    </div>
  )
}
