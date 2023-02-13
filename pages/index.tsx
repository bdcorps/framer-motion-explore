import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import LandingLayout from "../components/Landing/LandingLayout";
import { PostCard } from "../components/PostCard";
import { sources } from "../sources";

interface MainPageProps {}

const categories = [
  "micro-interaction",
  "card",
  "hover effect",
  "keyboard",
  "enter",
  "exit",
];

const MainPage: FunctionComponent<MainPageProps> = () => {
  return (
    <LandingLayout>
      <VStack>
        <Center textAlign="center" h="70vh" maxW={800}>
          <VStack align="center" maxW="container.sm" spacing={8}>
            <VStack align="center" maxW="container.sm" spacing={4}>
              <Heading as="h1" fontWeight={800} fontSize="5xl">
                Ready to copy Framer Motion animations
              </Heading>
              <Text as="h2" color="gray.600" fontSize="xl">
                Delight your users with beautiful micro-animations that leave
                them with a satisfied smile
              </Text>
            </VStack>

            <Button colorScheme="brand" rightIcon={<ArrowForwardIcon />}>
              Subscribe
            </Button>
          </VStack>
        </Center>

        <VStack align="center" spacing={4} w="full">
          {/* <HStack w="full">
            {categories.map((category) => {
              return (
                <Button
                  key={category}
                  colorScheme="gray"
                  size="md"
                  rounded="full"
                  fontWeight={400}
                >
                  {category}
                </Button>
              );
            })}
          </HStack> */}
          <SimpleGrid columns={[1, 2]} w="full" gridGap={10}>
            {sources.map((source, i) => {
              return (
                <PostCard
                  key={`source_${i}`}
                  slug={source.slug}
                  name={source.name}
                />
              );
            })}
          </SimpleGrid>
        </VStack>
      </VStack>
    </LandingLayout>
  );
};

export default MainPage;
