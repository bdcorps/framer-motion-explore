import { BoxProps, Center, forwardRef, Text } from "@chakra-ui/react";
import { animate } from "framer-motion";
import { FunctionComponent, useEffect } from "react";

interface NumberCounterProps {
  start: number;
  end: number;
}

const AnimatedText = forwardRef<BoxProps, "p">((props, ref) => (
  <Text px="4" py="5" rounded="sm" shadow="lg" ref={ref} {...props} />
));

const NumberCounter: FunctionComponent<NumberCounterProps> = ({
  start,
  end,
}: NumberCounterProps) => {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(start, end, {
      duration: 1,
      onUpdate(value) {
        node.textContent = value.toFixed(1);
      },
    });

    return () => controls.stop();
  }, [start, end]);

  return <AnimatedText ref={nodeRef} />;
};

const Home = () => {
  return (
    <Center h="100vh" bgColor="purple.50">
      <NumberCounter start={2.4} end={97.3} />
    </Center>
  );
};

export default Home;
