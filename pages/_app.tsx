import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";

import "../globals.css";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
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
};

const theme = extendTheme({ colors });

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
