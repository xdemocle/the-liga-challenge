import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../assets/logo.svg';

const LogoContainer = styled.div`
  width: 40px;
  height: 40px;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoIcon />
    </LogoContainer>
  );
};

export default Logo;
