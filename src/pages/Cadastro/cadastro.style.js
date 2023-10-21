import styled from "styled-components";

export const StyleCadastro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid white;
  width: 50%;
  width: 70%;
  margin: 30px auto;
  background-color: #e9f0f0;
  border-radius: 8px;

  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-decoration: none;
    font-size: 1.7rem;
    align-items: center;
    margin-top: 20px;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #e9f0f0;
    gap: 8px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .align-textfield{
    display: flex;
    flex-direction: row;
    gap: 50px;
  }

  .link-login {
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    color: #263238;
  }
`;
