import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Names() {
  const list = useSelector(state => state.list);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{list.map(listName => listName.name)}</p>
      <button onClick={()=> dispatch({type: "FILL"})}>Fill</button>
      <button onClick={()=> dispatch({type: "EMPTY"})}>Empty</button>
    </div>
  )
}
