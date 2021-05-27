import {
  CHANGE,
  REVERT
} from '../action-types/action-types';

const initialState = {
  username: "zach"
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE:
      return { username: "joe" }

    case REVERT:
      return { username: "zach" }

    default:
      return state;
  }
}

export default rootReducer;