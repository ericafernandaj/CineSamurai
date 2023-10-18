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
    width: 30%;
    img{
        width: 100%;
        border-radius: 10px;
    }
}
div{
    width: 60%;
}
`