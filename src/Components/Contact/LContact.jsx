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
        p="20px"
      >
        <Text fontSize="40px" fontWeight="bold">
          ImEx Cargo
        </Text>
        <Text fontSize="20px">1R Newbury St, Peabody, MA 01960, USA</Text>

        <Flex>
          <Text fontSize="20px" fontWeight="medium" mr="2">
            Phone
          </Text>
          <Text fontSize="20px" fontWeight="normal">
            617-718-4639
          </Text>
        </Flex>

        <Flex>
          <Text fontSize="20px" fontWeight="medium" mr="2">
            Email
          </Text>
          <Text fontSize="20px" fontWeight="normal">
            group@imexcargo.com
          </Text>
        </Flex>

        <Text fontSize="20px" fontWeight="normal">
          Mon-Fri: 9:00am-5:00pm
        </Text>
        <Flex direction="column" gap="2" mt="2">
          <AiFillFacebook fontSize="40px" />
          <AiFillLinkedin fontSize="40px" />
          <AiFillTwitterSquare fontSize="40px" />
        </Flex>
      </Flex>
    </VStack>
  );
};

export default LContact;
