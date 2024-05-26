import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="#fff1e5">
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        <Box flex="3" p={4}>
          <Text fontSize="2xl" fontWeight="bold">Top News Stories</Text>
          <VStack spacing={4} mt={4}>
            <Box p={4} shadow="md" borderWidth="1px">
              <Text fontSize="lg" fontWeight="bold">Headline 1</Text>
              <Text>Summary of the news article 1...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Text fontSize="lg" fontWeight="bold">Headline 2</Text>
              <Text>Summary of the news article 2...</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" p={4} bg="#fff1e5" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Text fontSize="xl" fontWeight="bold">Market Data</Text>
          <VStack spacing={4} mt={4}>
            <Box p={4} shadow="md" borderWidth="1px">
              <Text fontSize="lg" fontWeight="bold">Market 1</Text>
              <Text>Details about market 1...</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Text fontSize="lg" fontWeight="bold">Market 2</Text>
              <Text>Details about market 2...</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;