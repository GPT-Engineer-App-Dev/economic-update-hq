import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="#fff1e5" color="black" py={4} mt={8}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center" px={4}>
        <Text>&copy; {new Date().getFullYear()} Financial Times</Text>
        <Flex>
          <Link href="/contact" px={2} py={1} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Contact
          </Link>
          <Link href="/privacy" px={2} py={1} _hover={{ textDecoration: "none", bg: "gray.700" }}>
            Privacy Policy
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;