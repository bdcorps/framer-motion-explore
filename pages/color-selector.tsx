import {
  Box,
  chakra,
  Container,
  HStack,
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

const variants = {
  enter: {},
  center: {},
};

const childVariants = {
  enter: {},
  center: {},
};

interface ColorSelectorProps {}

const ColorSelector: FunctionComponent<ColorSelectorProps> = () => {
  // return a chakra ui box with border radius and color

  return (
    <Box h="100vh">
      <HStack
        as={motion.div}
        variants={variants}
        initial="enter"
        spacing={2}
        p={2}
        rounded="md"
        whileHover="center"
        bg="whiteAlpha.500"
        backdropFilter="blur(4px)"
      >
        {["#FF0000", "#5000FF", "#2000FF"].map((index) => (
          <ChakraBox
            rounded="full"
            key={index}
            // variants={childVariants}
            bg={index}
            w={4}
            h={4}
            cursor="pointer"
            filter="brightness(0.8)"
            whileHover={{ filter: "brightness(1)" }}
          ></ChakraBox>
        ))}
      </HStack>
    </Box>
  );
};

const Home = () => {
  return (
    <Box bgColor="purple.50">
      <Container h="100vh" pt={10}>
        <ColorSelector />
      </Container>
    </Box>
  );
};

export default Home;
