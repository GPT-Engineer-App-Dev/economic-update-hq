import { Box, Text } from "@chakra-ui/react";

const World = () => {
  return (
    <Box bg="#fff1e5" minH="100vh">
      <Box p={4}>
        <Text fontSize="2xl" fontWeight="bold">World</Text>
        <Text>World news and international updates will be displayed here.</Text>
      </Box>
    </Box>
  );
};

export default World;