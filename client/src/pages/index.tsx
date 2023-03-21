import { Flex, Container, Heading, Button, VStack } from '@chakra-ui/react';
import { signIn, useSession } from 'next-auth/react';
import BlogList from '@/components/blog-list';
import { getLatestPosts } from '@/api/latest-posts';
import { NextApiRequest, NextApiResponse } from 'next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
import { Post } from '@/types/blog';
import Router from 'next/router';

export async function getServerSideProps({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  console.log('getServerSideProps!!!');
  const session = await getServerSession(req, res, authOptions);
  const latestPosts = session ? await getLatestPosts(req) : [];
  return {
    props: { latestPosts },
  };
}

export default function Index({ latestPosts }: { latestPosts: Post[] }) {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  const notSignIn = (
    <Container
      pt={10}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <VStack spacing={4} alignItems="center" mb={35}>
        <Heading as="h1" fontSize="3rem" mb={10}>
          Blog Sample
        </Heading>
        <Button colorScheme="teal" onClick={() => signIn()}>
          Sign In
        </Button>
      </VStack>
    </Container>
  );

  const latestBlogList = <BlogList posts={latestPosts} />;

  const newPostButton = (
    <Button
      w="200px"
      mx="auto"
      my={5}
      colorScheme="green"
      onClick={() => Router.push('/post/new')}
    >
      New Post
    </Button>
  );

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && !session && notSignIn}
      {!loading && session && (
        <>
          <Flex justifyContent="flex-end">{newPostButton}</Flex>
          {latestBlogList}
        </>
      )}
    </>
  );
}
