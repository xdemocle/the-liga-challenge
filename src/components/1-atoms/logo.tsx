import styled from 'styled-components';
import LogoPng from '../../assets/xceed-logo-black.png';
import LogoPng2x from '../../assets/xceed-logo-black@2x.png';
import LogoPng3x from '../../assets/xceed-logo-black@3x.png';
import { device } from '../../utilities/device';

const LogoContainer = styled.div`
  width: 174px;
  height: 44px;
  margin: 0 auto;

  @media ${device.tablet} {
    margin: 0;
  }
`;

const ImgLogo = styled.img`
  display: block;
  width: 174px;
  height: 44px;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <ImgLogo src={LogoPng} srcSet={`${LogoPng2x} 2x, ${LogoPng3x} 3x`} />
    </LogoContainer>
  );
};

export default Logo;
