import { Box, Button, Container, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Stack direction={["column", "row"]} spacing={8} align="center">
            <VStack align={["center", "flex-start"]} spacing={6} flex={1}>
              <Heading as="h1" size="2xl">
                Find Top Software Talent on Particles
              </Heading>
              <Text fontSize="xl">Particles is a marketplace for finding top software talent specializing in web technologies like React, Node.js, .NET, Go, and JavaScript.</Text>
              <Button colorScheme="blue" size="lg">
                View Developers
              </Button>
            </VStack>
            <Box flex={1}>
              <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnMlMjB3b3JraW5nfGVufDB8fHx8MTcxMzA0ODY0Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Software Developers" />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={10} textAlign="center">
            Why Choose Particles?
          </Heading>
          <Stack direction={["column", "row"]} spacing={8}>
            <Box flex={1} bg="white" borderRadius="md" p={6} boxShadow="md">
              <FaCheckCircle size={24} color="green.500" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Pre-vetted Talent
              </Heading>
              <Text>All developers on Particles are thoroughly vetted for their skills and experience, ensuring you get top-quality talent for your projects.</Text>
            </Box>
            <Box flex={1} bg="white" borderRadius="md" p={6} boxShadow="md">
              <FaCheckCircle size={24} color="green.500" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Wide Range of Expertise
              </Heading>
              <Text>Find developers with expertise in various web technologies, including React, Node.js, .NET, Go, and JavaScript, to meet your specific project needs.</Text>
            </Box>
            <Box flex={1} bg="white" borderRadius="md" p={6} boxShadow="md">
              <FaCheckCircle size={24} color="green.500" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Easy Communication
              </Heading>
              <Text>Communicate directly with developers through the Particles platform, making it easy to discuss project requirements, timelines, and deliverables.</Text>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
