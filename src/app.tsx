import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutTemplate from './components/4-templates/layout';
import NoMatch from './components/4-templates/no-match';
import HomePage from './components/5-pages/home';
import TeamPage from './components/5-pages/team';
import { SPANISH_FIRST_DIVISION_ID } from './constants';
import useQuery from './hooks/use-query';
import useTeams from './hooks/use-team';

function App() {
  const { setTeams, setLoading, setError } = useTeams();
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
    <Routes>
      <Route path="/" element={<LayoutTemplate />}>
        <Route index element={<HomePage />} />
        <Route path="team/:id" element={<TeamPage />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
