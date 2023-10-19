import styled from "styled-components";

export const StyleCadastro = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: solid white;
white: 50%;
width: 70%;
margin: 30px auto;
background-color: #E9F0F0;
border-radius: 8px;



h1 {
    font-family: 'Roboto',sans-serif;
    font-weight: 500;
    text-decoration: none;
    font-size: 1.7rem;
    align-items: center;
    margin-top: 20px;
    
    
}

input {
    margin-left: 20px;
    border-radius: 8px;
    padding: 12px 15px;
    width: 300px;
    font-weight: 650;
    line-height: normal;
    font-size: 1rem;
    font-family: 'Roboto',sans-serif;
    margin-bottom: 20px;
    space-around: 10px;
}

section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    background-color: #E9F0F0;
} 


.div-principal {
    display: flex;
    border-radius: 12px;
    background-color: #E9F0F0;
    width: 50%;
    padding: 90px;
}

.section-input{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
`