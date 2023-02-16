const source = `import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";

// https://dribbble.com/shots/19898644--The-Graints

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

interface BlogCardProps {
  title: string;
  summary: string;
}

const BlogCard: FunctionComponent<BlogCardProps> = ({
  title,
  summary,
}: BlogCardProps) => {
  return (
    <VStack
      as={motion.div}
      backgroundColor="white"
      boxShadow="base"
      p={4}
      rounded="md"
      spacing={2}
      cursor="pointer"
      whileHover={{ y: -6 }}
      // @ts-ignore
      transition={{ ease: "easeOut", duration: 0.2 }}
    >
      <Heading fontSize="md" fontWeight={600}>
        {title}
      </Heading>
      <Text color="gray.700" fontSize="sm">
        {summary}
      </Text>
    </VStack>
  );
};

interface StaggeredChildrenProps {}

const StaggeredChildren: FunctionComponent<StaggeredChildrenProps> = () => {
  return (
    <Box h="100vh" position="relative">
      <SimpleGrid gridGap={6} columns={2}>
        <BlogCard
          title="5 Ways Our Project Management Software Can Boost Your Team's
        Productivity"
          summary="Learn how our SaaS app can help your team stay organized, meet deadlines, and collaborate more effectively to get more done in less time."
        />
        <BlogCard
          title="Why Our Customer Support Software is a Game-Changer for Your Business"
          summary="Find out how our SaaS app can help you provide better customer service, resolve issues faster, and build stronger relationships with your clients."
        />
      </SimpleGrid>
    </Box>
  );
};

const Home = () => {
  return (
    <Center bgColor="purple.50" pt={48}>
      <Box w={600} h="100vh" overflow={["hidden", null, "visible"]}>
        <StaggeredChildren />
      </Box>
    </Center>
  );
};

export default Home;`

const animation = {
  name: "Blog Card",
  slug: "blog-card",
  description: "",
  source,
}

export default animation;
