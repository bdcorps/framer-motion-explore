import { Box, Center, HStack, Text } from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";

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

interface SearchProps {}

const Search: FunctionComponent<SearchProps> = () => {
  type StartupType = {
    name: string;
    description: string;
    function: string;
  };

  const startups: StartupType[] = [
    {
      name: "FoodEase",
      description:
        "A meal planning and grocery delivery service that takes the stress out of meal prep.",
      function:
        "Helps users plan meals, generate grocery lists, and get ingredients delivered to their door.",
    },
    {
      name: "Fitbit for Trees",
      description:
        "A smart device that monitors the health and growth of trees in urban environments.",
      function:
        "Helps cities and property owners keep their trees healthy and prevent tree loss due to environmental stressors.",
    },
    {
      name: "SociaLife",
      description:
        "A social networking platform that helps people connect and form meaningful relationships.",
      function:
        "Uses advanced algorithms to match users with compatible people based on shared interests and values.",
    },
    {
      name: "DreamSpace",
      description:
        "A virtual reality platform that allows users to explore and create their own dream worlds.",
      function:
        "Lets users design and experience their own virtual dreamscapes using intuitive creation tools and immersive technology.",
    },
  ];

  const [search, setSearch] = useState("");

  const [selected, setSelected] = useState(0);

  const filteredStartups =
    search === ""
      ? startups
      : startups.filter(
          (startup) =>
            startup.name.toLowerCase().includes(search.toLowerCase()) ||
            startup.description.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <Box h="full">
      {/* <AnimateSharedLayout> */}
      <HStack spacing={10}>
        {filteredStartups.map((startup, i: number) => {
          return (
            <Item
              key={startup.name}
              color={startup.name}
              isSelected={i === selected}
              onClick={() => setSelected(i)}
              title={startup.name}
            />
          );
        })}
      </HStack>
      {/* </AnimateSharedLayout> */}
    </Box>
  );
};

const Item = ({ color, isSelected, onClick, title }: any) => {
  return (
    <Box w="full" h="full">
      <Box backgroundColor="brand.400" rounded="full" px={4} py={0}></Box>
      <Text color="white">la</Text>
    </Box>
  );
};

// const Item = ({ color, isSelected, onClick, title }: any) => {
//   return (
//     <Flex
//       onClick={onClick}
//       color="white"
//       position="relative"
//       top={0}
//       // justifyContent="center"
//     >
//       <Text
//         zIndex={1}
//         color={isSelected ? "white" : "black"}
//         // position="absolute"
//         // top={0}
//         // left={0}
//       >
//         {title}
//       </Text>

//       {isSelected ? (
//         <Box
//           // as={motion.div}
//           // layoutId="outline"
//           // initial={{ backgroundColor: "#FFF", opacity: 1 }}
//           // animate={{ backgroundColor: "#5000FF", opacity: 1 }}
//           // @ts-ignore
//           // transition={{ type: "spring", stiffness: 500, damping: 30 }}
//           backgroundColor="brand.300"
//           rounded="full"
//           color="white"
//           px={16}
//           // position="absolute"
//           // right={0}
//         ></Box>
//       ) : null}
//     </Flex>
//   );
// };

const Home = () => {
  return (
    <Center h="100vh" pt={16} backgroundColor="purple.50">
      <Search />
    </Center>
  );
};

export default Home;
