import "@fontsource/inter";

import { Box, ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import Footer from "./LandingFooter";
import { LandingHeader } from "./LandingHeader";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#f0e4ff",
      100: "#cbb2ff",
      200: "#a480ff",
      300: "#7a4dff",
      400: "#641bfe",
      500: "#5a01e5",
      600: "#5200b3",
      700: "#430081",
      800: "#2d004f",
      900: "#14001f",
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

interface LayoutProps {
  backgroundColor?: string;
  children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  backgroundColor = "gray.50",
}: LayoutProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Box backgroundColor={backgroundColor} w="full">
        <Box w="full" textAlign="center">
          <LandingHeader name="SaaSBase" />
          <Container maxW="container.xl">{children}</Container>
          <Footer name="SaaSBase" />
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Layout;
