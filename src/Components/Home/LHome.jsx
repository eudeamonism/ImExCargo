import { Flex, Text, Image } from '@chakra-ui/react';

const LHome = () => {
  return (
    <Flex justify="center" direction="column" minWidth="350px">
      <Flex
        direction="column"
        width="100%"
        height="100%"
        justify="center"
        alignItems="center"
        p="5"
      >
        <Text fontWeight="bold" fontSize="4xl">
          Welcome to ImEx Cargo
        </Text>
        <Text fontSize="xl">GSA/GSSA, Government Contractor, 3PL/4PL</Text>
        <Text fontSize="m" fontStyle="italic">
          logitstics for Businesses, Agencies, & Institutions
        </Text>
      </Flex>

      <Flex justify="center">
        <Image
          src="/assets/imEx.png"
          alt="Shipment Services"
          maxW="800px"
        />
      </Flex>
      <Flex width="100%" height="100%" mt="1" mb="1" gap="1" justify="center">
        <Text fontSize="l" fontWeight="medium">
          Call us:
        </Text>
        <Text fontSize="l" fontWeight="normal" mr="1em">
          617-718-4639 (ImEx)
        </Text>

        <Text fontSize="l" fontWeight="medium">
          Email
        </Text>
        <Text fontSize="l" fontWeight="normal">
          group@imexcargo.com
        </Text>
        <Text fontSize="l" fontWeight="medium" ml="1em">
        Mon-Fri:
        </Text>
        <Text fontSize="l" fontWeight="normal">
        9:00am-5:00pm
        </Text>
      </Flex>
    </Flex>
  )
}

export default LHome