import { ReactNode, SyntheticEvent } from 'react';
import styled from 'styled-components';

interface TextFieldProps {
  id?: string;
  placeholder: string;
  onChange?: (e: SyntheticEvent) => void;
  prepend?: ReactNode;
  type?: string;
}

const FieldStyled = styled.div`
  position: relative;
  display: block;
`;

const InputStyled = styled.input`
  display: block;
  padding: 16px 16px 16px 52px;
  border-radius: 30px;
  background-color: #f7f7f7;
  border: none;
  font-size: 14px;
  color: #6e7a83;
  width: 100%;
`;

const PrependStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  display: block;
  line-height: 16px;
`;

const TextField = ({
  id,
  placeholder,
  onChange,
  prepend,
  type = 'text'
}: TextFieldProps) => {
  return (
    <FieldStyled>
      <InputStyled
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      />
      <PrependStyled>{prepend}</PrependStyled>
    </FieldStyled>
  );
};

export default TextField;
