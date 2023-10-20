import styled from "styled-components";

export const StyleInput = styled.input`
  
  border-radius: 8px;
  padding: 12px 15px;
  width: 300px;
  font-weight: 650;
  line-height: normal;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;

  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    border: 2px solid #101728;
  }
`;
