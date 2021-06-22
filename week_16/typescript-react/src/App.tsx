import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserData from './UserData';

function App() {
	let name: string = 'Zach';
	let age: number = 14;
	let address: string = '123 SPID';
	return (
		<div className='App'>
			<UserData name={name} age={age} address={address} />
		</div>
	);
}

export default App;
