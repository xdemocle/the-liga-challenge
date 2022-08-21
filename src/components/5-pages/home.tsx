import styled from 'styled-components';
import LandingTemplate from '../4-templates/landing';
import useDictionary from '../../hooks/use-dictionary';
import useTeams from '../../hooks/use-team';

const ErrorStyled = styled.p`
  margin: 16px 12px;
  padding: 16px 0;
`;

const HomePage = () => {
  const dictionary = useDictionary();
  const { teams, loading, error } = useTeams();

  if (error) {
    return <ErrorStyled>Error: {error}</ErrorStyled>;
  }

  return (
    <LandingTemplate dictionary={dictionary} teams={teams} loading={loading} />
  );
};

export default HomePage;
