import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function OutputField() {
	return (
		<div>
			<form>
				<input type="text" />
				<input type="email" />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
