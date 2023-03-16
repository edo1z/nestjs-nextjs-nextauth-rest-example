import Footer from '../components/footer'
import { Navbar, Button, Link, Text, Container } from "@nextui-org/react";

interface Props {
  children: React.ReactNode
}

export default function Default({ children }: Props) {
  return (
    <>
      <Navbar isBordered={true} variant="sticky">
        <Navbar.Brand>
          <Text b color="black" hideIn="xs">
            HOGE
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor="primary" hideIn="xs" variant="default">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} color="primary" href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      <main>
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
    </>
  )
}