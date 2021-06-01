import { combineReducers } from 'redux';
import username from './usernameReducer';
import email from './emailReducer';

const rootReducer = combineReducers({
	username,
	email,
});

export default rootReducer;
