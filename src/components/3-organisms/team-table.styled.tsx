import styled from 'styled-components';
import { device } from '../../utilities/device';
import { TableColStyled } from './team-table-header.styled';

export const RootStyled = styled.div`
  display: block;
  margin-top: 60px;
`;

export const TableColNameStyled = styled(TableColStyled)`
  font-size: 20px;
  font-weight: 900;
  font-stretch: normal;
  font-style: oblique;
  line-height: 1.3;
  letter-spacing: normal;
  color: #46555e;
  text-align: center;

  @media ${device.tablet} {
    text-align: left;
  }
`;

export const ButtonTextWrapper = styled.div`
  text-align: center;
`;
