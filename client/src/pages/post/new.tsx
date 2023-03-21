import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
} from '@chakra-ui/react';
import Router from 'next/router';

export default function NewPost() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          category,
          content,
        }),
      });

      if (!res.ok) {
        throw new Error('投稿の作成に失敗しました');
      }

      const newPost = await res.json();
      Router.push(`/post/${newPost.id}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(session);
    if (!loading && !session) {
      Router.push('/');
    }
  }, [loading, session]);

  return (
    <Container py={10}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center">
        Create New Post
      </Heading>
      <Stack width={'100%'} maxWidth={'700px'} mx="auto" spacing={4}>
        <form onSubmit={handleSubmit}>
          <FormControl id="title">
            <FormLabel>タイトル</FormLabel>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
          <FormControl id="category">
            <FormLabel>カテゴリ</FormLabel>
            <Input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </FormControl>
          <FormControl id="content">
            <FormLabel>コンテンツ</FormLabel>
            <Textarea
              minH="200px"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </FormControl>
          <Button
            colorScheme="green"
            mt={8}
            isLoading={isLoading}
            type="submit"
          >
            作成する
          </Button>
        </form>
      </Stack>
    </Container>
  );
}
