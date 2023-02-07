import { Box, HStack } from "@chakra-ui/react";
import {
  SandpackCodeEditor,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { FunctionComponent } from "react";
import {
  App as AppFactory,
  Index as IndexFactory,
} from "../sources/chakra-factory.js";

interface SandpackPageProps {}

const SandpackPage: FunctionComponent<SandpackPageProps> = () => {
  return (
    <SandpackProvider
      template="react-ts"
      customSetup={{
        dependencies: {
          "react-icons": "3.11.0",
          "@chakra-ui/react": "latest",
          "@chakra-ui/icons": "latest",
          "@emotion/react": "^11.7.0",
          "@emotion/styled": "^11.6.0",
          "framer-motion": "^4.1.17",
          react: "^18.0.0",
          "react-dom": "^18.0.0",
          "react-scripts": "^4.0.0",
        },
        devDependencies: {
          "@types/react": "^18.0.0",
          "@types/react-dom": "^18.0.0",
          typescript: "^4.0.0",
        },
      }}
      files={{
        "/App.tsx": AppFactory,
        "/index.tsx": IndexFactory,
      }}
    >
      <HStack align="flex-start">
        <Box
          as={SandpackPreview}
          h="100vh"
          sx={{ "& iframe": { flex: "initial", flexGrow: 1 } }}
        />
        <SandpackCodeEditor
          showLineNumbers
          showInlineErrors
          style={{
            height: "100vh",
          }}
        />
      </HStack>
    </SandpackProvider>
  );
};

export default SandpackPage;
