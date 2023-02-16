import { ArrowForwardIcon, CheckIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  chakra,
  HStack,
  shouldForwardProp,
  Text,
} from "@chakra-ui/react";
import { AnimatePresence, isValidMotionProp, motion } from "framer-motion";
import { useState } from "react";

interface PostCardProps {}

const variants = {
  initial: {},
  center: {
    color: "black",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};

const actionVariants = {
  initial: {
    x: -180,
    transition: {
      duration: 0.4,
    },
  },
  center: {
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const reactionVariants = {
  initial: {
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
  center: {
    x: 180,
    transition: {
      duration: 0.4,
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

const Home = () => {
  const [hasSubscribed, setHasSubscribed] = useState<boolean>(false);

  return (
    <Center h="100vh" bgColor="purple.50">
      <AnimatePresence exitBeforeEnter>
        {hasSubscribed ? (
          <Button
            as={motion.button}
            colorScheme="brand"
            variant="ghost"
            backgroundColor="none"
            _hover={{ backgroundColor: "none" }}
            onClick={() => {
              setHasSubscribed(true);
            }}
            w={200}
            overflow="hidden"
          >
            <HStack
              key="action"
              spacing={2}
              as={motion.div}
              initial={{ y: -140 }}
              animate={{
                y: 0,
              }}
            >
              <CheckIcon boxSize={4} />
              <Text>Subscribed</Text>
            </HStack>
          </Button>
        ) : (
          <Button
            as={motion.button}
            colorScheme="brand"
            // overflow="hidden"

            onClick={() => {
              setHasSubscribed(true);
            }}
            w={200}
            overflow="hidden"
          >
            <HStack
              key="reaction"
              as={motion.div}
              initial={{ x: 0 }}
              exit={{
                x: 140,
                transition: { duration: 0.1 },
              }}
            >
              <Text>Subscribe</Text>
              <ArrowForwardIcon boxSize={4} />
            </HStack>{" "}
          </Button>
        )}
      </AnimatePresence>
    </Center>
  );
};

export default Home;
