import styled from 'styled-components';
import AskSymbol from '../../assets/icons/ASC-symbol.webp';
import DeskSymbol from '../../assets/icons/DESC-symbol.webp';
import { device } from '../../utilities/device';

export const TableColStyled = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: #46555e;

  label {
    margin-right: 4px;
  }

  @media ${device.tablet} {
    width: 25%;
    text-align: left;

    label {
      display: none;
    }
  }
`;

export const TableHeaderColStyled = styled(TableColStyled)`
  font-weight: 100;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #bec2c5;
`;

export const TableHeaderClickableStyled = styled(TableHeaderColStyled)`
  cursor: pointer;
  user-select: none;
`;

export const SortIconStyled = styled.div<{ sort: string }>`
  display: inline-block;
  width: 7px;
  height: 8px;
  background: url(${(props) =>
      props.sort !== 'DESC' ? DeskSymbol : AskSymbol})
    top left no-repeat;
  background-size: cover;
`;
