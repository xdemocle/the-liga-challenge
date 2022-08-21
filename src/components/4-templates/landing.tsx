import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Loader from '../2-molecules/loader';
import { Team } from '../../types';
import { device } from '../../utilities/device';

interface LandingTemplateProps {
  dictionary: Record<string, string>;
  loading: boolean;
  teams: Team[];
}

const RootStyled = styled.div`
  display: block;
`;

const HeaderStyled = styled.div`
  display: block;
  text-align: center;
  padding: 43px 29px;
`;

const TitleStyled = styled.span`
  font-size: 28px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.93;
  letter-spacing: normal;
  color: #3e4b54;
`;

const MainStyled = styled.div`
  display: grid;
  font-size: 0;
  grid-template-columns: 100%;

  @media ${device.mobileL} {
    grid-template-columns: 50% 50%;
  }

  @media ${device.tablet} {
    grid-template-columns: 33.3% 33.3% 33.3%;
  }

  @media ${device.laptop} {
    grid-template-columns: 25% 25% 25% 25%;
  }

  @media ${device.laptopL} {
    grid-template-columns: 20% 20% 20% 20% 20%;
  }
`;

const TeamBoxStyled = styled(Link)`
  text-align: center;
  font-size: 20px;
  line-height: 26px;
  font-weight: 900;
  font-style: oblique;
  text-decoration: none;
  color: #46555e;
  margin: 22px auto;

  &:hover {
    text-decoration: underline;
  }
`;

const ImgStyled = styled.img`
  &:hover {
    animation: mini-float 1.5s linear infinite;
  }
`;

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
