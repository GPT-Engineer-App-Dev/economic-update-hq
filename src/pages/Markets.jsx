import { Box, Text } from "@chakra-ui/react";

const Markets = () => {
  return (
    <Box bg="#fff1e5" minH="100vh">
      <Box p={4}>
        <Text fontSize="2xl" fontWeight="bold">Markets</Text>
        <Text>Market data and financial news will be displayed here.</Text>
      </Box>
    </Box>
  );
};

export default Markets;