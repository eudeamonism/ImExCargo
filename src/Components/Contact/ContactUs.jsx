import { useMediaQuery } from '@chakra-ui/react';
import LContact from './LContact';
import MContact from './MContact';
import MForm from './MForm';

const ContactUs = () => {
  const [isLargerThan700] = useMediaQuery('(width > 700px)');
  return (
    <>
      {isLargerThan700 ? (
        <LContact />
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
