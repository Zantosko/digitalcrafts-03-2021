//* Actions are functions that affect state.
// import { useDispatch } from 'react-redux';
// const dispatch = useDispatch();
import { INSERT_FAKE_JOE } from '../action-types/action-types'

export const changeFakeData = (dispatch) => {
  return dispatch({ type: INSERT_FAKE_JOE })
}