import styled from "styled-components";
import { useState } from "react";

//Styled Component

const Container = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  margin: 20px;
  padding: 20px;
  box-shadow: 3px 3px 10px 2px steelblue;
`;
const StyledH1 = styled.h1`
  color: #23415a;
  text-align: center;
`;

const StyledForm = styled.form`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const StyledLabel = styled.label`
  margin: 10px;
  color: #23415a;
  font-weight: 700;
`;

const StyledInput = styled.input`
  width: 200px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid steelblue;
  padding: 10px;
  outline: none;
  &:focus {
    border: 1px solid lightblue;
    box-shadow: 1px 0 10px 0 lightseagreen;
    transform: scale(1.1);
  }
`;
const StyledButton = styled.button`
  width: 100px;
  height: 30px;
  margin: 10px;
  border: 1px solid steelblue;
  background-color: steelblue;
  color: white;
  border-radius: 5px;

  cursor: pointer;
  &:hover {
    box-shadow: 2px 0 10px 1px lightseagreen;
    transform: scale(1.1);
  }
`;

const StyledP = styled.p`
  margin: 20px;
`;

function App() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");

  return (
    <Container>
      <StyledH1>My First React Form</StyledH1>

      <StyledForm>
        <StyledLabel>Name:</StyledLabel>
        <StyledInput
          className="name"
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <StyledLabel>Email:</StyledLabel>
        <StyledInput
          className="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <StyledButton className="button" type="submit">
          Submit
        </StyledButton>
      </StyledForm>
    </Container>
  );
}

export default App;
