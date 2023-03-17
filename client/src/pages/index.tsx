import { signIn, useSession } from 'next-auth/react';
import { Container, Heading, Button, VStack, Box } from '@chakra-ui/react';
import BlogList from '@/components/blog-list';

export default function Index() {
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
      <BlogList />
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
