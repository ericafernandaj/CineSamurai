import styled from "styled-components";

export const StylePoltrona = styled.div`
  margin: 0;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  ul div:hover {
    background-color: #f54c5a;
  }

  ul div:active {
    background-color: #f54c5a;
  }

  .corLetras {
    color: #E9F0F0;
  }

  .tela {
    margin-top: 30px;
    width: 80%;
    height: 40px;
    border-radius: 8px;
    background-color: #E9F0F0;
    color: #101728;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat',sans-serif;
    font-size: 1rem;
    font-weight: 700;
    line-height: normal;
  }
`;
