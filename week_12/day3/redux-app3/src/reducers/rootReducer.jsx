const initialState = {
  list: ""
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "FILL": 
      return { ...state, list: [{name: "Joe"}, {name: "Mikael"}] }

    case "EMPTY":
      return { ...state, list: "" }

    default:
      return state
  }
}

export default rootReducer;