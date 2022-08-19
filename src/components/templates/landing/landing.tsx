import { useEffect, useState } from 'react';
import Button from '../../atoms/button';
import ButtonWrapper from '../../atoms/button-wrapper';
import Jumbotron from '../../molecules/jumbotron';
import Main from '../../molecules/main';
import StaticStar from '../../molecules/static-star';
import Title from '../../molecules/title';
import LandingBottom from '../../organisms/landing-bottom';
import LandingCard from '../../organisms/landing-card';
import Topbar from '../../organisms/topbar';

interface LandingTemplateProps {
  dictionary: Record<string, string>;
}

const LandingTemplate = ({ dictionary }: LandingTemplateProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Topbar />
      <Main>
        <Jumbotron
          firstLine={dictionary.mainJumbotronFirstLine}
          lastLine={dictionary.mainJumbotronLastLine}
        />

        <Title
          firstLine={dictionary.mainTitleFirstLine}
          lastLine={
            <>
              <strong>{dictionary.mainTitleLastLineStrong}</strong>{' '}
              {dictionary.mainTitleLastLineText}
            </>
          }
        />

        <LandingCard />

        <ButtonWrapper transform={mounted ? 'none' : 'translate3d(0, 70%, 0)'}>
          <Button>{dictionary.mainButtonText}</Button>
        </ButtonWrapper>

        <StaticStar symbol="1" />
        <StaticStar symbol="2" />
        <StaticStar symbol="3" />
        <StaticStar symbol="4" />
        <StaticStar symbol="5" />
        <StaticStar symbol="6" />
      </Main>
      <LandingBottom />
    </>
  );
};

export default LandingTemplate;
