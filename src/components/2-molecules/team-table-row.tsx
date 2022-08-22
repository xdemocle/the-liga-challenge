import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { device } from '../../utilities/device';

const TableRowStyled = styled.div<{ opacity?: number }>`
  margin: 40px 0;

  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
  }
`;

const TableRowWithEffectStyled = styled(TableRowStyled)`
  opacity: ${(props) => props.opacity};
  transition: all 0.35s cubic-bezier(0.95, 0.05, 0.795, 0.035);
`;

export const TableRowWithEffect = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 50);
  }, []);

  return (
    <TableRowWithEffectStyled opacity={mounted ? 1 : 0}>
      {children}
    </TableRowWithEffectStyled>
  );
};

export default TableRowStyled;
