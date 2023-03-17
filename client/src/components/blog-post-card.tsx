import { Box, Heading, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { BlogPostProps } from '@/types/blog';

export const BlogPostCard: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <Box
      borderWidth={1}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
    >
      <NextLink href={`/blog/${post.id}`} passHref>
        <Link _hover={{ textDecoration: 'none' }}>
          <Heading as="h2" size="md" mb={3}>
            {post.title}
          </Heading>
        </Link>
      </NextLink>
      <Box fontSize="sm" color="gray.500">
        {post.createdAt}
      </Box>
    </Box>
  );
};
