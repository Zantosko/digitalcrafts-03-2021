import React, { useState } from 'react'
import {SignUpButton} from "./styledComponents/SignUpFormStyles"

const SignUpForm = ({ firstName, setFirstName }) => {
  return (
    <div className="sign-up-form-container">
      <h1>Create Account</h1>
      <form>
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Last Name"/>
        <input type="email" placeholder="Email"/>
        <input className="form-input" type="password" placeholder="Password"/>
        <SignUpButton>Sign Up</SignUpButton>
      </form>
    </div>
  )
}

export default SignUpForm