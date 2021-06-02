import { combineReducers } from 'redux';
import username from './usernameReducer';
import email from './emailReducer';
import userInfo from './userInfoReducer';

const rootReducer = combineReducers({
	username,
	email,
	userInfo
});

export default rootReducer;
