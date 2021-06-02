import { SET_USER_INFO } from '../action-types/userinfo-action-type';

export const setUserInfo = (dispatch, username, email) => {
  return dispatch({ type: SET_USER_INFO, payload: { username, email } });
};
