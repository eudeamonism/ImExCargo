import { Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';

const MHome = () => {
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
        <Text fontWeight="bold" fontSize="2xl">
          Welcome to ImEx Cargo
        </Text>
        <Text fontSize="sm">GSA/GSSA, Government Contractor, 3PL/4PL</Text>
        <Text fontSize="xs" fontStyle="italic">
          logitstics for Businesses, Agencies, & Institutions
        </Text>
      </Flex>

      <Flex justify="center" width="100%">
        <Image
          src="/assets/imEx.png"
          alt="Shipment Services"
          width="100%"
          height="100%"
        />
      </Flex>
      <Flex width="100%" height="100%" p="1.5" gap="1" justify="center">
        <Text fontSize="xs" fontWeight="medium">
          Call us:
        </Text>
        <Text fontSize="xs" fontWeight="normal" mr="1em">
          617-718-4639 (ImEx)
        </Text>

        <Text fontSize="xs" fontWeight="medium">
          Email
        </Text>
        <Text fontSize="xs" fontWeight="normal">
          group@imexcargo.com
        </Text>
      </Flex>
    </Flex>
  );
};

export default MHome;
