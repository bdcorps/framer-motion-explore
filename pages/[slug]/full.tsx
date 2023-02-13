import { Box } from "@chakra-ui/react";
import { SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { getPostBySlug, IndexFile } from "../../sources";

interface FullAnimationProps {}

const FullAnimation: FunctionComponent<FullAnimationProps> = () => {
  const router = useRouter();
  const slug: string = String(router.query.slug);

  const animation = getPostBySlug(slug);
  if (!animation) {
    return <>No animation found</>;
  }

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
          "react-hotkeys-hook": "^4.3.5",
        },
        devDependencies: {
          "@types/react": "^18.0.0",
          "@types/react-dom": "^18.0.0",
          typescript: "^4.0.0",
        },
      }}
      files={{
        "/App.tsx": animation!.source,
        "/index.tsx": IndexFile,
      }}
      options={{
        classes: {
          "sp-wrapper": "wrapper",
        },
      }}
    >
      <Box
        as={SandpackPreview}
        h="100vh"
        borderWidth="1px"
        borderColor="gray.300"
        className="wrapper"
      />
    </SandpackProvider>
  );
};

export default FullAnimation;
