import styled from "styled-components";


export const StyleBannerCine1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  table {
  font-family: "Montserrat", sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  text-align: center;
}

.linha1 {
    background-color: #101728;
    color: rgb(247, 247, 247);
}

  .initBox {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;
    gap: 25px;
  }

  .posterBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 20%;
  }

  .posterBox img:hover{    
    transition: .3s;
    transform: scale(1.05) translateY(-10px);  
    
  }
  .meia {
    width: 100px;
  }
  .cardPromocao {
    display: flex;
    width: 100%;
    color: white;
    align-items: center;
  }
  .pipocaMeia {
    width: 100%;
  }

  .primeiroBloco {
    display: flex;
    align-items: center;
  }
  .segundoBloco {
    margin-bottom: 5%;

  }

  .segundoBloco ul{
    list-style-type: none;
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  
  }

  h1 {
    color: white;
    font-family: "Montserrat", sans-serif;
  }

  .buttonBox button:hover {
    background-color: #d266ff;
    transition: 0.3s;
    transform: scale(1.02);
  }

  .subtitulo h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 2.5rem;
    margin: 80px;
  }
`;
