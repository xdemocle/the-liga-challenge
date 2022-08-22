import Loader from '../2-molecules/loader';
import { Team } from '../../types';
import {
  HeaderStyled,
  ImgStyled,
  MainStyled,
  RootStyled,
  TeamBoxStyled,
  TitleStyled
} from './landing.styled';

interface LandingTemplateProps {
  dictionary: Record<string, string>;
  loading: boolean;
  teams: Team[];
}

const LandingTemplate = ({
  dictionary,
  loading,
  teams
}: LandingTemplateProps) => {
  return (
    <RootStyled>
      <HeaderStyled>
        <TitleStyled>{dictionary.mainTitle}</TitleStyled>
      </HeaderStyled>
      {loading ? (
        <Loader />
      ) : (
        <MainStyled>
          {teams.map((team, ix) => {
            return (
              <TeamBoxStyled key={`${ix}-${team.id}`} to={`team/${team.id}`}>
                <ImgStyled
                  src={team.crest}
                  alt={team.crest}
                  title={team.name}
                  height="100"
                  width="auto"
                />
                <br />
                {team.name}
              </TeamBoxStyled>
            );
          })}
        </MainStyled>
      )}
    </RootStyled>
  );
};

export default LandingTemplate;
