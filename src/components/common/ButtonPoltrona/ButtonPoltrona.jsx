import styled from "styled-components"
const ButtonPoltrona = ({ numero, onClick, selecionado, id }) => {
  return (

    <StylePoltrona onClick={() => onClick(id)}>
      {numero}

    </StylePoltrona>
  )
}

export default ButtonPoltrona

const StylePoltrona = styled.div`
/* border-radius:50%;
width: 35px;
height: 35px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
color: black; */
display: flex;
justify-content:center;
align-items: center;
background-color: #444451;
height: 35px;
width: 35px;
margin: 10px;
border-top-left-radius: 29px;
border-top-right-radius: 29px;
cursor: pointer;

`