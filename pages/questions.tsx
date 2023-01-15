import {
  Box,
  chakra,
  Container,
  shouldForwardProp,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import { AnimatePresence, isValidMotionProp, motion } from "framer-motion";
import { FunctionComponent, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

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
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    };
  },
};

interface Question1Props {}

const Question1: FunctionComponent<Question1Props> = ({}: Question1Props) => {
  return (
    <VStack
      boxShadow="xs"
      rounded="md"
      bg="white"
      borderRadius="5px"
      color="black"
      p={6}
      spacing={4}
      alignItems="flex-start"
    >
      <VStack spacing={0} w="full" alignItems="flex-start">
        <Text fontWeight={500} fontSize="lg">
          This is it.
        </Text>
        <Text>
          Lets get some things done. Dont forget to follow us on Twitter to stay
          updated.
        </Text>
      </VStack>
    </VStack>
  );
};

interface Question2Props {}

const Question2: FunctionComponent<Question2Props> = ({}: Question2Props) => {
  return (
    <VStack
      boxShadow="xs"
      rounded="md"
      bg="white"
      borderRadius="5px"
      color="black"
      p={6}
      spacing={4}
      alignItems="flex-start"
    >
      <VStack spacing={0} w="full" alignItems="flex-start">
        <Text fontWeight={500} fontSize="lg">
          Powerful lists
        </Text>
        <Text>
          Organize your tasks into fully customizable lists with emojis and
          dynamic colors support.
        </Text>
      </VStack>
    </VStack>
  );
};

const QuestionBlock = [Question1, Question2];

interface QuestionsProps {}

const Questions: FunctionComponent<QuestionsProps> = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  useHotkeys("right", () =>
    setPage((page: any) => [Math.min(1, page[0] + 1), -1])
  );
  useHotkeys("left", () =>
    setPage((page: any) => [Math.max(0, page[0] - 1), 1])
  );

  // return a chakra ui box with border radius and color

  const CurQuestion = QuestionBlock[page];

  return (
    <Box h="100vh">
      <AnimatePresence exitBeforeEnter custom={direction}>
        <ChakraBox
          w="full"
          // initial={{ x: -200, opacity: 0 }}
          // animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
          // exit={{ x: 200, opacity: 0, transition: { duration: 0.2 } }}
          // // @ts-ignore
          // transition={{
          //   duration: 0.2,
          // }}
          initial="enter"
          animate="center"
          exit="exit"
          // @ts-ignore
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          custom={direction}
          variants={variants}
          key={page}
        >
          <CurQuestion></CurQuestion>
        </ChakraBox>
      </AnimatePresence>
    </Box>
  );
};

const Home = () => {
  return (
    <Box bgColor="purple.50">
      <Container h="100vh" pt={10}>
        <Questions />
      </Container>
    </Box>
  );
};

export default Home;
