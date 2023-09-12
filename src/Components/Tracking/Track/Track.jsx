import {
  VStack,
  Flex,
  useMediaQuery,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Button,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';

import { TriangleDownIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Track = () => {
  const [isLargerThan700] = useMediaQuery('(width > 700px)');
  return (
    <Flex direction="column">
      <VStack>
        <Text fontSize="25px" fontWeight="bold">
          ImEx Tracking
        </Text>
      </VStack>
      <Accordion allowMultiple allowToggle>
        <AccordionItem>
          <Flex
            px="5"
            bg={useColorModeValue('gray.200', 'blue')}
            align="center"
            borderTop="1px"
            borderTopColor="gray.400"
          >
            <Text
              fontSize={isLargerThan700 ? '25px' : '17px'}
              fontWeight="medium"
            >
              What does my tracking number look like?
            </Text>
            <Spacer />

            <AccordionButton width="5px" justifyContent="center">
              <ChevronDownIcon boxSize="30px" />
            </AccordionButton>
          </Flex>
          <Flex>
            <AccordionPanel>
              <Flex px="5">
                <Text fontSize={isLargerThan700 ? '25px' : '17px'}>
                  Tracking Number: 85462189621354
                </Text>
              </Flex>
            </AccordionPanel>
          </Flex>
        </AccordionItem>
        <AccordionItem>
          <Flex
            px="5"
            bg={useColorModeValue('gray.200', 'blue')}
            align="center"
            borderTop="1px"
            borderTopColor="gray.400"
          >
            <Text
              fontSize={isLargerThan700 ? '25px' : '17px'}
              fontWeight="medium"
            >
              Where do I find the tracking number?
            </Text>
            <Spacer />

            <AccordionButton width="5px" justifyContent="center">
              <ChevronDownIcon boxSize="30px" />
            </AccordionButton>
          </Flex>
          <Flex>
            <AccordionPanel>
              <Flex px="5">
                <Text fontSize={isLargerThan700 ? '25px' : '17px'}>
                  You can find your tracking number in the top part of your
                  receipt, both in your account page and in your email receipt.
                </Text>
              </Flex>
            </AccordionPanel>
          </Flex>
        </AccordionItem>
        <AccordionItem>
          <Flex
            px="5"
            bg={useColorModeValue('gray.200', 'blue')}
            align="center"
            borderTop="1px"
            borderBottom="1px"
            borderColor="gray.400"
          >
            <Text
              fontSize={isLargerThan700 ? '25px' : '17px'}
              fontWeight="medium"
            >
              How can I leave delivery instructions?
            </Text>
            <Spacer />

            <AccordionButton width="5px" justifyContent="center">
              <ChevronDownIcon boxSize="30px" />
            </AccordionButton>
          </Flex>
          <Flex>
            <AccordionPanel>
              <Flex px="5">
                <Text fontSize={isLargerThan700 ? '25px' : '17px'}>
                  On the delivery form, you can specify the address(es) where
                  you want your cargo delivered and provide any specific
                  delivery instructions, such as key codes, time of day
                  deliveries, etc.
                </Text>
              </Flex>
            </AccordionPanel>
          </Flex>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default Track;
