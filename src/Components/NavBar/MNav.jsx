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
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

const MNav = () => {
  return (
    <Flex
      bgGradient={useColorModeValue(
        'linear(to-tl, gray.100, blue.100)',
        'linear(to-tl, gray.400, blue.900)'
      )}
      alignItems="center"
      justifyContent="space-between"
      pr="2"
      pl="2"
      minWidth="350px"
    >
      <Image
        boxSize="80px"
        src="/assets/logou.png"
        alt="ImEx Cargo Logo"
        fit="scale-down"
      />
      <Button
        variant="outline"
        size="sm"
        borderColor={useColorModeValue('#09406D', 'white')}
        color={useColorModeValue('#09406D', 'white')}
      >
        Request A Quote
      </Button>
      <Flex>
        <ColorModeSwitcher fontSize="xl" />
        <Menu>
          <MenuButton
            as={IconButton}
            icon={
              <HamburgerIcon
                fontSize="2xl"
                color={useColorModeValue('#09406D', 'white')}
              />
            }
            variant="unstyled"
          />
          <MenuList color={useColorModeValue('#09406D', 'white')}>
            <MenuItem>Services</MenuItem>
            <MenuItem>Security</MenuItem>
            <MenuItem>About Us</MenuItem>
            <MenuItem>News</MenuItem>
            <MenuItem>Contact Us</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default MNav;
