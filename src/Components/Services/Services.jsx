import { useMediaQuery } from '@chakra-ui/react';
import LServices from './LServices';
import MServices from './MServices';

const Services = () => {
  const [isLargerThan700] = useMediaQuery('(width > 700px)');
  return <>{isLargerThan700 ? <LServices /> : <MServices />}</>;
};

export default Services;
