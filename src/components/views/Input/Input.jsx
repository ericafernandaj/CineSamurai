import styled from "styled-components"

const Input = ({text,placeholder})=> {
  return (
    <input
    type="text"
    placeholder={placeholder}
    />
)}

export default Input

const StyleInput = styled.input `
border-radius: 8px;
background-color: red;

`