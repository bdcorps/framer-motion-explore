import {
  Box,
  chakra,
  Container,
  Input,
  shouldForwardProp,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import { isValidMotionProp, motion } from "framer-motion";
import { FunctionComponent, useState } from "react";

// https://dribbble.com/shots/18227366-Onboarding
// getting exit animations going

const inter = Inter({ subsets: ["latin"] });

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

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

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
  const listOfMovies = [
    {
      title: "The Shawshank Redemption",
      year: "1994",
    },
    {
      title: "The Godfather",
      year: "1972",
    },
    {
      title: "The Godfather: Part II",
      year: "1974",
    },
    {
      title: "The Dark Knight",
      year: "2008",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredMovies =
    search === ""
      ? listOfMovies
      : listOfMovies.filter((movie) =>
          movie.title.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <Box h="100vh">
      <Input
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></Input>

      <SimpleGrid spacing={3} w="full" columns={3}>
        {filteredMovies.map((movie, i: number) => {
          return (
            <ChakraBox
              key={movie.title}
              p={4}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              boxShadow="md"
            >
              <Text fontWeight={500}>{movie.title}</Text>
              <Text>{movie.year}</Text>
            </ChakraBox>
          );
        })}
      </SimpleGrid>
      {/* <ChakraBox
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        bg="purple.500"
        w="100px"
        h="100px"
      ></ChakraBox> */}

      {/*   
      <ChakraBox
        w="full"
        initial="enter"
        animate="center"
        // @ts-ignore
        transition={{
          duration: 0.8,
          when: "beforeChildren",
          delayChildren: 0.3,
          staggerChildren: 0.8,
        }}
        variants={variants}
      >
        <Grid
          as="motion.div"
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <ChakraBox
            variants={childVariants}
            transition={{
              duration: 0.4,
            }}
          >
            <GridItem rowSpan={2} colSpan={1} bg="purple.600" />
            <GridItem colSpan={2} bg="purple.300" />
            <GridItem colSpan={2} bg="purple.500" />
            <GridItem colSpan={4} bg="purple.400" />
          </ChakraBox>{" "}
        </Grid>
      </ChakraBox> */}
    </Box>
  );
};

const Home = () => {
  return (
    <Box bgColor="purple.50">
      <Container h="100vh" pt={10}>
        <Layout />
      </Container>
    </Box>
  );
};

export default Home;
