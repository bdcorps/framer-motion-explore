import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  chakra,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
  Spacer,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useScrollPosition } from "/hooks/useScrollPosition";

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Explore", link: "/explore" },
];

const DesktopSidebarContents = ({ name }: any) => {
  const router = useRouter();
  const scrollPosition = useScrollPosition();

  return (
    <Box
      w="full"
      position="fixed"
      top={0}
      background={`${scrollPosition > 0 ? "whiteAlpha.800" : "transparent"}`}
      zIndex={1}
      boxShadow={`${scrollPosition > 0 ? "xs" : "none"}`}
      transition="all 0.3s ease-in-out"
      backdropFilter="blur(4px)"
    >
      <Container maxW={["full", "container.xl"]} p={0}>
        <Stack
          justify="space-between"
          p={[0, 4]}
          w="full"
          direction={["column", "row"]}
        >
          <Box display={{ base: "none", md: "flex" }}>
            <Link fontSize="md" fontWeight={500} href="/">
              {name}
            </Link>
          </Box>
          <Spacer />
          <Stack
            align="flex-end"
            spacing={[4, 10]}
            direction={["column", "row"]}
          >
            {navLinks.map((navLink: any, i: number) => {
              return (
                <Link
                  href={navLink.link}
                  key={`navlink_${i}`}
                  fontWeight={500}
                  variant="ghost"
                  fontSize={["lg", "md"]}
                  w="full"
                >
                  {navLink.name}
                </Link>
              );
            })}
          </Stack>
          {/* <Spacer />
        <Button
          colorScheme="brand"
          onClick={() => {
            router.push("https://app.launchman.com");
          }}
        >
          Dashboard
        </Button> */}
        </Stack>
      </Container>
    </Box>
  );
};
const MobileSidebar = ({ name }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex w="full" align="center">
        <Heading fontSize="xl">{name}</Heading>
        <Spacer />
        <IconButton
          aria-label="Open Nav menu"
          size="md"
          icon={<HamburgerIcon />}
          onClick={onOpen}
        />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton top={3.5} color="black" />
            <DrawerHeader color="black" fontSize={["xl", "md"]}>
              {name}
            </DrawerHeader>

            <DrawerBody>
              <DesktopSidebarContents />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

interface SidebarProps {
  name: string;
}

const Sidebar = ({ name }: SidebarProps) => {
  return (
    <chakra.header id="header">
      <Box display={{ base: "flex", md: "none" }} p={4}>
        <MobileSidebar name={name} />
      </Box>

      <Box display={{ base: "none", md: "flex" }}>
        <DesktopSidebarContents name={name} />
      </Box>
    </chakra.header>
  );
};

interface DrawerHomeProps {
  name: string;
}

export const LandingHeader = ({ name }: DrawerHomeProps) => {
  return (
    <Box w="full">
      <Sidebar name={name} />
    </Box>
  );
};
