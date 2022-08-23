import { Link } from 'react-router-dom';
import Logo from '../1-atoms/logo';
import useDictionary from '../../hooks/use-dictionary';
import { Column, ColumnLogo, Container, Title, Wrapper } from './topbar.styled';

const Topbar = () => {
  const dictionary = useDictionary();

  return (
    <Container>
      <Wrapper>
        <ColumnLogo>
          <Link to="/">
            <Logo />
          </Link>
        </ColumnLogo>
        <Column>
          <Title>{dictionary.topbarTitle}</Title>
        </Column>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
