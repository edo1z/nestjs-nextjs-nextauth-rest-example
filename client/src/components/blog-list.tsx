import {
  Box,
  Heading,
  VStack,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

interface Post {
  id: number;
  title: string;
  createdAt: string;
}

const samplePosts: Post[] = [
  {
    id: 1,
    title: "Sample Blog Post 1",
    createdAt: "2023-03-14",
  },
  {
    id: 2,
    title: "Sample Blog Post 2",
    createdAt: "2023-03-15",
  },
  {
    id: 3,
    title: "Sample Blog Post 3",
    createdAt: "2023-03-16",
  },
];

export default function BlogList() {
  const bg = useColorModeValue("gray.50", "gray.700");

  return (
    <VStack
      w="100%"
      py={10}
      px={{ base: 5, md: 20 }}
      spacing={5}
      align="start"
      bg={bg}
    >
      <Heading as="h1" size="2xl" alignSelf="center">
        Saved Blog Posts
      </Heading>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 5, lg: 8 }}
      >
        {samplePosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

interface BlogPostCardProps {
  post: Post;
}

function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Box
      borderWidth={1}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
    >
      <Heading as="h2" size="md" mb={3}>
        {post.title}
      </Heading>
      <Box fontSize="sm" color="gray.500">
        {post.createdAt}
      </Box>
    </Box>
  );
}

