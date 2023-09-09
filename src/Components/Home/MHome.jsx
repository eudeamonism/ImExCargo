import { Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';

const MHome = () => {
  return (
    <Flex justify="center">
      <Flex direction="row" justify="center" width="100%" height="400px">
        <Image
          src="/assets/services.jpg"
          alt="Shipment Services"
          objectFit="cover"
          boxShadow="2xl"
          borderRadius="5"
        />
      </Flex>
      <Flex direction="row" justify="center" width="100%">
        <Text>Hello</Text>
        <Text>Hello</Text>
      </Flex>
    </Flex>
  );
};

export default MHome;
