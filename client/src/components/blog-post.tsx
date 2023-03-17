import { Box, Heading, Text } from '@chakra-ui/react';

interface BlogPostProps {
  title: string;
  content: string;
  createdAt: string;
}

export const BlogPost: React.FC<BlogPostProps> = ({
  title,
  content,
  createdAt,
}) => {
  return (
    <Box>
      <Heading as="h1" fontSize="3xl" mb={4}>
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.500" mb={6}>
        {createdAt}
      </Text>
      <Text>{content}</Text>
    </Box>
  );
};
