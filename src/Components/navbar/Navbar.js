import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import "./Navbar.css";

const navbar = () => (

    <Navbar id="navbar" sticky="top" expand="lg">
        <Navbar.Brand id="nav-brand" href="#home">CHINESE ENGINEERING SOCIETY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link id="nav-item" className="active" href="#home">Home</Nav.Link>
                <Nav.Link id="nav-item" href="#link">Members</Nav.Link>
                <Nav.Link id="nav-item" href="#link">Gallery</Nav.Link>
                <Nav.Link id="nav-item" href="#home">Events</Nav.Link>
                <Nav.Link id="nav-item" href="#link">About</Nav.Link>
                <Nav.Link id="nav-item" href="#link">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

)

export default navbar;