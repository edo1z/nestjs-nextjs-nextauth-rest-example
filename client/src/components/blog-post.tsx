import { Box, Flex, Heading, Text, Image, Divider } from '@chakra-ui/react';
import { BlogPostProps } from '../types/blog';

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const { title, content, createdAt, updatedAt, category, author } = post;

  return (
    <Box>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        bgGradient="linear(to-b, teal.500, teal.300)"
        py={16}
        px={8}
      >
        <Heading as="h1" fontSize="4xl" color="white" textAlign="center">
          {title}
        </Heading>
        <Text fontSize="md" color="white" mt={4}>
          {createdAt} - Updated: {updatedAt} - Category: {category} - Author:{' '}
          {author}
        </Text>
      </Flex>
      <Box p={8}>
        <Text fontSize="lg" lineHeight="tall">
          {content}
        </Text>
        {/* Add images, blockquotes, and other content elements as needed */}
      </Box>
    </Box>
  );
};
