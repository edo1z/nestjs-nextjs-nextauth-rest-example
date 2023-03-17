import {
  Box,
  Flex,
  VStack,
  HStack,
  Grid,
  Text,
  Link,
  IconButton,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  const bg = useColorModeValue("gray.100", "gray.800");
  const color = useColorModeValue("gray.600", "gray.400");

  return (
    <Box as="footer" bg={bg} py={6} px={{ base: 4, md: 8 }} mt={10}>
      <Flex direction={{ base: "column", md: "row" }} alignItems="center">
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={4}>
          <Link href="/contact" fontWeight="normal">
            お問合せ
          </Link>
          <Link href="/terms" fontWeight="normal">
            利用規約
          </Link>
          <Link href="/privacy-policy" fontWeight="normal">
            プライバシーポリシー
          </Link>
          <Link href="/trade-law" fontWeight="normal">
            特定商取引法に関する表記
          </Link>
        </Grid>
        <Spacer />
        <VStack mt={{ base: 4, md: 0 }} spacing={4} alignItems="center">
          <IconButton
            as={Link}
            href="https://twitter.com/web3ten0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            icon={<FaTwitter />}
            colorScheme="twitter"
          />
          <Text color={color} fontSize="sm">
            &copy; {new Date().getFullYear()} web3ten0. All rights reserved.
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
}
