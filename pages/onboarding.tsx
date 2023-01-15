import { MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  chakra,
  Container,
  HStack,
  Icon,
  shouldForwardProp,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import { isValidMotionProp, motion } from "framer-motion";
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
    <ChakraBox
      initial={{ x: 0, opacity: 0 }}
      animate={{
        x: [20, 0],
        opacity: [0, 1],
      }}
      exit={{ x: -20, opacity: 0 }}
      key={text}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 0.4,
      }}
    >
      <Text fontSize="lg" fontWeight={500}>
        {text}
      </Text>
    </ChakraBox>
  );
};

interface DescriptionProps {
  text: string;
}

const Description: FunctionComponent<DescriptionProps> = ({
  text,
}: DescriptionProps) => {
  return (
    <ChakraBox
      initial={{ x: 0, opacity: 0 }}
      animate={{
        x: [20, 0],
        opacity: [0, 1],
      }}
      key={text}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 0.4,
      }}
    >
      <Text fontWeight={400} color="gray.600">
        {text}
      </Text>
    </ChakraBox>
  );
};

interface OnboardingProps {}

const Onboarding: FunctionComponent<OnboardingProps> = () => {
  const content = [
    {
      title: "This is it.",
      description:
        "Lets get some things done. Dont forget to follow us on Twitter to stay updated.",
    },
    {
      title: "Powerful lists",
      description:
        "Organize your tasks into fully customizable lists with emojis and dynamic colors support.",
    },
  ];

  const [index, setIndex] = useState(0);

  useHotkeys("right", () => setIndex((index) => Math.min(1, index + 1)));
  useHotkeys("left", () => setIndex((index) => Math.max(0, index - 1)));

  // return a chakra ui box with border radius and color

  return (
    <Box h="100vh" w="full">
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
        <Cover index={index}></Cover>

        <VStack spacing={0} w="full" alignItems="flex-start">
          <Title text={content[index].title} />
          <Description text={content[index].description} />
        </VStack>

        <ChakraBox
          key={index}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [20, 0],
            opacity: [0, 1],
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 0.4,
          }}
          w="full"
        >
          <HStack w="full" spacing={6}>
            <Button colorScheme="purple" size="sm">
              Get Started
            </Button>

            <Button
              size="sm"
              borderColor="gray.200"
              borderWidth="1px"
              backgroundColor="white"
              _hover={{ backgroundColor: "gray.50" }}
            >
              Twitter
            </Button>
          </HStack>
        </ChakraBox>

        <HStack spacing={1} w="full" justify="center">
          <CircleIcon boxSize={2} color="gray.400"></CircleIcon>
          <CircleIcon boxSize={2} color="gray.400"></CircleIcon>
          <CircleIcon boxSize={2} color="gray.400"></CircleIcon>
        </HStack>
      </VStack>
    </Box>
  );
};

const Home = () => {
  return (
    <Box bgColor="purple.50">
      <Container h="100vh" pt={10}>
        <Onboarding />
      </Container>
    </Box>
  );
};

export default Home;
