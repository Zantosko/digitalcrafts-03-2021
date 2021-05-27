import { INSERT_FAKE_JOE } from '../action-types/action-types';

const initialState = {
  fakeData: [{ username: "Zach", height: "8.0" }]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_FAKE_JOE:
      return { fakeData: [{ username: "Joe", height: "7.1" }] }

    default:
      return state
  }
}


export default reducer;