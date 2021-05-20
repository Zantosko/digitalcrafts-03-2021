import { useState } from 'react';
import './App.css';
import ClassBased from "./components/ClassBased.jsx"
import SignUpForm from "./components/SignUpForm.jsx"
import UserDetails from './components/UserDetails';

function App() {
  const [firstName, setFirstName] = useState("")

  return (
    <div className="App">
      <ClassBased />
      <SignUpForm firstName= {firstName} setFirstName={setFirstName}/>
      <UserDetails />
    </div>
  );
}

export default App;
