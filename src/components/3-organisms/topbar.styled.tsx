import styled from 'styled-components';
import { device } from '../../utilities/device';

export const Container = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 25px 16px;
  border-bottom: solid 1px #979797;
  background-color: #fff;

  @media ${device.tablet} {
    padding: 37px 114px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1664px;
  margin: 0 auto;

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const ColumnLogo = styled.div`
  width: 100%;

  @media ${device.tablet} {
    width: 30%;
  }
`;

export const Column = styled.div`
  width: 100%;
  margin-top: 22px;

  @media ${device.tablet} {
    width: 50%;
    margin-top: 0;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.93;
  letter-spacing: normal;
  text-align: center;
  color: #3e4b54;
`;
