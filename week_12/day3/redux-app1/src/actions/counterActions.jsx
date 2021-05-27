export const incrementCount = (dispatch) => {
  return dispatch({ type: "ADD" })
}

export const decrementCount = (dispatch) => {
  return dispatch({ type: "SUBTRACT" })
}