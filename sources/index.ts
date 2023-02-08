const animation1 = await import("./chakra-factory");
const animation2 = await import("./chakra-factory-2");

export const sources = [{ slug: "animation1", source: animation1 as unknown }, { slug: "animation2", source: animation2 as unknown }];

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
