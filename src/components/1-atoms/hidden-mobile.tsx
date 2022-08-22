import styled from 'styled-components';
import { device } from '../../utilities/device';

const HiddenMobile = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

export default HiddenMobile;
