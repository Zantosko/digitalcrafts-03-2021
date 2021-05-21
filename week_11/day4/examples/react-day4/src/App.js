import "./App.css";
// import ClassBased from "./components/ClassBased";
import React, { useState } from "react";
import { AppStyle } from "./components/styledComponents/AppStyles";
import SignUpForm from "./components/SignUpForm";
import UserDetails from "./components/UserDetails";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  retypePassword: ""
}

function App() {
  const [values, setValues] = useState(initialState);
  const [userDetails, setUserDetails] = useState(initialState)

  const setUserAndResetForm = (formDetails) => {
    setUserDetails(formDetails);
    setValues(initialState)
  }

  const resetUserDetails = () => {
    setUserDetails(initialState)
  }

  return (
    <AppStyle className="App">
      <SignUpForm 
        values={values} 
        setValues={setValues} 
        setUserAndResetForm={setUserAndResetForm}
      />
      <UserDetails 
        values={userDetails}
        resetUserDetails={resetUserDetails}
      />
    </AppStyle>
  );
}

export default App;
