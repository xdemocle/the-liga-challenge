import debounce from 'lodash.debounce';
import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '../2-molecules/text-field';
import { ReactComponent as LensIconSvg } from '../../assets/icons/lens.svg';
import { Team } from '../../types';
import {
  ButtonBackStyled,
  HeaderColumnStyled,
  HeaderStyled,
  LensIconSvgStyled,
  TitleStyled
} from './team-header.styled';

interface TeamHeaderProps {
  dictionary: Record<string, string>;
  onSearchChange: (e: SyntheticEvent) => void;
  team?: Team;
}

const TeamHeader = ({ dictionary, onSearchChange, team }: TeamHeaderProps) => {
  const navigate = useNavigate();

  const onClickBackHandler = () => {
    navigate('/');
  };

  return (
    <HeaderStyled>
      <HeaderColumnStyled>
        <ButtonBackStyled onClick={onClickBackHandler} />
      </HeaderColumnStyled>
      <HeaderColumnStyled>
        <TitleStyled>{team?.name || dictionary.teamNoTeamName}</TitleStyled>
      </HeaderColumnStyled>
      <HeaderColumnStyled>
        <TextField
          id="search"
          type="search"
          placeholder="Search"
          prepend={
            <LensIconSvgStyled htmlFor="search">
              <LensIconSvg />
            </LensIconSvgStyled>
          }
          onChange={debounce(onSearchChange, 500)}
        />
      </HeaderColumnStyled>
    </HeaderStyled>
  );
};

export default TeamHeader;
