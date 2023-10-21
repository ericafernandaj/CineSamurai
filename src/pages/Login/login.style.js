import styled from "styled-components";

export const StyleLogin = styled.main` 
    
    section, .div-principal, form {
         display: flex;
    }

    h1 {
        font-family: 'Roboto',sans-serif;
        font-weight: 500;
        text-decoration: none;
        font-size: 1.7rem;
    }

    .div-principal, form {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    section {
        justify-content: center;
        padding: 50px;
    }

    .div-principal {
        border-radius: 12px;
        background-color: #E9F0F0;
        width: 60%;
        padding: 50px;
    }

    .link-cadastro {
        font-size: 15px;
        font-family: 'Roboto',sans-serif;
        color: #263238;
    }
  
  
`
