import React from 'react';

interface UserProps {
	name: string;
	age: number;
	address: string;
}

export default function UserData(props: UserProps) {
	return (
		<div>
			<p>Hi</p>
			{props.address}
			{props.name}
			{props.age}
		</div>
	);
}
