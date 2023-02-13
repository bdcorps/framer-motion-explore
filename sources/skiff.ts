const source = `import {
  Box,
  chakra,
  Container,
  Input,
  shouldForwardProp,
  SimpleGrid,
  Text,
  VStack,
  Center
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { FunctionComponent, useState } from "react";

const variants = {
  enter: { opacity: 0, y: 200 },
  center: {
    transform: "scale(0.75) rotateY(-30deg) rotateX(45deg) translateZ(4.5rem)",
    transformOrigin: "50% 100%",
    transformStyle: "preserve-3d",
    boxShadow: "1rem 1rem 2rem rgba(0, 0, 0, 0.25)",
    transition: "0.6s ease transform",
    background: "#fbe806",
  },
};

const childVariants = {
  enter: { opacity: 0, x: -200 },
  center: { opacity: 1, x: 0 },
};

interface SearchProps {}

const Search: FunctionComponent<SearchProps> = () => {
  type StartupType = {
    name: string;
    description: string;
    function: string;
  };

  const startups: StartupType[] = [
    {
      name: "FoodEase",
      description:
        "A meal planning and grocery delivery service that takes the stress out of meal prep.",
      function:
        "Helps users plan meals, generate grocery lists, and get ingredients delivered to their door.",
    },
    {
      name: "Fitbit for Trees",
      description:
        "A smart device that monitors the health and growth of trees in urban environments.",
      function:
        "Helps cities and property owners keep their trees healthy and prevent tree loss due to environmental stressors.",
    },
    {
      name: "SociaLife",
      description:
        "A social networking platform that helps people connect and form meaningful relationships.",
      function:
        "Uses advanced algorithms to match users with compatible people based on shared interests and values.",
    },
    {
      name: "DreamSpace",
      description:
        "A virtual reality platform that allows users to explore and create their own dream worlds.",
      function:
        "Lets users design and experience their own virtual dreamscapes using intuitive creation tools and immersive technology.",
    },
    {
      name: "EcoPack",
      description:
        "An eco-friendly packaging company that offers sustainable solutions for shipping and packaging.",
      function:
        "Provides environmentally conscious businesses with affordable, eco-friendly packaging options to reduce waste and environmental impact.",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredStartups =
    search === ""
      ? startups
      : startups.filter(
          (startup) =>
            startup.name.toLowerCase().includes(search.toLowerCase()) ||
            startup.description.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <Box w={500} h="full">
      <VStack spacing={6}>
        <Input
          placeholder="Search for startups..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          backgroundColor="white"
        ></Input>

        <SimpleGrid w="full" columns={2} gridGap={4}>
          {filteredStartups.map((startup, i: number) => {
            return (
              <Box
                as={motion.div}
                key={startup.name}
                p={4}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                boxShadow="base"
                backgroundColor="white"
                rounded="md"
              >
                <Text fontWeight={500}>{startup.name}</Text>
                <Text color="gray.700" noOfLines={3}>{startup.description}</Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

const Home = () => {
  return (
    <Center h="100vh" pt={16} backgroundColor="purple.50">
        <Search />
    </Center>
  );
};

export default Home;`

const animation = {
  name: "Skiff",
  slug: "skiff",
  description: "Search results that animated the filtered results as you type. Perfect for the main search section of your SaaS app.",
  source,
}

export default animation;
