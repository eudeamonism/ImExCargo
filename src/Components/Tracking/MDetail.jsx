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
} from '@chakra-ui/react';

const steps = [
  {
    title: 'Processed Order',
    description: 'September 5, 2023: 6:00 AM, California, USA',
  },
  { title: 'In Transit', description: 'September 5, 2023: 11:00 AM' },
  {
    title: 'Expected Delivery',
    description: 'September 8, 2023: 6:00 PM, Texas, USA',
  },
];

function MDetail() {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <>
      <VStack  mb="20px">
        <Text fontSize="25px" fontWeight="bold" mt="20px">
          Tracking Details
        </Text>
        <Flex alignItems="center">
          <Text fontSize="14px" fontWeight="semibold">
            Shipping Number:
          </Text>
          <Text fontSize="14px" mx="10px">
            12345
          </Text>
        </Flex>
      </VStack>

      <Flex mx="25px" direction="column" mb="10px">
        <Text fontSize="20px" fontWeight="semibold" mb="2px">
          Client Order Information
        </Text>
        <Text fontSize="16px">John Doe</Text>
        <Text fontSize="14px">123 Alphabet St.</Text>
        <Text fontSize="14px">Houston, TX 77023</Text>
        <Text fontSize="14px">713-382-5146</Text>
        <Text fontSize="14px" mb="10px">
          joey@gmail.com
        </Text>
        
      </Flex>
      <Flex mx="25px" direction="column" mb="10px">
        <Text fontSize="20px" fontWeight="semibold" mb="2px">
          ImEx Cargo
        </Text>
        <Text fontSize="16px">Customer Service</Text>
        <Text fontSize="14px">1R Newbury St</Text>
        <Text fontSize="14px">Peabody, MA 01960</Text>
        <Text fontSize="14px">617-718-4639</Text>
        <Text fontSize="14px" mb="10px">
          group@imexcargo.com
        </Text>
      </Flex>

      <VStack>
        <Text fontSize="25px" fontWeight="semibold" mt="10px" mb="20px">
          Updates
        </Text>
      </VStack>

      <VStack mb="45px">
        <Stepper
          index={activeStep}
          orientation="vertical"
          height="400px"
          gap="0"
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </VStack>
    </>
  );
}

export default MDetail;
