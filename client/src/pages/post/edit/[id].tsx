import { useState, useEffect } from 'react';
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
import { getPostById } from '@/api/get-post';
import { updatePostById } from '@/api/update-post';
import Router from 'next/router';

export default function EditPostPage({ id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const post = await getPostById(id);
      setTitle(post.title);
      setContent(post.content);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await updatePostById({ title, content, id });
      Router.push(`/post/${id}`);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <Container py={10}>
      <Heading as="h1" size="2xl" mb={6} textAlign="center">
        Edit Post
      </Heading>
      <Stack width={'100%'} maxWidth={'700px'} mx="auto" spacing={4}>
        <form onSubmit={handleUpdate}>
          <FormControl id="title">
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
          <FormControl id="content">
            <FormLabel>Content</FormLabel>
            <Textarea
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
            Update Post
          </Button>
        </form>
      </Stack>
    </Container>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.params.id,
    },
  };
}
