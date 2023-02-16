import {
  Box,
  Button,
  Center,
  chakra,
  shouldForwardProp,
  Text,
  VStack,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { FunctionComponent } from "react";

interface PostCardProps {}

const variants = {
  initial: {},
  center: {
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const hideMetricsVariants = {
  initial: {
    opacity: 1,
    transition: {
      duration: 0.01,
      type: "tween",
      ease: "easeIn",
    },
  },
  center: {
    opacity: 0,

    transition: {
      duration: 0.01,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const moreInfoVariants = {
  initial: {
    y: 100,
    transition: {
      duration: 0.01,
      type: "tween",
      ease: "easeIn",
    },
  },
  center: {
    y: 0,
    transition: {
      duration: 0.01,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const PostCard: FunctionComponent<PostCardProps> = () => {
  return (
    <ChakraBox
      // as={motion.div}
      rounded="md"
      boxShadow="base"
      backgroundColor="gray.50"
      p={6}
      variants={variants}
      cursor="pointer"
      initial="initial"
      whileHover="center"
      // @ts-ignore
      transition={{ duration: 0.01 }}
      overflow="hidden"
      position="relative"
    >
      <VStack spacing={2} align="flex-start">
        <Text color="gray.800" fontWeight={600}>
          Total Audience
        </Text>
        <Text
          as={motion.p}
          color="gray.600"
          fontSize="4xl"
          variants={hideMetricsVariants}
        >
          2933.4K members
        </Text>
      </VStack>
      <Button
        as={motion.button}
        variant="solid"
        colorScheme="brand"
        variants={moreInfoVariants}
        position="absolute"
        bottom={6}
      >
        View account details
      </Button>
    </ChakraBox>
  );
};

const Home = () => {
  return (
    <Center h="100vh" bgColor="purple.50">
      <Box w={400}>
        <PostCard />
      </Box>
    </Center>
  );
};

export default Home;
