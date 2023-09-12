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
    description: 'September 5, 2023: 6:00 AM, California, USA',
  },
  {
    title: 'In Transit',
    description: 'September 5, 2023: 11:00 AM,  California, USA',
  },
  {
    title: 'Expected Delivery',
    description: 'September 8, 2023: 6:00 PM, Texas, USA',
  },
];

function LDetail() {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <>
      <VStack>
        <Text fontSize="40px" fontWeight="bold" mt="20px">
          Tracking Details
        </Text>
        <Flex alignItems="center" mt="-3">
          <Text fontSize="16px" fontWeight="semibold">
            Tracking Number:
          </Text>
          <Text fontSize="16px" mx="10px">
            85462189621354
          </Text>
        </Flex>
      </VStack>

      <VStack>
        <Flex
          minW="370px"
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
            size="lg"
            colorScheme='green'
            
          >
            {steps.map((step, index) => (
              <Step key={index} >
                <StepIndicator >
                  <StepStatus 
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber fontWeight="bold" />}
                    
                  />
                </StepIndicator>

                <Box flexShrink="0" >
                  <StepTitle  >{step.title}</StepTitle>
                  <StepDescription >{step.description}</StepDescription>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper >
        </Flex>
      </VStack>
    </>
  );
}

export default LDetail;
