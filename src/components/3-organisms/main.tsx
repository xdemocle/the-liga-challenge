import { ReactNode } from 'react';
import BackgroundLiga from '../../assets/background/liga-background.webp';
import BackgroundLiga2x from '../../assets/background/liga-background@2x.webp';
import BackgroundLiga3x from '../../assets/background/liga-background@3x.webp';
import {
  ContentStyled,
  ImgStyled,
  MainStyled,
  PictureStyled
} from './main.styled';

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
