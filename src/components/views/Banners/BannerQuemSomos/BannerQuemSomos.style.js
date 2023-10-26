import styled from "styled-components";

export const StyleQuemSomos = styled.div`
  .quemSomos {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid white;
    width: 50%;
    margin: 80px auto;
    border: none;
    color: #f2f2f2;
    font-family: "Roboto", sans-serif;
  }

  div {
    flex-direction: column;
    align-items: center;
    margin: 20px auto;
    border-radius: 4px;
    border: none;
    padding: 10px;
    text-align: justify;
    line-height: 27px;
    font-family: "Roboto", sans-serif;
  }

  h1, h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    text-decoration: none;
    font-size: 2rem;
    color: #d266ff;
    text-align: center;
    margin:7%;
  }

  h3 {
    font-size: 1.3rem;
    color:#d266ff;
    margin: 2%;
    text-align: center;

  }

  p{
    font-size: 1.4rem;
  }
`;
