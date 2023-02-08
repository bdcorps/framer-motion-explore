const source = `import { Container, chakra, shouldForwardProp, Center, IconButton} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { SearchIcon } from '@chakra-ui/icons';

export default function App() {
return (
  <Center h="100vh" backgroundColor="purple.50">
  <IconButton
    as={motion.div}
    aria-label="Search database"
    icon={<SearchIcon />}
    backgroundColor="white"
    size="sm"
    initial={{
      borderWidth: "0",
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
    }}
    transition={{ duration: 2 }}
    _hover={{ backgroundColor: "white", cursor: "pointer" }}
  />
</Center>
)
}`

export default source;
