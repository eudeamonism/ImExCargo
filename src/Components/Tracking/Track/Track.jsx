import {
  VStack,
  Flex,
  FormLabel,
  Input,
  FormControl,
  FormErrorMessage,
  useToast,
  useMediaQuery,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Button,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { TriangleDownIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Track = () => {
  const toast = useToast();
  const [isLargerThan700] = useMediaQuery('(width > 700px)');
  const navigate = useNavigate();
  return (
    <VStack mt="10px">
      <Flex direction="column">
        <VStack>
          <Text fontSize="25px" fontWeight="bold" mb="10px">
            ImEx Tracking
          </Text>
        </VStack>

        <Formik
          initialValues={{ track: '' }}
          validationSchema={Yup.object({
            track: Yup.number()
              .required('Enter tracking number!')
              .typeError('Numbers only!'),
          })}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ errors, isValid, dirty }) => (
            <Form as="form">
              <VStack>
                <FormControl isInvalid={!!errors.track}>
                  <FormLabel
                    color="light.600"
                    _dark={{ color: 'dark.400' }}
                    htmlFor="email"
                    fontSize="20px"
                  >
                    Tracking Number
                  </FormLabel>
                  <Field as={Input} id="track" name="track" type="text" />
                  <FormErrorMessage>{errors.track}</FormErrorMessage>
                </FormControl>
                <Button
                    type="submit"
                    isDisabled={!isValid || !dirty}
                    variant="solid"
                    width="full"
                    onClick={() => {
                      toast({
                        title: 'Tracking found!',
                        status: 'success',
                        isClosable: 'true',
                        duration: 6000,
                      });
                      navigate('/detail');
                    }}
                  >
                    Submit
                  </Button>
              </VStack>
            </Form>
          )}
        </Formik>
        <VStack>
          <Text fontSize="23px" fontWeight="semibold" mb="10px">
            FAQs
          </Text>
        </VStack>
        <Accordion allowMultiple allowToggle>
          <AccordionItem>
            <Flex
              px="5"
              bg={useColorModeValue('gray.200', 'blue.600')}
              align="center"
              borderBottom="1px"
              borderBottomColor={useColorModeValue('gray.300', 'gray.400')}
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
              <AccordionPanel maxW={isLargerThan700 ? '1200px' : '600px'}>
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
              bg={useColorModeValue('gray.200', 'blue.600')}
              align="center"
              borderBottom="1px"
              borderBottomColor={useColorModeValue('gray.300', 'gray.400')}
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
              <AccordionPanel maxW={isLargerThan700 ? '1200px' : '600px'}>
                <Flex px="5">
                  <Text fontSize={isLargerThan700 ? '25px' : '17px'}>
                    You can find your tracking number in the top part of your
                    receipt, both in your account page and in your email
                    receipt.
                  </Text>
                </Flex>
              </AccordionPanel>
            </Flex>
          </AccordionItem>
          <AccordionItem>
            <Flex
              px="5"
              bg={useColorModeValue('gray.200', 'blue.600')}
              align="center"
              borderBottom="1px"
              borderBottomColor={useColorModeValue('gray.300', 'gray.400')}
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
              <AccordionPanel maxW={isLargerThan700 ? '1200px' : '600px'}>
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
    </VStack>
  );
};

export default Track;
