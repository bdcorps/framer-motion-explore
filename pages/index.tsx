import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import LandingLayout from "../components/Landing/LandingLayout";
import { sources } from "../sources";

interface CardProps {
  slug: string;
}

export const Card: FunctionComponent<CardProps> = ({ slug }: any) => {
  const router = useRouter();

  const colors = [
    "gray.100",
    "brand.100",
    "green.100",
    "purple.100",
    "red.100",
  ];
  const backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <VStack
      align="flex-start"
      cursor="pointer"
      onClick={() => {
        router.push(`/${slug}`);
      }}
    >
      <Box // borderWidth="1px"
        // backgroundColor={backgroundColor}
        // borderColor="gray.400"
        // p={4}
        rounded="md"
      >
        <Box
          filter="saturate(0)"
          _hover={{ filter: "saturate(1)" }}
          transition="all 0.2s ease-in-out"
          as="video"
          autoPlay
          loop
          muted
          poster="/animation1.png"
          // style={{ filter: "saturate(0)" }}
        >
          <source
            src="https://launchman-space.nyc3.cdn.digitaloceanspaces.com/framer-animations%22.mp4"
            type="video/mp4"
          />
        </Box>
      </Box>

      <Text fontSize="sm" fontWeight={500}>
        EPIC Agency
      </Text>
    </VStack>
  );
};

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
                Astronomically good framer animations from all over the web (/w
                code)
              </Text>
            </VStack>

            <Button colorScheme="brand" rightIcon={<ArrowForwardIcon />}>
              Subscribe
            </Button>
          </VStack>
        </Center>

        <VStack align="center" spacing={4}>
          <HStack w="full">
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
          </HStack>
          <SimpleGrid columns={[1, 2]} w="full" gridGap={10}>
            {sources.map((source, i) => {
              return <Card key={`source_${i}`} slug={source.slug} />;
            })}
          </SimpleGrid>
        </VStack>
      </VStack>
    </LandingLayout>
  );
};

export default MainPage;
