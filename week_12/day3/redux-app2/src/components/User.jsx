import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  changeName,
  revertName
} from '../actions/userActions'

export default function User() {
  const username = useSelector(state => state.username);
  const dispactch = useDispatch();

  return (
    <div>
      <p>{username}</p>
      <button onClick={()=> changeName(dispactch)}>Change</button>
      <button onClick={()=> revertName(dispactch)}>Revert</button>
    </div>
  )
}
