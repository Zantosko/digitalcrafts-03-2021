import React from 'react';
import { useSelector } from 'react-redux';

export default function OutputField() {
	const userInfo = useSelector(state => state.userInfo);
	return (
		<div className="form-container">
			<form>
				<input 
					type="text"
					value={userInfo.username}
					disabled
				/>
				<input 
					type="email"
					value={userInfo.email}
					disabled
				/>
				<button type="button">Clear</button>
			</form>
		</div>
	);
}
