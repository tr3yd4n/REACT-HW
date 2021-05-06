import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavBar = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Link to='/home'>
            <Navbar.Brand>MTG Search</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Link to='/registration'>
                    <Nav.Link href="#link">Sign Up!</Nav.Link>
                </Link>
                <Nav.Link href="#link">Spoilers</Nav.Link>
                <Nav.Link href="#link">Events</Nav.Link>
                <Nav.Link href="#link">More...</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar >

)

export default NavBar