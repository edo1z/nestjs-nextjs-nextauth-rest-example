import {signIn, signOut, useSession} from 'next-auth/react'
import {Heading, Button } from "@chakra-ui/react";
import BlogList from '@/components/blog-list'

export default function Index() {
  const {data:session, status} = useSession();
  const loading = status === 'loading';

  const notSignIn = (
    <>
      <Heading as="h1" fontSize="3rem" marginBottom="1rem">
        Blog Sample
      </Heading>
      <Button colorScheme="teal" onClick={e => signIn()}>
        Sign In
      </Button>
    </>
  );

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && !session && notSignIn}
      {!loading && session && (
        <BlogList />
      )}
    </>
  );
}