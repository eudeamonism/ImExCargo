import { useMediaQuery } from '@chakra-ui/react';
import LContact from './LContact';
import MContact from './MContact';

const ContactUs = () => {
    const [isLargerThan700] = useMediaQuery('(width > 700px)');
  return (
    <>{isLargerThan700 ? <LContact /> : <MContact />}</>
  )
}

export default ContactUs