import {
  Box,
  chakra,
  Container,
  shouldForwardProp,
  SimpleGrid,
} from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import { isValidMotionProp, motion } from "framer-motion";
import { FunctionComponent } from "react";

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
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  enter: { opacity: 0, x: -30, y: -30 },
  center: { opacity: 1, x: 0, y: 0 },
};

interface StaggeredChildrenProps {}

const StaggeredChildren: FunctionComponent<StaggeredChildrenProps> = () => {
  // return a chakra ui box with border radius and color

  return (
    <Box h="100vh">
      <SimpleGrid
        as={motion.div}
        variants={variants}
        initial="enter"
        animate="center"
        bg="purple.500"
        columns={2}
        spacing={10}
        p={10}
        rounded="md"
      >
        {[0, 1, 2, 3].map((index) => (
          <ChakraBox
            key={index}
            variants={childVariants}
            bg="purple.50"
            w="full"
            h="100px"
            whileHover={{ scale: 1.1 }}
            _hover={{ cursor: "pointer" }}
            // @ts-ignore
            transition={{
              duration: 0.2,
            }}
          ></ChakraBox>
        ))}
      </SimpleGrid>

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
        <StaggeredChildren />
      </Container>
    </Box>
  );
};

export default Home;
