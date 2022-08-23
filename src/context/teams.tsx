import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState
} from 'react';
import { SPANISH_FIRST_DIVISION_ID } from '../constants';
import useQuery from '../hooks/use-query';
import { Team } from '../types';

export interface TeamContextProps {
  teams: Team[];
  setTeams: Dispatch<SetStateAction<Team[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
}

export const TeamContext = createContext<TeamContextProps>(
  {} as TeamContextProps
);

interface TeamProps {
  children: ReactNode;
}

const TeamProvider = ({ children }: TeamProps) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [teams, setTeams] = useState<Team[]>([]);

  const client = useQuery();

  const getTeams = async () => {
    let response;

    setLoading(true);

    try {
      response = await client.get(
        `competitions/${SPANISH_FIRST_DIVISION_ID}/teams`
      );
    } catch (error) {
      setError('Network error!');
      console.error(error);
    }

    setTeams(response?.data.teams);
    setLoading(false);
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <TeamContext.Provider
      value={{ teams, setTeams, loading, setLoading, error, setError }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export default TeamProvider;
