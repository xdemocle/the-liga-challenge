import { useContext } from 'react';
import { TeamContext, TeamContextProps } from '../context/teams';

const useTeams = (): TeamContextProps => {
  return useContext(TeamContext);
};

export default useTeams;
