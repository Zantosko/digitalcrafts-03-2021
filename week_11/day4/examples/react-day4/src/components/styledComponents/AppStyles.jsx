import styled from "styled-components";

export const AppStyle = styled.div`
  padding-top: 3rem;
  height: 110vh;
  width: 100vw;
  color: white;
  background: linear-gradient(to right, #c9d6ff, #e2e2e2);
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;