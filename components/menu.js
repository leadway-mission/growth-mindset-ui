import { Navbar, Container, Nav } from "react-bootstrap"
const Menu = () => {

    return <div>
        <Navbar bg="light" expand="lg">
            {/* <Container> */}
                <Navbar.Brand href="/">Growth MindSet Inquiry</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
    </div>
}

export default Menu