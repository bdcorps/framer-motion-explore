import animation3 from "./animated-search";
import animation2 from "./light-up-icons";
import animation1 from "./saas-onboarding-modal";
import skiff from "./skiff";

export const sources = [animation1, animation2, animation3, skiff];

export const getPostBySlug = (slug: string) => {
  return sources.find((source) => source.slug === slug);
};


export const IndexFile = `import * as React from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);`
