import { MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  chakra,
  Container,
  Icon,
  shouldForwardProp,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import { AnimatePresence, isValidMotionProp, motion } from "framer-motion";
import { FunctionComponent, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

// https://dribbble.com/shots/18227366-Onboarding

const inter = Inter({ subsets: ["latin"] });

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const CircleIcon = (props: any) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);

interface CoverProps {
  index: number;
}

const Cover: FunctionComponent<CoverProps> = ({ index }: CoverProps) => {
  return (
    <ChakraBox
      key={index}
      inital={{ y: 0, opacity: 0 }}
      animate={{
        y: [-20, 0],
        opacity: [0, 1],
      }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 0.4,
      }}
      w="full"
      h="120px"
      rounded="sm"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="purple.400"
    >
      <MoonIcon boxSize={6} color="white" />
    </ChakraBox>
  );
};

interface TitleProps {
  text: string;
}

const Title: FunctionComponent<TitleProps> = ({ text }: TitleProps) => {
  return (
    <Text fontSize="lg" fontWeight={500}>
      {text}
    </Text>
  );
};

interface DescriptionProps {
  text: string;
}

const Description: FunctionComponent<DescriptionProps> = ({
  text,
}: DescriptionProps) => {
  return (
    <Text fontWeight={400} color="gray.600">
      {text}
    </Text>
  );
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
        <Title text="This is it." />
        <Description text="Lets get some things done. Dont forget to follow us on Twitter to stay updated." />
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
        <Title text="Powerful lists" />
        <Description text="Organize your tasks into fully customizable lists with emojis and dynamic colors support." />
      </VStack>
    </VStack>
  );
};

const QuestionBlock = [Question1, Question2];

interface QuestionsProps {}

const Questions: FunctionComponent<QuestionsProps> = () => {
  const [index, setIndex] = useState(0);

  useHotkeys("right", () => setIndex((index) => Math.min(1, index + 1)));
  useHotkeys("left", () => setIndex((index) => Math.max(0, index - 1)));

  // return a chakra ui box with border radius and color

  const CurQuestion = QuestionBlock[index];

  return (
    <Box h="100vh">
      <AnimatePresence exitBeforeEnter>
        <ChakraBox
          w="full"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
          exit={{ x: 200, opacity: 0, transition: { duration: 0.2 } }}
          // @ts-ignore
          transition={{
            duration: 0.2,
          }}
          key={index}
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
