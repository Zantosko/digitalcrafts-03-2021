// let language: string = 'eng';

// language = 23;

// let zachsFavNumber: number = 19;
// zachsFavNumber = 'something';

interface Person {
	name: string;
	height: number;
	occupation: string;
	[key: string]: any;
}

const zachsData: Person = {
	name: 'Zach',
	height: 6,
	occupation: 'student',
	jobLocation: '123 SPID',
};

const randysData: Person = {
	name: 'Randy',
	height: 6,
	occupation: 'student',
	address: '',
};
