const initialState = {
  username: "zach"
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE":
      return { ...state, username: "joe" }

    case "REVERT":
      return { ...state, username: "zach" }

    default:
      return state;
  }
}

export default rootReducer;