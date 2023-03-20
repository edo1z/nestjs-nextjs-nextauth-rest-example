import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Divider,
  Badge,
  HStack,
  VStack,
  Avatar,
} from '@chakra-ui/react';
import { BlogPostProps } from '../types/blog';

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const { title, content, createdAt, updatedAt, category, author, authorName } =
    post;

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
        <VStack spacing={4} mt={4} alignItems="center">
          <HStack spacing={3}>
            <Text fontSize="md" color="white">
              {createdAt}
            </Text>
            <Divider orientation="vertical" borderColor="white" />
            <Text fontSize="md" color="white">
              Updated: {updatedAt}
            </Text>
          </HStack>
          <HStack spacing={3}>
            <Badge fontSize="md" colorScheme="purple">
              {category}
            </Badge>
            <HStack spacing={1}>
              <Avatar size="xs" name={author} />
              <Text fontSize="md" color="white">
                Author: {authorName}
              </Text>
            </HStack>
          </HStack>
        </VStack>
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
