import {
  Box,
  Heading,
  VStack,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

import { samplePosts } from '@/mock-data/sample-posts';
import { BlogPostCard } from './blog-post-card';

export default function BlogList() {
  const bg = useColorModeValue('gray.50', 'gray.700');

  return (
    <VStack
      w="100%"
      py={10}
      px={{ base: 5, md: 20 }}
      spacing={5}
      align="start"
      bg={bg}
    >
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
