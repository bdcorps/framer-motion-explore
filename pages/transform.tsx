import { Box, chakra, Container, shouldForwardProp } from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import {
  isValidMotionProp,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
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
  enter: { opacity: 0, y: 200 },
  center: {
    transform: "scale(0.75) rotateY(-30deg) rotateX(45deg) translateZ(4.5rem)",
    transformOrigin: "50% 100%",
    transformStyle: "preserve-3d",
    boxShadow: "1rem 1rem 2rem rgba(0, 0, 0, 0.25)",
    transition: "0.6s ease transform",
    background: "#fbe806",
  },
};

const childVariants = {
  enter: { opacity: 0, x: -200 },
  center: { opacity: 1, x: 0 },
};

interface TransformProps {}

const Transform: FunctionComponent<TransformProps> = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <Box h="100vh">
      <ChakraBox
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        bg="purple.500"
        w="100px"
        h="100px"
      ></ChakraBox>

      {/*   
      <ChakraBox
        w="full"
        initial="enter"
        animate="center"
        // @ts-ignore
        transition={{
          duration: 0.8,
          when: "beforeChildren",
          delayChildren: 0.3,
          staggerChildren: 0.8,
        }}
        variants={variants}
      >
        <Grid
          as="motion.div"
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <ChakraBox
            variants={childVariants}
            transition={{
              duration: 0.4,
            }}
          >
            <GridItem rowSpan={2} colSpan={1} bg="purple.600" />
            <GridItem colSpan={2} bg="purple.300" />
            <GridItem colSpan={2} bg="purple.500" />
            <GridItem colSpan={4} bg="purple.400" />
          </ChakraBox>{" "}
        </Grid>
      </ChakraBox> */}
    </Box>
  );
};

const Home = () => {
  return (
    <Box bgColor="purple.50">
      <Container h="100vh" pt={10}>
        <Transform />
      </Container>
    </Box>
  );
};

export default Home;
