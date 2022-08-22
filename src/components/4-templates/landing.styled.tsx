import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../utilities/device';

export const RootStyled = styled.div`
  display: block;
`;

export const HeaderStyled = styled.div`
  display: block;
  text-align: center;
  padding: 43px 29px;
`;

export const TitleStyled = styled.span`
  font-size: 28px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.93;
  letter-spacing: normal;
  color: #3e4b54;
`;

export const MainStyled = styled.div`
  display: grid;
  font-size: 0;
  grid-template-columns: 100%;

  @media ${device.mobileL} {
    grid-template-columns: 50% 50%;
  }

  @media ${device.tablet} {
    grid-template-columns: 33.3% 33.3% 33.3%;
  }

  @media ${device.laptop} {
    grid-template-columns: 25% 25% 25% 25%;
  }

  @media ${device.laptopL} {
    grid-template-columns: 20% 20% 20% 20% 20%;
  }
`;

export const TeamBoxStyled = styled(Link)`
  text-align: center;
  font-size: 20px;
  line-height: 26px;
  font-weight: 900;
  font-style: oblique;
  text-decoration: none;
  color: #46555e;
  margin: 22px auto;

  &:hover {
    text-decoration: underline;
  }
`;

export const ImgStyled = styled.img`
  &:hover {
    animation: mini-float 1.5s linear infinite;
  }
`;
