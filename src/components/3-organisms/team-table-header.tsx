import HiddenMobile from '../1-atoms/hidden-mobile';
import TableRowStyled from '../2-molecules/team-table-row';
import {
  SortIconStyled,
  TableHeaderClickableStyled,
  TableHeaderColStyled
} from './team-table-header.styled';

interface TeamTableHeaderProps {
  dictionary: Record<string, string>;
  onClickCallback: () => void;
  sort: string;
}

const TeamTableHeader = ({
  dictionary,
  onClickCallback,
  sort
}: TeamTableHeaderProps) => {
  return (
    <TableRowStyled>
      <TableHeaderClickableStyled onClick={onClickCallback}>
        {dictionary.teamTableHeaderName} <SortIconStyled sort={sort} />
      </TableHeaderClickableStyled>
      <TableHeaderColStyled>
        <HiddenMobile>{dictionary.teamTableHeaderNationality}</HiddenMobile>
      </TableHeaderColStyled>
      <TableHeaderColStyled>
        <HiddenMobile>{dictionary.teamTableHeaderPosition}</HiddenMobile>
      </TableHeaderColStyled>
      <TableHeaderColStyled>
        <HiddenMobile>{dictionary.teamTableHeaderAge}</HiddenMobile>
      </TableHeaderColStyled>
    </TableRowStyled>
  );
};

export default TeamTableHeader;
