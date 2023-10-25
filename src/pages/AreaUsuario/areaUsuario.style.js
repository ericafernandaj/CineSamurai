import styled from "styled-components";

export const StyleAreaUsuario = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 35px;

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
`;
