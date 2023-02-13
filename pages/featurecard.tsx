import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Center, IconButton, SimpleGrid, Text } from "@chakra-ui/react";
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
      position="relative"
    >
      <IconButton
        icon={<ArrowForwardIcon transform="rotate(-45deg)" />}
        rounded="full"
        position="absolute"
        top={1}
        right={1}
        aria-label="Go to post"
      />

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
      <SimpleGrid gridGap={6} columns={1} w={600}>
        <PostCard />
        <PostCard />
        <PostCard />
      </SimpleGrid>
    </Center>
  );
};

export default Home;
