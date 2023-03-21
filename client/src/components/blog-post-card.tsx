import { Box, Flex, Heading, IconButton, Link } from '@chakra-ui/react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
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
      <NextLink href={`/post/${post.id}`} passHref>
        <Link>
          <Heading as="h2" size="md" mb={3}>
            {post.title}
          </Heading>
        </Link>
      </NextLink>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        fontSize="sm"
        color="gray.500"
      >
        <Box>{post.createdAt}</Box>
        <Box>
          <IconButton
            size="sm"
            mr={2}
            aria-label="edit"
            icon={<FaEdit />}
            onClick={() => console.log('edit post:', post.id)}
          />
          <IconButton
            size="sm"
            aria-label="delete"
            icon={<FaTrashAlt />}
            onClick={() => console.log('delete post:', post.id)}
          />
        </Box>
      </Flex>
    </Box>
  );
};
