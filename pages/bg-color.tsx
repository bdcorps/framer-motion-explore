import { Center } from "@chakra-ui/react";
import { animate, motion, useMotionValue } from "framer-motion";
import { FunctionComponent, useEffect } from "react";

interface NumberCounterProps {}

const NumberCounter: FunctionComponent<NumberCounterProps> = () => {
  const x = useMotionValue("#fff");
  useEffect(() => {
    animate(x, "#000", {
      duration: 2,
      onUpdate: (latest) => console.log(latest),
    });
  });

  return (
    <motion.div
      style={{ width: "100vw", height: "100vh" }}
      animate={{
        backgroundColor: ["#E0BBE4", "#957DAD", "#D291BC"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    ></motion.div>
  );
};

const Home = () => {
  return (
    <Center h="100vh" bgColor="purple.50">
      <NumberCounter />
    </Center>
  );
};

export default Home;
