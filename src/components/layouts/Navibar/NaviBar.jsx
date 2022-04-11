import "./Navibar.css"
import { Navbar, Nav } from "react-bootstrap"


const NaviBar = () => {
  return (
    <div id="home">
        <Navbar expand="md" className="p-3 navibar" variant="dark">
            <Navbar.Brand href="#home"  className="nav-text name"> Justin Aquino </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse style={{justifyContent: "end"}} className="navbar-dark">
            <Nav>
            <Nav.Link href="#home" className="nav-text">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-text">About</Nav.Link>
            <Nav.Link href="#tech-stack" className="nav-text">Tech Stack</Nav.Link>
            <Nav.Link href="#project" className="nav-text">Projects</Nav.Link>
            <Nav.Link href="#project" className="nav-text">Contact Me</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>

    </div>
  )
}

export default NaviBar