import { Box, Text } from "@chakra-ui/react";

const Opinion = () => {
  return (
    <Box bg="#fff1e5" minH="100vh">
      <Box p={4}>
        <Text fontSize="2xl" fontWeight="bold">Opinion</Text>
        <Text>Opinion pieces and editorials will be displayed here.</Text>
      </Box>
    </Box>
  );
};

export default Opinion;