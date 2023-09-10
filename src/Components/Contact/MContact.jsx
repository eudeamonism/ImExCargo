import { Flex, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';

const MContact = () => {
  return (
    <VStack mt="40px">
      <Flex
        maxW="350px"
        bg={useColorModeValue("blue.100", "gray.700")}
        borderRadius="20px"
        direction="column"
        p="25px"
      >
        <Text fontSize="25px" fontWeight="bold">
          ImEx Cargo
        </Text>
        <Text fontSize="16px">1R Newbury St, Peabody, MA 01960, USA</Text>

        <Flex>
          <Text fontSize="16px" fontWeight="medium" mr="2">
            Phone
          </Text>
          <Text fontSize="16px" fontWeight="normal">
            617-718-4639
          </Text>
        </Flex>

        <Flex>
          <Text fontSize="16px" fontWeight="medium" mr="2">
            Email
          </Text>
          <Text fontSize="16px" fontWeight="normal">
            group@imexcargo.com
          </Text>
        </Flex>

        <Text fontSize="16px" fontWeight="normal">
          Mon-Fri: 9:00am-5:00pm
        </Text>
        <Flex direction="column" gap="1" mt="2">
          <AiFillFacebook fontSize="25px" />
          <AiFillLinkedin fontSize="25px" />
          <AiFillTwitterSquare fontSize="25px" />
        </Flex>
      </Flex>
    </VStack>
  );
};

export default MContact;
