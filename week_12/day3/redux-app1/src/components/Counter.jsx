import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  incrementCount,
  decrementCount
} from '../actions/counterActions'

export default function Counter() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <div>
      <p>{counter}</p>
      <button onClick={()=> incrementCount(dispatch)}>Add</button>
      <button onClick={()=> decrementCount(dispatch)}>Subtract</button>
    </div>
  )
}
