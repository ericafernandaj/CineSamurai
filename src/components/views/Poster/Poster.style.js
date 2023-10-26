import styled from "styled-components";

export const StylePoster = styled.div`
background-color: transparent;
display: flex;
justify-content: space-around;
align-items: center;
width: 90%;
color: rgb(247,247,247);
margin: 20px 0;
picture{
    display: flex;
    justify-content: center;
    width: 30%;
    margin-bottom: 2%;
    .imagem{
        width: 70%;
        border-radius: 10px;

    }
}
div{
    width: 60%;
    display: flex;
    flex-direction:column;
    gap: 1rem;
    margin-bottom: 1rem;
}
.filmeInfo{
    display: flex;
    flex-direction:row;
    align-items: center;
}
.faixaEtaria{
    width: 20%;
}
.sinopse{
    font-size: 1.5rem;
}
strong{
    color: #d266ff;

}

.tituloFilme{
    font-size:2rem;
    color: #d266ff;
    
}
`