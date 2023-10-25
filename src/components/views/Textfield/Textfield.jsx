import styled from "styled-components";
import Input from "../Input/Input";

const Textfield = ({
  label,
  name,
  type,
  required,
  placeholder,
  value,
  onChange,
  hasError,
}) => {
  return (
    <StyleTextfield>
      <label htmlFor={name}>{label}</label>
        <Input
          hasError={hasError}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          id={name}
          type={type}
          required={required}
        />
    </StyleTextfield>
  );
};

export default Textfield;

const StyleTextfield = styled.fieldset`
  width: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;

  > label {
    color: #000000;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

