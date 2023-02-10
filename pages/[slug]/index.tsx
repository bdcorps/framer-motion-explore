import { ArrowBackIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  IconButton,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  SandpackCodeEditor,
  SandpackPreview,
  SandpackProvider,
  UnstyledOpenInCodeSandboxButton,
} from "@codesandbox/sandpack-react";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { Card } from "..";
import LandingLayout from "../../components/Landing/LandingLayout";
import { IndexFile, sources } from "../../sources";

interface AnimationPageProps {}

const AnimationPage: FunctionComponent<AnimationPageProps> = () => {
  const router = useRouter();
  const slug = router.query.slug;

  const animation = sources.find((source: any) => source.slug === slug);

  if (!animation) {
    return <>No animation found</>;
  }
  console.log(animation.source.default);
  return (
    <LandingLayout>
      <VStack w="100%" spacing={6} align="flex-start" mt={20}>
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
            "/App.tsx": animation.source.default,
            "/index.tsx": IndexFile,
          }}
          options={{
            classes: {
              "sp-wrapper": "wrapper",
            },
          }}
        >
          <VStack spacing={4}>
            <HStack w="full" justify="space-between" align="flex-end">
              <VStack spacing={4}>
                <HStack spacing={3}>
                  {["hover", "click", "landing page"].map(
                    (tag: string, i: number) => (
                      <Button
                        key={`tag_${i}`}
                        fontSize="sm"
                        variant="link"
                        fontWeight={400}
                      >
                        {tag}
                      </Button>
                    )
                  )}
                </HStack>

                <HStack spacing={1}>
                  <IconButton
                    icon={<ArrowBackIcon />}
                    rounded="full"
                    aria-label="Back button"
                    variant="ghost"
                    onClick={() => {
                      router.push("/");
                    }}
                  ></IconButton>
                  <Heading>{animation.slug}</Heading>
                </HStack>
              </VStack>

              <HStack spacing={4}>
                <Button
                  colorScheme="brand"
                  size="sm"
                  variant="ghost"
                  rightIcon={<ExternalLinkIcon />}
                  onClick={() => {
                    router.push(router.asPath + "/full");
                  }}
                >
                  Full preview
                </Button>
                {/* <Button
                colorScheme="brand"
                size="sm"
                rightIcon={<ExternalLinkIcon />}
                onClick={() => {
                  // router.push(router.basePath + "/full");
                }}
              >
                Get code
              </Button> */}

                <UnstyledOpenInCodeSandboxButton
                  style={{ fontFamily: "Inter" }}
                >
                  Open in CodeSandbox
                </UnstyledOpenInCodeSandboxButton>
              </HStack>
            </HStack>

            {/* <Heading as="h1">{animation.slug}</Heading> */}

            <HStack align="flex-start" w="full">
              <Box
                as={SandpackPreview}
                h="600px"
                borderWidth="1px"
                borderColor="gray.300"
                className="wrapper"
                flex={1}
              />
              <SandpackCodeEditor
                showLineNumbers
                showInlineErrors
                style={{
                  height: "600px",
                  flex: 1,
                }}
              />
            </HStack>
          </VStack>
        </SandpackProvider>
        <VStack align="flex-start" spacing={12}>
          <VStack align="flex-start" spacing={1}>
            <Text>Perfect for hovering over a card on a landing page</Text>
            <Text>Inspired by: Max blog</Text>
            <Text>Created by: Max blog</Text>
          </VStack>

          <Divider />

          <VStack align="flex-start" spacing={6}>
            <Text fontWeight={500} fontSize="lg">
              You might also like
            </Text>

            <SimpleGrid columns={[1, 3]} w="full" gridGap={10}>
              {Array.from({ length: 6 }, (v, i) => {
                return <Card key={i} slug="" />;
              })}
            </SimpleGrid>
          </VStack>
        </VStack>
      </VStack>
    </LandingLayout>
  );
};

export default AnimationPage;
