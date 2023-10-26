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
color:#e9daf0;
font-family: 'Roboto', sans-serif;
font-weight: 500;
/* font-family: 'Open Sans', sans-serif; */
/* font-family: 'Work Sans', sans-serif; */
text-decoration: none;
font-size: 2rem;

}
nav a{    
    text-decoration: none;
}

.link:hover{
    color:#d266ff;
    transition:.3s;

}
`