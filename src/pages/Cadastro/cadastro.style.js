import styled from "styled-components";

export const StyleCadastro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  width: 50%;
  width: 70%;
  margin: 30px auto;
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
    background-color: #dcb2ed;
    padding: 2% 12% 3% 12%;
    border-radius: 3%;    
    gap: 8px;   
    
  }

  section button{
    color: #5c2b71;
    
  }

  section button:hover{    
    background-color: #5c2b71;
    color:#fabd2b;
    transition: .2s;    
  }

  .div-cadastro{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 18px;
  }


  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    
  }
  label{
        font-weight: 500;
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
