import {
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

interface CardProps {}

const Card: FunctionComponent<CardProps> = () => {
  const router = useRouter();
  return (
    <VStack
      // borderWidth="1px"
      backgroundColor="white"
      // borderColor="gray.400"
      p={0}
      align="flex-start"
      cursor="pointer"
      onClick={() => {
        router.push("/animation");
      }}
    >
      <video
        autoPlay
        loop
        muted
        poster="https://cdn.godly.website/1b1d40c5-5a4d-48ae-a092-041f198c9ca1.jpg?width=576&amp;quality=70"
        // style={{ filter: "saturate(0)" }}
      >
        <source
          src="https://video.godly.website/video/upload/w_576/q_70/recordings/akk6f2j7r8qyqzqkpb0q.webm"
          type="video/webm"
        />
      </video>

      <Text fontSize="sm">EPIC Agency</Text>
    </VStack>
  );
};

interface MainPageProps {}

const MainPage: FunctionComponent<MainPageProps> = () => {
  return (
    <Container maxW="container.xl">
      <VStack>
        <Center textAlign="center" h="60vh" maxW={500}>
          <Heading>
            Astronomically good framer animations from all over the web (/w
            code)
          </Heading>
        </Center>
        <SimpleGrid columns={3} w="full" gridGap={10}>
          {Array.from({ length: 10 }, (v, i) => {
            return <Card key={i} />;
          })}
          )
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default MainPage;
