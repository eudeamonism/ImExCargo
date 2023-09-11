import {
  Flex,
  Text,
  Image,
  Divider,
  List,
  UnorderedList,
  ListItem,
  useColorModeValue,
  Center,
  Box,
  VStack,
} from '@chakra-ui/react';

const LServices = () => {
  return (
    <VStack>
      <Flex
        width="100%"
        maxW="800px"
        height="50px"
        align="center"
        justify="center"
        mb="10px"
        mt="10px"
      >
        <Text fontSize="35px" fontWeight="extrabold">
          Services
        </Text>
      </Flex>

      <Divider mb="5px" maxW="800px" />

      <Flex width="100%" height="100%" direction="column" maxW="800px">
        <Flex width="100%" direction="column">
          <Flex px="5" width="100%" direction="column" mb="2">
            <Text fontSize="25px" fontWeight="extrabold">
              3PL/4PL
            </Text>
            <Text fontSize="16px" fontWeight="medium" mt="-1.5">
              Over 1200 clients!
            </Text>
          </Flex>

          <Image src="/assets/3plbig.jpg" alt="3PL/4PL" maxW="900px" />

          <Flex px="5" width="100%" direction="column" mt="2">
            <Text fontSize="16px" fontWeight="medium">
              3PL/4PL
            </Text>
            <Text fontSize="16px" fontWeight="normal">
              As a 3PL provider, we can help you reduce costs, increase
              efficiency, improve customer service, and increase flexibility by
              negotiating better rates with carriers and other suppliers,
              streamlining your logistics operations, providing a single point
              of contact, and adapting to your changing needs.
            </Text>
          </Flex>

          <Flex px="5" width="100%" direction="column" mt="3">
            <Text fontSize="16px" fontWeight="medium">
              Fourth-party logistics [4PL]
            </Text>
            <Text fontSize="16px" fontWeight="normal">
              We can also offer more comprehensive supply chain management
              services than a 3PL. We can essentially run and optimize your
              entire supply chain, from sourcing to delivery. We can also manage
              multiple 3PL providers and other supply chain partners, and act as
              a supply chain consultant.
            </Text>
          </Flex>

          <Flex width="100%" mt="3">
            <Flex width="100%" direction="column" align="center">
              <Text fontSize="16px" fontWeight="light">
                General Cargo
              </Text>
              <Text fontSize="16px" fontWeight="light">
                Dangerous Goods
              </Text>
              <Text fontSize="16px" fontWeight="light">
                High-Value Materials
              </Text>
              <Text fontSize="16px" fontWeight="light">
                Vehicles and Parts
              </Text>
              <Text fontSize="16px" fontWeight="light">
                Ammo & Weapons
              </Text>
              <Text fontSize="16px" fontWeight="light">
                ITAR Controlled Materials
              </Text>
              <Text fontSize="16px" fontWeight="light">
                Hazardous Materials
              </Text>
            </Flex>

            <Flex width="100%" direction="column" align="center">
              <Text fontSize="16px" fontWeight="light">
                Passengers
              </Text>
              <Text fontSize="16px" fontWeight="light">
                Human Remains
              </Text>
              <Text fontSize="16px" fontWeight="light">
                Oversized Cargo
              </Text>
              <Text fontSize="16px" fontWeight="light">
                Perishables
              </Text>
              <Text fontSize="16px" fontWeight="light">
                Pharmaceuticals
              </Text>
              <Text fontSize="16px" fontWeight="light">
                Medical
              </Text>
              <Text fontSize="16px" fontWeight="light">
                Aid & Relief
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Divider mt="30px" mb="5px" maxW="800px" />
      <Flex width="100%" height="100%" direction="column" maxW="800px">
        <Flex width="100%" direction="column">
          <Flex px="5" width="100%" direction="column" mb="2">
            <Text fontSize="25px" fontWeight="extrabold">
              GSA/GSSA
            </Text>
            <Text fontSize="14px" fontWeight="medium" mt="-1.5">
              Northeastern United States
            </Text>
          </Flex>

          <Image src="/assets/Lgsa.jpg" alt="GSA/GSSA" maxW="900px" />

          <Flex px="5" width="100%" direction="column" mt="2">
            <Text
              fontSize="14px"
              fontWeight="light"
              fontStyle="italic"
              mt="2"
              mb="4"
            >
              We will establish a presence in Boston/New England, New York, New
              Jersey, and/or Philadelphia with no start up cost. Benefit from a
              network of local community stakeholders and professional partners!
            </Text>
            <Text fontSize="16px" fontWeight="medium">
              General Sales Agent [GSA]
            </Text>
            <Text fontSize="16px" fontWeight="normal">
              We are responsible for selling air cargo space on behalf of an
              airline. They typically work with shippers and freight forwarders
              to book cargo shipments.
            </Text>
          </Flex>

          <Flex px="5" width="100%" direction="column" mt="3">
            <Text fontSize="16px" fontWeight="medium">
              General Sales and Service Agent [GSSA]
            </Text>
            <Text fontSize="16px" fontWeight="normal">
              As a GSSA, we provide a wide range of services to airlines,
              including sales, marketing, customer service, and operations
              management. Also, we help airlines market their air cargo
              services, provide customer service to their customers, and manage
              the day-to-day operations of their cargo business.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Divider mt="30px" mb="5px" maxW="800px" />
      <Flex
        width="100%"
        height="100%"
        direction="column"
        mb="40px"
        maxW="800px"
      >
        <Flex width="100%" direction="column">
          <Flex px="5" width="100%" direction="column" mb="2">
            <Text fontSize="25px" fontWeight="extrabold">
              Federal Contracts
            </Text>
            <Text fontSize="14px" fontWeight="medium" mt="-1.5">
              WOSB, EDWOSB, WBE, DBE, WBENC, SLBE, SBE, ACDBE
            </Text>
          </Flex>

          <Image src="/assets/Lfederal.jpg" alt="GSA/GSSA" maxW="900px" />

          <Flex px="5" width="100%" direction="column" mt="2">
            <Text
              fontSize="14px"
              fontWeight="light"
              fontStyle="italic"
              mt="2"
              mb="4"
            >
              We are authorized to provide goods and services to the United
              States government. This can include a wide range of activities,
              such as transporting cargo, providing logistics support, and
              delivering supplies.
            </Text>
            <Text fontSize="16px" fontWeight="medium">
              Services
            </Text>
            <UnorderedList>
              <ListItem fontSize="16px">
                4PL and supply chain consulting
              </ListItem>
              <ListItem fontSize="16px">3rd party logistics provider</ListItem>
              <ListItem fontSize="16px">
                Domestic Freight Broker: FTL, LTL, refrigerated, flatbed,
                oversized, specialized and time-sensitive cargo
              </ListItem>
              <ListItem fontSize="16px">
                International and domestic air, ocean, trucking and ground
              </ListItem>
              <ListItem fontSize="16px">
                TSA approved air security/STA security threat assessment
              </ListItem>
              <ListItem fontSize="16px">
                Customs clearance and trade compliance
              </ListItem>
            </UnorderedList>
          </Flex>

          <Flex px="5" width="100%" direction="column" mt="3">
            <Text fontSize="16px" fontWeight="medium">
              NAICS Codes:
            </Text>
            <Text fontSize="14px" fontWeight="light">
              481112 Scheduled Freight Air Transportation
            </Text>
            <Text fontSize="14px" fontWeight="light">
              481211 Non-Scheduled Chartered Passenger Air Transportation
            </Text>
            <Text fontSize="14px" fontWeight="light">
              481212 Scheduled Chartered Freight Air Transportation
            </Text>
            <Text fontSize="14px" fontWeight="light">
              481219 Other Non-scheduled Air Transportation
            </Text>
            <Text fontSize="14px" fontWeight="light">
              484110 General Freight Trucking Local
            </Text>
            <Text fontSize="14px" fontWeight="light">
              484121 General Freight Trucking Long Distance FTL
            </Text>
            <Text fontSize="14px" fontWeight="light">
              484122 General Freight Trucking Long Distance LTL
            </Text>
            <Text fontSize="14px" fontWeight="light">
              484210 Used Household and Office Goods Moving
            </Text>
            <Text fontSize="14px" fontWeight="light">
              484220 Specialized Freight Trucking Local (Except Used Goods)
            </Text>
            <Text fontSize="14px" fontWeight="light">
              484230 Specialized Freight Trucking Long Distance (Except Used
              Goods)
            </Text>
            <Text fontSize="14px" fontWeight="light">
              493110 General Warehouse & Storage
            </Text>
            <Text fontSize="14px" fontWeight="light">
              493120 Refrigerated Warehousing & Storage
            </Text>
            <Text fontSize="14px" fontWeight="light">
              493190 Other Warehouse & Storage
            </Text>
            <Text fontSize="14px" fontWeight="light">
              492110 Couriers & Express Delivery Services
            </Text>
            <Text fontSize="14px" fontWeight="light">
              492210 Local Messengers & Local Delivery
            </Text>
            <Text fontSize="14px" fontWeight="light">
              488510 Freight Transportation Arrangement
            </Text>
            <Text fontSize="14px" fontWeight="light">
              488991 Packing & Crating
            </Text>
            <Text fontSize="14px" fontWeight="light">
              488999 All Other Support Activities for Transportation
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default LServices;
