import styled from "styled-components";

export const StyleHeader = styled.header`
background-image: url('../../../../public/header.png');


img{
width: 20%;
}

.listaLinks{
display: flex;
justify-content: space-around;
text-decoration: none;
list-style-type: none;
background-color:rgba(135,206,250,0.10) ;
height: 3rem;
align-items: center;
color: rgba(247,247,247,247);
}

.link{
color: white;
font-family: 'Roboto', sans-serif;
font-weight: 500;
/* font-family: 'Open Sans', sans-serif; */
/* font-family: 'Work Sans', sans-serif; */
text-decoration: none;
font-size: 1.7rem;

}
nav a{    
    color: #000000;
    text-decoration: none;
}

nav a:hover{
    color:#FFA500;
    transition:.3s;
}
`