import { AspectRatio, Box, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

interface PostCardProps {
  slug: string;
  name: string;
}

export const PostCard: FunctionComponent<PostCardProps> = ({
  slug,
  name,
}: any) => {
  const router = useRouter();

  return (
    <VStack
      w="full"
      align="flex-start"
      cursor="pointer"
      onClick={() => {
        router.push(`/${slug}`);
      }}
    >
      <AspectRatio ratio={1} maxW={700} w="full">
        <Box
          borderWidth={1}
          borderColor="gray.200"
          rounded="lg"
          filter="saturate(0)"
          _hover={{ filter: "saturate(1)", borderColor: "brand.100" }}
          transition="all 0.2s ease-in-out"
          as="video"
          autoPlay
          loop
          muted
          poster="/animation1.png"
        >
          <source src={`/${slug}.mp4`} type="video/mp4" />
        </Box>
      </AspectRatio>

      <Text fontSize="sm" fontWeight={500}>
        {name}
      </Text>
    </VStack>
  );
};
