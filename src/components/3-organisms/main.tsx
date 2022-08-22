import { ReactNode } from 'react';
import styled from 'styled-components';
import BackgroundLiga from '../../assets/background/liga-background.webp';
import BackgroundLiga2x from '../../assets/background/liga-background@2x.webp';
import BackgroundLiga3x from '../../assets/background/liga-background@3x.webp';
import { device } from '../../utilities/device';

const MainStyled = styled.div`
  position: relative;
  padding-top: 120px;
  max-width: 1664px;
  margin: 0 auto;
  z-index: 0;
  background-color: #f4f4f4;
  overflow: hidden;
`;

const PictureStyled = styled.picture`
  position: absolute;
  top: 118px;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

const ImgStyled = styled.img`
  position: absolute;
  width: 100%;
`;

const ContentStyled = styled.div`
  padding: 10px 10px 44px 10px;
  margin: 23% 16px 200px 16px;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 #e2e4e5;
  background: #fff;

  @media ${device.laptop} {
    padding: 36px 41px;
    margin: 23% 127px 200px 127px;
  }
`;

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <MainStyled>
      <PictureStyled>
        <source
          srcSet={`${BackgroundLiga2x} 2x, ${BackgroundLiga3x} 3x`}
          type="image/webp"
        />
        <ImgStyled src={BackgroundLiga} alt="background webp" />
      </PictureStyled>
      <ContentStyled>{children}</ContentStyled>
    </MainStyled>
  );
};

export default Main;
