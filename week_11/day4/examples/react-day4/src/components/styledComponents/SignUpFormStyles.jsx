import styled from "styled-components";

export const SignUpButton = styled.button`
  background-color: rgba(0, 0, 0, 0.05);
  border: #fff solid 1px;
  width: 200px;
  height: 40px;
  color: #FFF4BD;
  font-family: sans-serif;
  font-size: 1.1rem;
  border-radius: 17px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #F4B9B8;
    color: #fff;
  }
`;

export const SignUpFormContainer = styled.div`
  border-radius: 10px;
  padding: 1rem;
  margin: 1.5rem;
  width: 50vw;
  background-color: #85D2D0;
  color: #FFF4BD;
  box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.3);
`

export const SignUpFormInput = styled.input`
  background-color: inherit;
  color: #FFF4BD;
  height: 2.2rem;
  width: 70%;
  border: none;
  border-bottom: #fff solid 1px;
  padding-left: 20px;
  margin-bottom: 1rem;

  &::placeholder {
    color: #fff
  }

  &:focus {
    outline: none;
  }
`;

export const SignUpFormDiv = styled.form`
  display: grid;
  place-items: center;
  padding-top: 1rem;
`;