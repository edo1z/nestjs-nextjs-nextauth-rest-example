import { signIn, useSession } from 'next-auth/react';
import { Container, Heading, Button, VStack, Box } from '@chakra-ui/react';
import BlogList from '@/components/blog-list';
import { getLatestPosts } from '@/api/latest-posts';
import { NextApiRequest, NextApiResponse } from 'next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
import { Post } from '@/types/blog';

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
    <>
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
          <Button colorScheme="teal" onClick={(e) => signIn()}>
            Sign In
          </Button>
        </VStack>
      </Container>
    </>
  );

  const latestBlogList = (
    <>
      <Box mt={10} mb={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Latest Blog Posts
        </Heading>
      </Box>
      <BlogList posts={latestPosts} />
    </>
  );

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && !session && notSignIn}
      {!loading && session && latestBlogList}
    </>
  );
}
