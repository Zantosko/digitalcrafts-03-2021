const initialState = {
  list: []
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "FILL": 
      return {  }

    case "EMPTY":
      return { ...state, list: [] }

    default:
      return state
  }
}

export default rootReducer;