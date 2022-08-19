import useDictionary from '../../../hooks/use-dictionary';
import LandingTemplate from '../../templates/landing';

const LandingPage = () => {
  const dictionary = useDictionary();

  return <LandingTemplate dictionary={dictionary} />;
};

export default LandingPage;
