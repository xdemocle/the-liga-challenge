import { useEffect, useState } from 'react';
import ButtonText from '../2-molecules/button-text';
import { TableRowWithEffect } from '../2-molecules/team-table-row';
import { Player } from '../../types';
import TeamTableHeader from './team-table-header';
import { TableColStyled } from './team-table-header.styled';
import {
  ButtonTextWrapper,
  RootStyled,
  TableColNameStyled
} from './team-table.styled';

interface TeamTableProps {
  dictionary: Record<string, string>;
  squad: Player[];
}

const TeamTable = ({ dictionary, squad }: TeamTableProps) => {
  const limit = 3;
  const [sort, setSort] = useState('');
  const [index, setIndex] = useState(0);
  const [players, setPlayers] = useState<Player[]>([]);

  const getProgressiveList = (players: Player[], ix: number): Player[] => {
    return players.slice(0, ix + limit);
  };

  const getAge = (dateOfBirth: string) => {
    const yearBirth = Number(dateOfBirth.split('-')[0]);

    return new Date().getFullYear() - yearBirth;
  };

  const onClickSortHandler = () => {
    const newSort = sort === 'DESC' ? 'ASC' : 'DESC';

    setSort(newSort);

    squad.sort((a, b) => {
      // Naturalize non utf-8 characters with accent
      const aName = a.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const bName = b.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

      if (aName < bName) return newSort === 'ASC' ? -1 : 1;
      if (aName > bName) return newSort === 'ASC' ? 1 : -1;

      return 0;
    });
  };

  useEffect(() => {
    setPlayers(getProgressiveList(squad, index));
  }, [squad, index, sort]);

  useEffect(() => {
    setIndex(0);
  }, [squad]);

  return (
    <RootStyled>
      <TeamTableHeader
        onClickCallback={onClickSortHandler}
        sort={sort}
        dictionary={dictionary}
      />

      {players.map((player, ix) => {
        return (
          <TableRowWithEffect key={`${ix}-${player.name}`}>
            <TableColNameStyled>{player.name}</TableColNameStyled>
            <TableColStyled>
              <label>Nationality:</label>
              {player.nationality}
            </TableColStyled>
            <TableColStyled>
              <label>Position:</label>
              {player.position}
            </TableColStyled>
            <TableColStyled>
              <label>Age:</label>
              {getAge(player.dateOfBirth)}
            </TableColStyled>
          </TableRowWithEffect>
        );
      })}

      <ButtonTextWrapper>
        {index + 1 < players.length && (
          <ButtonText onClick={() => setIndex(index + limit)}>
            {dictionary.listColumnSeeMore}
          </ButtonText>
        )}
      </ButtonTextWrapper>
    </RootStyled>
  );
};

export default TeamTable;
