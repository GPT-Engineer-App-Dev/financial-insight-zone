import { Box, Container, Flex, Heading, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>World</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Business</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Tech</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={8}>
        {/* Featured Article */}
        <Box flex="2" mr={{ md: 8 }} mb={{ base: 8, md: 0 }}>
          <Box bg="gray.100" p={6} borderRadius="md">
            <Heading size="lg" mb={4}>Featured Article</Heading>
            <Text fontSize="md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            </Text>
          </Box>
        </Box>

        {/* Sidebar */}
        <Box flex="1" bg="gray.50" p={6} borderRadius="md">
          <Heading size="md" mb={4}>Trending Topics</Heading>
          <VStack align="start" spacing={4}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Topic 1</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Topic 2</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Topic 3</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Topic 4</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Grid of Smaller Articles */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8} px={8}>
        <Box bg="gray.100" p={6} borderRadius="md">
          <Heading size="md" mb={4}>Article 1</Heading>
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
          </Text>
        </Box>
        <Box bg="gray.100" p={6} borderRadius="md">
          <Heading size="md" mb={4}>Article 2</Heading>
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
          </Text>
        </Box>
        <Box bg="gray.100" p={6} borderRadius="md">
          <Heading size="md" mb={4}>Article 3</Heading>
          <Text fontSize="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
          </Text>
        </Box>
      </SimpleGrid>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" px={8}>
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>About</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Privacy Policy</Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Terms of Service</Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;