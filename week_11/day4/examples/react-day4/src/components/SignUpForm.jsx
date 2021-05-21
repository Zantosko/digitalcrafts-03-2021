import React, { useState } from "react";
import {
  SignUpButton,
  SignUpFormInput,
  SignUpFormDiv,
  SignUpFormContainer
} from "./styledComponents/SignUpFormStyles";

const SignUpForm = ({ values, setValues, setUserAndResetForm }) => {
  return (
    <SignUpFormContainer>
      <h1>Create Account</h1>
      <SignUpFormDiv>
        <SignUpFormInput
          onChange={(e) => {
            setValues({ ...values, firstName: e.target.value })
          }}
          type="text"
          placeholder="First Name"
          value={values.firstName}
        />
        <SignUpFormInput
          onChange={(e) => {
            setValues({ ...values, lastName: e.target.value })
          }}
          type="text" 
          placeholder="Last Name"
          value={values.lastName}
        />
        <SignUpFormInput 
          onChange={(e) => {
            setValues({ ...values, email: e.target.value })
          }}
          type="email" 
          placeholder="Email" 
          value={values.email}
        />
        <SignUpFormInput
          onChange={(e) => {
            setValues({ ...values, password: e.target.value })
          }}
          type="password" 
          placeholder="Password"
          value={values.password}
        />
        <SignUpFormInput
          onChange={(e) => {
            setValues({ ...values, retypePassword: e.target.value })
          }}
          type="password" 
          placeholder="Re-Type Password" 
          value={values.retypePassword}
        />
      </SignUpFormDiv>
        <SignUpButton onClick={()=> setUserAndResetForm(values)}>Sign Up</SignUpButton>
    </SignUpFormContainer>
  );
};
export default SignUpForm;