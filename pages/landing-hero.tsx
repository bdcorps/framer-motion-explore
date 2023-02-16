import {
  Box,
  Center,
  chakra,
  Heading,
  HStack,
  shouldForwardProp,
  Text,
} from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import { AnimatePresence, isValidMotionProp, motion } from "framer-motion";
import { FunctionComponent, useState } from "react";

// https://dribbble.com/shots/19898644--The-Graints

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
  enter: { opacity: 0, y: 100 },
  center: { opacity: 1, y: 0 },
};

interface TestimonialProps {
  top: number;
  right: number;
  emoji: string;
}

const Testimonial: FunctionComponent<TestimonialProps> = ({
  top,
  right,
  emoji,
}: TestimonialProps) => {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <ChakraBox
            position="absolute"
            top={top}
            right={right}
            variants={childVariants}
            bg="whiteAlpha.900"
            w={72}
            p={3}
            rounded="xl"
            boxShadow="sm"
            backdropFilter="blur(4px)"
            whileHover={{ scale: 1.02 }}
            cursor="pointer"
            onClick={() => setVisible(!visible)}
            exit={{ opacity: 0 }}
          >
            <HStack spacing={3}>
              <Text
                as={motion.div}
                fontSize={36}
                exit={{
                  y: -48,
                  opacity: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                {emoji}
              </Text>
              <Text fontSize="sm">
                This app improves efficiency for freelancers. A game-changer.
              </Text>
            </HStack>
          </ChakraBox>
        )}
      </AnimatePresence>
    </>
  );
};

interface StaggeredChildrenProps {}

const StaggeredChildren: FunctionComponent<StaggeredChildrenProps> = () => {
  return (
    <Box h="100vh" position="relative">
      <Heading
        fontSize={["5xl", "7xl"]}
        textAlign="center"
        position="absolute"
        top={0}
      >
        Create your own unique design with Graints
      </Heading>
      <Box
        // position="absolute"
        // top={0}
        position="relative"
        as={motion.div}
        variants={variants}
        initial="enter"
        animate="center"
        // bg="purple.500"
        p={10}
        rounded="md"
      >
        {[
          { top: 230, right: 100, emoji: "🥳" },
          { top: 50, right: 400, emoji: "🥳" },
          { top: 100, right: 0, emoji: "🤯" },
          { top: 160, right: -200, emoji: "🤑" },
        ].map(({ top, right, emoji }, i: number) => (
          <Testimonial top={top} right={right} emoji={emoji} key={i} />
        ))}
      </Box>
    </Box>
  );
};

const Home = () => {
  return (
    <Center bgColor="purple.50">
      <Box w={600} h="100vh" pt={10} overflow={["hidden", null, "visible"]}>
        <StaggeredChildren />
      </Box>
    </Center>
  );
};

export default Home;
