import styled from "styled-components";

export const StyleHeader = styled.header`
background-image: url('../../../../public/header.png');


img{
width: 35%;
height: 34vh;
}
.listaLinks{
display: flex;
justify-content: space-around;
list-style-type: none;
background-color:rgb(2, 41, 99) ;


}
.link{
color: white;
font-family: 'Montserrat', sans-serif;
font-family: 'Open Sans', sans-serif;
font-family: 'Work Sans', sans-serif;
text-decoration: none;
font-size: 20px;

}
nav a{
    text-transform: uppercase;
    color: #000000;
    text-decoration: none;
}

nav a:hover{
    color:#FFA500;
    text-decoration: underline;
}
`