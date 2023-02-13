import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";

interface PostCardProps {}

const PostCard: FunctionComponent<PostCardProps> = () => {
  return (
    <Box
      as={motion.div}
      rounded="md"
      boxShadow="base"
      backgroundColor="white"
      p={6}
      whileHover={{ y: -4 }}
    >
      <Text color="gray.600">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,
        nisl eget
      </Text>
    </Box>
  );
};

const Home = () => {
  return (
    <Center h="100vh" bgColor="purple.50">
      <SimpleGrid gridGap={6} columns={2} w={400}>
        <PostCard />
        <PostCard />
        <PostCard />
      </SimpleGrid>
    </Center>
  );
};

export default Home;
