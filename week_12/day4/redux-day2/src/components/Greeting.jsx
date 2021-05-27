import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeFakeData } from '../actions/greetingActions'

export default function Greeting() {
  const fakeData = useSelector(state => state.fakeData);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Hello Redux</h1>
      {fakeData.map(data => <p>{data.username}</p>)}
      <button onClick={()=> changeFakeData(dispatch)}>Change Name</button>
    </div>
  )
}
