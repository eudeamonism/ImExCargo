import {
  Flex,
  Text,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Image,
  useColorModeValue,
  Button,
  Link,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const LNav = () => {
  return (
    <Flex
      bgGradient={useColorModeValue(
        'linear(to-tl, gray.100, blue.100)',
        'linear(to-tl, gray.400, blue.900)'
      )}
      alignItems="center"
      justifyContent="space-between"
      pr="3"
      pl="3"
    >
      <Image
        boxSize="80px"
        src="/assets/logou.png"
        alt="ImEx Cargo Logo"
        fit="scale-down"
      />
      <Text
        fontSize="l"
        fontWeight="medium"
        color={useColorModeValue('#09406D', 'white')}
      >
        <Link href="/home">Home</Link>
      </Text>
      <Text
        fontSize="l"
        fontWeight="medium"
        color={useColorModeValue('#09406D', 'white')}
      >
        <Link href="/services">Services</Link>
      </Text>
      <Text
        fontSize="l"
        fontWeight="medium"
        color={useColorModeValue('#09406D', 'white')}
      >
        <Link href="/track">Tracking</Link>
      </Text>
      <Text
        fontSize="l"
        fontWeight="medium"
        color={useColorModeValue('#09406D', 'white')}
      >
        <Link href="/contact">Contact Us</Link>
      </Text>
      <Button
        variant="outline"
        size="sm"
        borderColor={useColorModeValue('#09406D', 'white')}
        color={useColorModeValue('#09406D', 'white')}
      >
        Request A Quote
      </Button>
      <ColorModeSwitcher fontSize="2xl" />
    </Flex>
  );
};

export default LNav;
