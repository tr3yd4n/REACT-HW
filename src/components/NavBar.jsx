import { Navbar, Nav } from 'react-bootstrap'


const NavBar = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>MTG Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#link">Spoilers</Nav.Link>
                <Nav.Link href="#link">Events</Nav.Link>
                <Nav.Link href="#link">More...</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

)

export default NavBar