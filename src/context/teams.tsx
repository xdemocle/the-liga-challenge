import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from 'react';
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

  return (
    <TeamContext.Provider
      value={{ teams, setTeams, loading, setLoading, error, setError }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export default TeamProvider;
