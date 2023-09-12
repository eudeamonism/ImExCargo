import { useMediaQuery } from '@chakra-ui/react';
import LDetail from './LDetail';
import MDetail from './MDetail';

const DetailPage = () => {
  const [isLargerThan700] = useMediaQuery('(width > 700px)');
  return <>{isLargerThan700 ? <LDetail /> : <MDetail />}</>;
};

export default DetailPage;
