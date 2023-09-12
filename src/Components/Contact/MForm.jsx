import {
  Flex,
  Text,
  VStack,
  useColorModeValue,
  FormLabel,
  Input,
  FormControl,
  FormErrorMessage,
  Button,
  Select,
  Textarea,
  Divider,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const MForm = () => {
  const toast = useToast();
  const navigate = useNavigate();
  return (
    <VStack mt="20px" mb="50px">
      <Flex
        maxW="350px"
        bg={useColorModeValue('blue.200', 'blue.700')}
        borderRadius="20px"
        direction="column"
        p="20px"
      >
        <Text fontSize="25px" fontWeight="bold">
          Send a Message
        </Text>
        <Flex width="300px">
          <Text fontSize="16px">We'll reach out as soon as possible!</Text>
        </Flex>
        <Divider mt="15px" />
        <Flex width="300px" direction="column" mt="10px">
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              company: '',
              subject: '',
              message: '',
            }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .required('Please enter your first name')
                .max(60, 'No more than 60 characters'),
              lastName: Yup.string()
                .required('Please enter your last name')
                .max(60, 'No more than 60 characters'),
              email: Yup.string()
                .email('Invalid email')
                .required('An email address is required')
                .max(60, 'No more than 60 characters'),
              phone: Yup.number()
                .required('Phone number required')
                .typeError('Numbers only!'),
              company: Yup.string()
                .required("Please enter your company's name")
                .max(60, 'No more than 60 characters'),
              subject: Yup.string()
                .required('Please enter a subject')
                .max(60, 'No more than 60 characters'),
              message: Yup.string()
                .required('Please enter a message')
                .max(400, 'No more than 400 characters'),
            })}
            onSubmit={() => {
              console.log('Hello!');
            }}
          >
            {({ errors, isValid, dirty }) => (
              <Form as="form">
                <VStack>
                  <FormControl isInvalid={!!errors.firstName}>
                    <FormLabel
                      color="light.600"
                      _dark={{ color: 'dark.400' }}
                      htmlFor="email"
                    >
                      First Name
                    </FormLabel>
                    <Field
                      as={Input}
                      id="firstName"
                      name="firstName"
                      type="text"
                    />
                    <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.lastName}>
                    <FormLabel
                      color="light.600"
                      _dark={{ color: 'dark.400' }}
                      htmlFor="email"
                    >
                      Last Name
                    </FormLabel>
                    <Field
                      as={Input}
                      id="lastName"
                      name="lastName"
                      type="text"
                    />
                    <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.email}>
                    <FormLabel
                      color="light.600"
                      _dark={{ color: 'dark.400' }}
                      htmlFor="email"
                    >
                      Email Address
                    </FormLabel>
                    <Field as={Input} id="email" name="email" type="email" />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.phone}>
                    <FormLabel
                      color="light.600"
                      _dark={{ color: 'dark.400' }}
                      htmlFor="phone"
                    >
                      Phone Number
                    </FormLabel>
                    <Field as={Input} id="phone" name="phone" type="phone" />
                    <FormErrorMessage>{errors.phone}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.company}>
                    <FormLabel
                      color="light.600"
                      _dark={{ color: 'dark.400' }}
                      htmlFor="company"
                    >
                      Company's Name
                    </FormLabel>
                    <Field
                      as={Input}
                      id="company"
                      name="company"
                      type="company"
                    />
                    <FormErrorMessage>{errors.company}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.subject}>
                    <FormLabel
                      color="light.600"
                      _dark={{ color: 'dark.400' }}
                      htmlFor="subject"
                    >
                      Subject
                    </FormLabel>
                    <Field
                      as={Input}
                      id="subject"
                      name="subject"
                      type="subject"
                    />
                    <FormErrorMessage>{errors.subject}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.message}>
                    <FormLabel
                      color="light.600"
                      _dark={{ color: 'dark.400' }}
                      htmlFor="message"
                    >
                      Message
                    </FormLabel>

                    <Field
                      as={Input}
                      id="message"
                      name="message"
                      type="message"
                      noOfLines="5"
                      component="textarea"
                      rows="5"
                      cols="40"
                    />

                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                  </FormControl>

                  <Button
                    type="submit"
                    isDisabled={!isValid || !dirty}
                    variant="solid"
                    width="full"
                    onClick={() => {
                      toast({
                        title: 'Message Sent!',
                        status: 'success',
                        isClosable: 'true',
                        duration: 6000,
                      });
                      navigate('/home');
                    }}
                  >
                    Submit
                  </Button>
                </VStack>
              </Form>
            )}
          </Formik>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default MForm;
