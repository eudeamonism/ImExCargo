import { Flex, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';

const LContact = () => {
  return (
    <VStack mt="60px">
      <Flex
        maxW="500px"
        bg={useColorModeValue("blue.100", "gray.700")}
        borderRadius="20px"
        direction="column"
        p="25px"
      >
        <Text fontSize="45px" fontWeight="bold">
          ImEx Cargo
        </Text>
        <Text fontSize="25px">1R Newbury St, Peabody, MA 01960, USA</Text>

        <Flex>
          <Text fontSize="25px" fontWeight="medium" mr="2">
            Phone
          </Text>
          <Text fontSize="25px" fontWeight="normal">
            617-718-4639
          </Text>
        </Flex>

        <Flex>
          <Text fontSize="25px" fontWeight="medium" mr="2">
            Email
          </Text>
          <Text fontSize="25px" fontWeight="normal">
            group@imexcargo.com
          </Text>
        </Flex>

        <Text fontSize="25px" fontWeight="normal">
          Mon-Fri: 9:00am-5:00pm
        </Text>
        <Flex direction="column" gap="3" mt="5">
          <AiFillFacebook fontSize="45px" />
          <AiFillLinkedin fontSize="45px" />
          <AiFillTwitterSquare fontSize="45px" />
        </Flex>
      </Flex>
    </VStack>
  );
};

export default LContact;
