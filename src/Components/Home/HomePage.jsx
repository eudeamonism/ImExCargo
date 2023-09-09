import { useMediaQuery } from '@chakra-ui/react';
import LHome from './LHome';
import MHome from './MHome';

const HomePage = () => {
  const [isLargerThan700] = useMediaQuery('(width > 700px)');
  return <>{isLargerThan700 ? <LHome /> : <MHome />}</>;
};

export default HomePage;
