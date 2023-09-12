import { useMediaQuery } from '@chakra-ui/react';
import LContact from './LContact';
import MContact from './MContact';
import MForm from './MForm';
import LForm from './LForm';

const ContactUs = () => {
  const [isLargerThan700] = useMediaQuery('(width > 700px)');
  return (
    <>
      {isLargerThan700 ? (
        <>
          <LContact />
          <LForm />
        </>
      ) : (
        <>
          <MContact />
          <MForm />
        </>
      )}
    </>
  );
};

export default ContactUs;
