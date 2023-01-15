import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  chakra,
  Container,
  IconButton,
  shouldForwardProp,
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

// const variants = {
//   enter: {
//     borderWidth: "2px",
//     borderColor: "#5000FF",
//   },
//   center: {
//     borderWidth: "2px",
//     borderColor: "#5000FF",
//   },
// };

const variants = {
  center: {
    borderWidth: "2px",
    borderColor: "#5000FF",
  },
};

interface IconAnimationProps {}

const IconAnimation: FunctionComponent<IconAnimationProps> = () => {
  // return a chakra ui box with border radius and color

  return (
    <Box h="100vh">
      <IconButton
        as={motion.div}
        aria-label="Search database"
        icon={<SearchIcon />}
        backgroundColor="white"
        size="sm"
        // variants={variants}
        initial={{
          borderWidth: "0",
          borderColor: "#FFF",
          boxShadow: "none",
          scale: 1,
        }}
        whileHover={{
          borderWidth: "2px",
          borderColor: "#5000FF",
          borderRadius: "6px",
          boxShadow: "0 2px 40px -4px rgb(80 0 255 / 0.4)",
          transition: { duration: 0.03 },
          scale: 0.97,
        }}
        // @ts-ignore
        transition={{ duration: 2 }}
        _hover={{ backgroundColor: "white", cursor: "pointer" }}
      />

      {/* <ChakraBox
        w="40px"
        h="40px"
        backgroundColor="purple.500"
        variants={variants}
        whileHover="center"
      ></ChakraBox> */}
      {/* <SimpleGrid
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
        
      </SimpleGrid> */}
    </Box>
  );
};

const Home = () => {
  return (
    <Box bgColor="purple.50">
      <Container h="100vh" pt={10}>
        <IconAnimation />
      </Container>
    </Box>
  );
};

export default Home;
