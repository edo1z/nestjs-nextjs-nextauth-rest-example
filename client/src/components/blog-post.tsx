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
  Container,
  Button,
} from '@chakra-ui/react';
import { BlogPostProps } from '../types/blog';

export const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const {
    id,
    title,
    content,
    createdAt,
    updatedAt,
    category,
    author,
    authorName,
  } = post;

  const formatDate = (dateString: string): string =>
    new Date(dateString).toLocaleString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

  const handleEdit = () => {
    // 編集処理を実行するコードをここに記述する
  };

  const handleDelete = () => {
    // 削除処理を実行するコードをここに記述する
  };

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
          <HStack spacing={2}>
            <Text fontSize="md" color="white">
              Posted: {formatDate(createdAt)}
            </Text>
            <Text fontSize="md" color="white">
              <br />
            </Text>
            <Text fontSize="md" color="white">
              Updated: {formatDate(updatedAt)}
            </Text>
          </HStack>
          <HStack spacing={3}>
            <Badge fontSize="md" colorScheme="purple">
              {category}
            </Badge>
            <HStack spacing={1}>
              <Avatar size="xs" name={authorName} />
              <Text fontSize="md" color="white">
                {authorName}
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </Flex>
      <Container maxW="container.lg" mt={8} position="relative">
        <HStack mb={8} mr={8}>
          <Button colorScheme="teal" onClick={handleEdit}>
            編集
          </Button>
          <Button colorScheme="red" onClick={handleDelete}>
            削除
          </Button>
        </HStack>
        <Box textAlign="center">
          <Text fontSize="lg" lineHeight="tall">
            {content}
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
