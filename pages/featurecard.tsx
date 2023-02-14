import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Center,
  chakra,
  IconButton,
  shouldForwardProp,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { FunctionComponent } from "react";

interface PostCardProps {}

const variants = {
  enter: {},
  center: {
    backgroundColor: "white",
    color: "black",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const childVariants = {
  enter: {
    transform: "rotate(-40deg)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
  center: {
    transform: "rotate(-45deg)",
    backgroundColor: "#424242",
    color: "white",
    transition: {
      duration: 0.4,
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
      position="relative"
      variants={variants}
      cursor="pointer"
      initial={{
        borderWidth: 0,
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
        color: "#5000FF",
      }}
      // @ts-ignore
      transition={{ duration: 0.02 }}
    >
      <IconButton
        as={motion.div}
        icon={<ArrowForwardIcon />}
        rounded="full"
        position="absolute"
        top={1}
        right={1}
        aria-label="Go to post"
        variants={childVariants}
        backgroundColor="white"
        initial={{
          transform: "rotate(-40deg)",
        }}
        whileHover={{
          transform: "rotate(-45deg)",
          transition: { duration: 0.4, type: "tween", ease: "easeIn" },
        }}
      />

      <Text color="gray.600">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,
        nisl eget
      </Text>
    </ChakraBox>
  );
};

const Home = () => {
  return (
    <Center h="100vh" bgColor="purple.50">
      <SimpleGrid gridGap={6} columns={1} w={600}>
        <PostCard />
        <PostCard />
        <PostCard />
      </SimpleGrid>
    </Center>
  );
};

export default Home;
