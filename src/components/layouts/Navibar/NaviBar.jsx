import "./Navibar.css"
import { Navbar, Nav } from "react-bootstrap"


const NaviBar = () => {
  return (
    <div id="home">
        <Navbar expand="lg" className="p-3 navibar fixed-top mb-5" variant="dark">
            <Navbar.Brand href="#home"  className="nav-text name font"> Justin Aquino </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse style={{justifyContent: "end"}} className="navbar-dark">
            <Nav>
            <Nav.Link href="#home" className="nav-text font">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-text font">About</Nav.Link>
            <Nav.Link href="#tech-stack" className="nav-text font">Tech Stack</Nav.Link>
            <Nav.Link href="#project" className="nav-text font">Projects</Nav.Link>
            <Nav.Link href="#project" className="nav-text font">Contact Me</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default NaviBar