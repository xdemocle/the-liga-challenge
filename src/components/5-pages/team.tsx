import find from 'lodash.find';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TeamTemplate from '../4-templates/team';
import useDictionary from '../../hooks/use-dictionary';
import useTeams from '../../hooks/use-team';
import { Team } from '../../types';

const TeamPage = () => {
  const dictionary = useDictionary();
  const { id } = useParams();
  const { teams, loading } = useTeams();
  const [team, setTeam] = useState<Team>();

  const getTeam = (id: string) => {
    return find(teams, { id: Number(id) });
  };

  useEffect(() => {
    id && setTeam(getTeam(id));
  }, [id, teams]);

  return (
    <TeamTemplate
      dictionary={dictionary}
      id={id}
      team={team}
      loading={loading}
    />
  );
};

export default TeamPage;
