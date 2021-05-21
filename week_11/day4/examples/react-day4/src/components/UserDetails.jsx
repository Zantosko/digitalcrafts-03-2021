import React from 'react'
import {SignUpButton, SignUpFormInput, SignUpFormDiv, SignUpFormContainer} from '../components/styledComponents/SignUpFormStyles';

export default function UserDetails({ values, resetUserDetails }) {
  return (
    <SignUpFormContainer>
      <h1>User Details</h1>
      <SignUpFormDiv>
        <SignUpFormInput 
          type="text"
          placeholder="First Name"
          value={values.firstName}
        />
        <SignUpFormInput 
          type="text" 
          placeholder="Last Name" 
          value={values.lastName}
        />
        <SignUpFormInput 
          type="email" 
          placeholder="Email" 
          value={values.email}
        />
        <SignUpFormInput 
          type="password" 
          placeholder="Password"
          value={values.password} 
        />
        <SignUpFormInput 
          type="password" 
          placeholder="Re-Type Password" 
          value={values.retypePassword}
        />
      </SignUpFormDiv>
      <SignUpButton onClick={()=> resetUserDetails()}>Clear Values</SignUpButton>
    </SignUpFormContainer>
  )
}
