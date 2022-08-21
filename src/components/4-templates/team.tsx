import styled from 'styled-components';
import Loader from '../2-molecules/loader';
import TextField from '../2-molecules/text-field';
import { ReactComponent as LensIconSvg } from '../../assets/icons/lens.svg';
import { Team } from '../../types';

interface TeamTemplateProps {
  id?: string;
  dictionary: Record<string, string>;
  team?: Team;
  loading: boolean;
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
  display: block;
`;

const TeamTemplate = ({ dictionary, id, loading, team }: TeamTemplateProps) => {
  return (
    <RootStyled>
      {!loading && (
        <HeaderStyled>
          <TextField placeholder="Search" prepend={<LensIconSvg />} />
          <TitleStyled>{team?.name || dictionary.teamNoTeamName}</TitleStyled>
        </HeaderStyled>
      )}

      <MainStyled>
        {loading ? (
          <Loader />
        ) : (
          <>
            TeamTemplate: {id} {JSON.stringify(team)}
          </>
        )}
      </MainStyled>
    </RootStyled>
  );
};

export default TeamTemplate;
