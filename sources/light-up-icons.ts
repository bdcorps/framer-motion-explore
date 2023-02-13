const source = `import {
  Container,
  chakra,
  shouldForwardProp,
  Center,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { SearchIcon, AtSignIcon, EmailIcon, ChatIcon } from "@chakra-ui/icons";

export default function App() {
  return (
    <Center h="100vh" backgroundColor="purple.50">
      <SimpleGrid columns={2} gridGap={6}>
        <LightupIcon icon={<SearchIcon />} />
        <LightupIcon icon={<AtSignIcon />} />
        <LightupIcon icon={<EmailIcon />} />
        <LightupIcon icon={<ChatIcon />} />
      </SimpleGrid>
    </Center>
  );
}

const LightupIcon = ({ icon }) => {
  return (
    <IconButton
      as={motion.div}
      aria-label="Icon"
      icon={icon}
      backgroundColor="white"
      size="md"
      initial={{
        borderWidth: 0,
        borderColor: "#FFF",
        boxShadow: "none",
        scale: 1,
      }}
      whileHover={{
        borderWidth: "2px",
        borderColor: "#5000FF",
        borderRadius: "6px",
        boxShadow: "0 2px 40px -4px rgb(80 0 255 / 0.4)",
        transition: { duration: 0.03 },
        scale: 0.97,
        color: "#5000FF",
      }}
      transition={{ duration: 2 }}
      _hover={{ backgroundColor: "white", cursor: "pointer" }}
    />
  );
};`

const animation = {
  name: "Light up icons",
  slug: "light-up-icons",
  description: "Fancy icons that light up with a glow when hovered over. Great for a special action you want the user to be excited to perform.",
  source,
}

export default animation;
