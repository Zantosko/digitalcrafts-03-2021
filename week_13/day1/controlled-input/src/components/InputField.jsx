import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername } from '../actions/username-actions';
import { setEmail } from '../actions/email-actions';
import { setUserInfo } from '../actions/userinfo-actions';

export default function InputField() {
	const username = useSelector(state => state.username);
	const email = useSelector(state => state.email);
	const dispatch = useDispatch();
	return (
		<div className="form-container">
			<form onSubmit={(e) => {
				e.preventDefault();
				setUserInfo(dispatch, username, email)
			}}>
				<input 
					type="text" 
					placeholder="Type username" 
					value={username}
					onChange={(e) => setUsername(dispatch, e.target.value)}
					/>
				<input 
					type="email" 
					placeholder="Type email"
					value={email}
					onChange={(e) => setEmail(dispatch, e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
