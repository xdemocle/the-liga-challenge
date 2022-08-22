import styled from 'styled-components';
import { device } from '../../utilities/device';

export const HeaderStyled = styled.div`
  overflow: hidden;
  text-align: left;

  @media ${device.tablet} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const HeaderColumnStyled = styled.div`
  float: left;
  line-height: 55px;

  &:nth-child(2) {
    flex-grow: 1;
  }

  &:nth-child(3) {
    width: 100%;

    @media ${device.tablet} {
      width: auto;
    }
  }
`;

export const TitleStyled = styled.span`
  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: oblique;
  line-height: 1.3;
  letter-spacing: normal;
  color: #3e4b54;
  text-align: center;
`;

export const ButtonBackStyled = styled.button`
  display: block;
  padding: 15px 14px 17px 14px;
  margin-right: 16px;
  border-radius: 30px;
  border: none;
  font-size: 32px;
  line-height: 16px;
  cursor: pointer;
  background-color: #f7f7f7;
  color: #6e7a83;
  transition: all 0.15s linear;

  &:after {
    font-weight: 900;
    content: '<';
  }

  &:hover {
    background-color: #6e7a83;
    color: #f7f7f7;
  }
`;

export const LensIconSvgStyled = styled.label`
  cursor: text;
`;
