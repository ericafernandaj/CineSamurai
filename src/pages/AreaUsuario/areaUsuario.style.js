import styled from "styled-components";

export const StyleAreaUsuario = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 5% auto;


  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: min-content;
  }

  label {
    font-weight: 500;
  }

  .align-textfield {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }

  button:hover{
    background-color: #d266ff;
        transition: 0.3s;
        transform: scale(1.02);
  }
`;
