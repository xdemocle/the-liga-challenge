import { ReactNode } from 'react';
import styled from 'styled-components';

interface TextFieldProps {
  placeholder: string;
  prepend?: ReactNode;
}

const FieldStyled = styled.div`
  display: block;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  padding: 80px 0 40px 0;
`;

const InputStyled = styled.input`
  display: block;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  padding: 80px 0 40px 0;
`;

const PrependStyled = styled.div`
  display: block;
`;

const TextField = ({ placeholder, prepend }: TextFieldProps) => {
  return (
    <FieldStyled>
      <InputStyled placeholder={placeholder} />
      <PrependStyled>{prepend}</PrependStyled>
    </FieldStyled>
  );
};

export default TextField;
