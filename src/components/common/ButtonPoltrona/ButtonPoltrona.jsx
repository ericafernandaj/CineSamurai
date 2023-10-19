import styled from "styled-components"
const ButtonPoltrona = ({numero , onClick, selecionado, id}) => {
  return (

    <StylePoltrona onClick={() => onClick(id)}>
        {numero}
    
    </StylePoltrona>
  )
}

export default ButtonPoltrona

const StylePoltrona = styled.div`
border-radius:50%;
width: 35px;
height: 35px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
color: black;
cursor: pointer;
`