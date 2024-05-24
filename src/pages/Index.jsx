import { Box, Container, Flex, Heading, HStack, Text, VStack, Link, SimpleGrid } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
          <Link as={RouterLink} to="/world" _hover={{ textDecoration: "none", color: "gray.400" }}>World</Link>
          <Link as={RouterLink} to="/business" _hover={{ textDecoration: "none", color: "gray.400" }}>Business</Link>
          <Link as={RouterLink} to="/markets" _hover={{ textDecoration: "none", color: "gray.400" }}>Markets</Link>
          <Link as={RouterLink} to="/opinion" _hover={{ textDecoration: "none", color: "gray.400" }}>Opinion</Link>
          <Link as={RouterLink} to="/tech" _hover={{ textDecoration: "none", color: "gray.400" }}>Tech</Link>
        </HStack>
      </Flex>

      {/* Main Content Area */}
      <Flex mt={8} direction={{ base: "column", md: "row" }}>
        <Box flex="3" mr={{ md: 8 }}>
          {/* Featured Article */}
          <Box mb={8}>
            <Heading as="h2" size="xl" mb={4}>Featured Article</Heading>
            <Text fontSize="lg">This is the featured article. It has a larger space and more prominence.</Text>
          </Box>

          {/* Grid of Smaller Articles */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Box>
              <Heading as="h3" size="md" mb={2}>Article Title 1</Heading>
              <Text>Summary of the article content goes here.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>Article Title 2</Heading>
              <Text>Summary of the article content goes here.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>Article Title 3</Heading>
              <Text>Summary of the article content goes here.</Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>Article Title 4</Heading>
              <Text>Summary of the article content goes here.</Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Sidebar */}
        <Box flex="1" bg="gray.100" p={4} borderRadius="md">
          <Heading as="h3" size="lg" mb={4}>Trending Topics</Heading>
          <VStack align="start" spacing={4}>
            <Text>Trending Topic 1</Text>
            <Text>Trending Topic 2</Text>
            <Text>Trending Topic 3</Text>
            <Text>Trending Topic 4</Text>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Flex as="footer" bg="gray.800" color="white" p={4} mt={8} justifyContent="space-between" alignItems="center">
        <HStack spacing={8}>
          <Link as={RouterLink} to="/about" _hover={{ textDecoration: "none", color: "gray.400" }}>About</Link>
          <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
          <Link as={RouterLink} to="/privacy" _hover={{ textDecoration: "none", color: "gray.400" }}>Privacy Policy</Link>
          <Link as={RouterLink} to="/terms" _hover={{ textDecoration: "none", color: "gray.400" }}>Terms of Service</Link>
        </HStack>
        <Text>&copy; 2023 Financial Times</Text>
      </Flex>
    </Container>
  );
};

export default Index;