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
  {
    id: 4,
    title: "Sample Blog Post 4",
    createdAt: "2023-03-17",
  },
  {
    id: 5,
    title: "Sample Blog Post 5",
    createdAt: "2023-03-18",
  },
  {
    id: 6,
    title: "Sample Blog Post 6",
    createdAt: "2023-03-19",
  },
  {
    id: 7,
    title: "Sample Blog Post 7",
    createdAt: "2023-03-20",
  },
  {
    id: 8,
    title: "Sample Blog Post 8",
    createdAt: "2023-03-21",
  },
  {
    id: 9,
    title: "Sample Blog Post 9",
    createdAt: "2023-03-22",
  },
  {
    id: 10,
    title: "Sample Blog Post 10",
    createdAt: "2023-03-23",
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
        w="100%"
      >
        {samplePosts.map((post) => (
          <Box w="100%" key={post.id}>
            <BlogPostCard post={post} />
          </Box>
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
      w="100%"
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
