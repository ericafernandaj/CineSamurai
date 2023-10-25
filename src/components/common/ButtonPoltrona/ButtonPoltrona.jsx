import { useState } from "react"
import styled from "styled-components"
const ButtonPoltrona = ({ numero, onClick, id, poltronasSelecionadas, setPoltronasSelecionadas }) => {
  const [selecionado, setSelecionado] = useState(false)
  return (


    <StylePoltrona selecionado={selecionado} onClick={() => {
      if(selecionado){
        const retiradaSelecao = poltronasSelecionadas.filter(poltrona => poltrona!=id )
        setPoltronasSelecionadas(retiradaSelecao)
        
      }else{
        onClick(id)
      }
      setSelecionado(!selecionado)

    }}>
      {numero}

    </StylePoltrona>
  )
}

export default ButtonPoltrona

const StylePoltrona = styled.div`

display: flex;
justify-content:center;
align-items: center;

background-color: ${({selecionado}) => selecionado ? '#f54c5a' : '#4fc0a2'};
font-weight: 700;
height: 35px;
width: 35px;
margin: 10px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
cursor: pointer;

`