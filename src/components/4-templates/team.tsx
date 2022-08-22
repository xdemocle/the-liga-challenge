import { SyntheticEvent, useEffect, useState } from 'react';
import Loader from '../2-molecules/loader';
import TeamHeader from '../3-organisms/team-header';
import TeamTable from '../3-organisms/team-table';
import { Player, Team } from '../../types';

interface TeamTemplateProps {
  dictionary: Record<string, string>;
  team?: Team;
  loading: boolean;
}

const TeamTemplate = ({ dictionary, loading, team }: TeamTemplateProps) => {
  const [searchNeedle, setSearchNeedle] = useState('');
  const [playersList, setPlayersList] = useState(team?.squad || []);

  const getFilteredSquad = (players: Player[]): Player[] => {
    const searchNeedleUppercase = searchNeedle.toUpperCase();

    return players.filter((player: Player) => {
      return player.name.toUpperCase().search(searchNeedleUppercase) !== -1;
    });
  };

  const onChangeTextFieldHandler = (e: SyntheticEvent) =>
    setSearchNeedle((e.target as HTMLInputElement).value);

  useEffect(() => {
    team?.squad && setPlayersList(team.squad);
  }, [team]);

  useEffect(() => {
    if (team?.squad) {
      setPlayersList(getFilteredSquad(team.squad));
    }
  }, [searchNeedle]);

  return (
    <>
      {!loading && (
        <TeamHeader
          team={team}
          dictionary={dictionary}
          onSearchChange={onChangeTextFieldHandler}
        />
      )}

      <div>
        {loading ? (
          <Loader />
        ) : (
          <TeamTable dictionary={dictionary} squad={playersList} />
        )}
      </div>
    </>
  );
};

export default TeamTemplate;
