const source = `import {
  Button,
  Center,
  chakra,
  shouldForwardProp,
  Text,
  VStack,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { FunctionComponent } from "react";

interface MetricCardProps {}

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

const MetricCard: FunctionComponent<MetricCardProps> = () => {
  return (
    <ChakraBox
      // as={motion.div}
      rounded="md"
      boxShadow="base"
      p={4}
      variants={variants}
      cursor="pointer"
      initial="initial"
      whileHover="center"
      // @ts-ignore
      transition={{ duration: 0.01 }}
      overflow="hidden"
      position="relative"
      backgroundColor="purple.500"
      w={400}
    >
      <VStack spacing={1} align="flex-start">
        <Text
          color="whiteAlpha.800"
          fontWeight={600}
          textTransform="uppercase"
          fontSize="xs"
        >
          Total Audience
        </Text>
        <Text
          as={motion.p}
          color="white"
          fontSize="2xl"
          variants={hideMetricsVariants}
        >
          2.4K members
        </Text>
      </VStack>
      <Button
        as={motion.button}
        variant="link"
        color="white"
        variants={moreInfoVariants}
        position="absolute"
        bottom={6}
        size="md"
      >
        View account details →
      </Button>
    </ChakraBox>
  );
};

const Home = () => {
  return (
    <Center h="100vh" bgColor="purple.50">
      <VStack spacing={4}>
        <MetricCard />
        <MetricCard />
        <MetricCard />
      </VStack>
    </Center>
  );
};

export default Home;`

const animation = {
  name: "Metrics Card",
  slug: "metrics-card",
  description: "",
  source,
}

export default animation;
