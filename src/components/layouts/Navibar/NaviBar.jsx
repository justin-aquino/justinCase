import "./Navibar.css"
import { Navbar, Nav } from "react-bootstrap"
import Resume from "./resume.pdf"

const NaviBar = () => {
  return (
    <div id="home">
        <Navbar expand="lg" className="p-2 navibar fixed-top mb-3" variant="dark">
            <Navbar.Brand href="#home"  className="nav-text name font"> <h3> Justin Aquino </h3></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse style={{justifyContent: "end"}} className="navbar-dark">
            <Nav>
            <Nav.Link href="#home" className="nav-text font">Home</Nav.Link>
            <Nav.Link href="#tech-stack" className="nav-text font">Tech Stack</Nav.Link>
            <Nav.Link href="#about" className="nav-text font">About</Nav.Link>
            <Nav.Link href="#project" className="nav-text font">Projects</Nav.Link>
            {/* <Nav.Link href="#project" className="nav-text font">Contact Me</Nav.Link> */}
            <Nav.Link href={`https://docs.google.com/document/d/1fDg42zWla1ZnDQvZk47eDK4J2klVTh0zfT6WYdRGiAI/edit?usp=sharing`} target="_blank" className="nav-text font">View Resume!</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}
export default NaviBar