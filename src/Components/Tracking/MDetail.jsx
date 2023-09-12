import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
  Text,
  Flex,
  VStack,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';

const steps = [
  {
    title: 'Processed Order',
    description: 'Sept. 5, 2023: 6:00 AM, CA, USA',
  },
  {
    title: 'In Transit',
    description: 'Sept. 5, 2023: 11:00 AM,  CA, USA',
  },
  {
    title: 'Expected Delivery',
    description: 'Sept. 8, 2023: 6:00 PM, TX, USA',
  },
];

function MDetail() {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <>
      <VStack>
        <Text fontSize="25px" fontWeight="bold" mt="20px">
          Tracking Details
        </Text>
        <Flex alignItems="center" mt="-3">
          <Text fontSize="14px" fontWeight="semibold">
            Tracking Number:
          </Text>
          <Text fontSize="14px" mx="10px">
            85462189621354
          </Text>
        </Flex>
      </VStack>

      <VStack>
        <Flex
          minW="305px"
          mb="30px"
          mt="30px"
          bg={useColorModeValue('gray.300', 'blue.800')}
          p="25px"
          borderRadius="20px"
        >
          <Stepper
            index={activeStep}
            orientation="vertical"
            height="400px"
            gap="0"
            colorScheme='green'
            
          >
            {steps.map((step, index) => (
              <Step key={index} >
                <StepIndicator >
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                    
                  />
                </StepIndicator>

                <Box flexShrink="0" >
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </Box>

                <StepSeparator  />
              </Step>
            ))}
          </Stepper>
        </Flex>
      </VStack>
    </>
  );
}

export default MDetail;
