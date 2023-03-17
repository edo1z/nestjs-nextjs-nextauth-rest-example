import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
import {
  Flex,
  Spacer,
  Button,
  IconButton,
  useColorMode,
  Switch,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function NavBar() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  const router = useRouter();
  const signOutBtn = (
    <Button colorScheme="teal" onClick={(e) => signOut()}>
      Sign Out
    </Button>
  );
  const signInBtn = (
    <Button colorScheme="teal" onClick={(e) => signIn()}>
      Sign In
    </Button>
  );
  const authBtn = session ? signOutBtn : signInBtn;

  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue('teal.500', 'teal.800');
  const color = useColorModeValue('white', 'white');

  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      p={4}
      bg={bgColor}
      color={color}
    >
      <Link href="/">BLOGG</Link>
      <Spacer />
      <IconButton
        aria-label="Toggle color mode"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        bg={bgColor}
        _hover={{ bg: 'teal.400' }}
        onClick={toggleColorMode}
        variant="outline"
      />
      {!loading && authBtn}
    </Flex>
  );
}
