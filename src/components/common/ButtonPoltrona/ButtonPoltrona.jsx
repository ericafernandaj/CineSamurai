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

display: flex;
justify-content:center;
align-items: center;
background-color: #4fc0a2;
font-weight: 700;
height: 35px;
width: 35px;
margin: 10px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
cursor: pointer;

`