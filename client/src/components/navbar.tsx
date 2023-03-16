import { Flex, Spacer, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import {signIn, signOut, useSession} from 'next-auth/react'

export default function NavBar() {
  const {data:session, status} = useSession();
  const loading = status === 'loading';

  const router = useRouter();
  const signOutBtn = (
    <Button colorScheme="teal" onClick={e => signOut()}>
      Sign Out
    </Button>
  );
  const signInBtn = (
    <Button colorScheme="teal" onClick={e => signIn()}>
      Sign In
    </Button>
  );
  const authBtn = session ? signOutBtn : signInBtn;

  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      p={4}
      bg="teal.500"
      color="white"
    >
      <Link href="/">HOGE</Link>
      <Spacer />
      {!loading && authBtn}
    </Flex>
  );
}