import styled from "styled-components";

export const StyleFooter = styled.footer `
background-color: black;
height: 20vh;
color: white;
display: flex;

.rodape{
display:flex;
flex-direction: row;
align-items:center;
justify-content: space-around;
width: 100%;
}
.localização-icone{
display: flex;
align-items: center;

}
.nome-rua-rodape{
font-family: 'Montserrat', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Work Sans', sans-serif;
}
.map{
margin-right: 4px;
}
.contato{
display: flex;
flex-direction: column;
gap: 0; 
}
.contato h3, .contato p {
margin: auto;
font-size: 16px; 
font-family: 'Montserrat', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Work Sans', sans-serif;

}


`