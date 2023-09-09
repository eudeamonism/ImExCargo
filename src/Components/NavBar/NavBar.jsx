import { useMediaQuery } from '@chakra-ui/react';
import MNav from './MNav';
import LNav from './LNav';

const NavBar = () => {
  const [isLargerThan700] = useMediaQuery('(width > 700px)');
  return <>{isLargerThan700 ? <LNav /> : <MNav />}</>;
};

export default NavBar;
