import { Container, Nav, Navbar } from "react-bootstrap";

function RenderNavbar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand href="/">Pet Catalog</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/register">Register Pet</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  );
}

export default RenderNavbar;