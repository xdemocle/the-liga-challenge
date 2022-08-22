import { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonTextProps {
  children: ReactNode;
  onClick: () => void;
}

const ButtonTextStyled = styled.button`
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  appearance: none;
  border: none;
  background-color: transparent;
  color: #b6babd;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.4px;
  cursor: pointer;
  padding: 6px 16px;

  &:hover {
    box-shadow: 0 1px 0 0 #b6babd;
  }
`;

const ButtonText = ({ children, onClick }: ButtonTextProps) => {
  return <ButtonTextStyled onClick={onClick}>{children}</ButtonTextStyled>;
};

export default ButtonText;
