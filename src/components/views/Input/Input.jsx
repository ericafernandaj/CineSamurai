import React from "react"
import { StyleInput } from "./input.styles"
import { tema } from "../../../style/theme";

const Input = ({ placeholder, hasError, isValid, required, name, type, value, onChange, id }) => {
  const variantes = {
    error: `2px solid ${tema.crimson700}`,
    valid: `2px solid ${tema.green500}`,
  };

  return (
    <StyleInput
      name={name}
      type={type}
      value={value}
      id={id}
      onChange={(e) => onChange(e.target.value)}
      style={{
        border: isValid ? variantes.valid : hasError ? variantes.error : "",
      }}
      required={required}
      placeholder={placeholder}
      
    />
  );
};

export default Input;
