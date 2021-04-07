import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import {Route, Link} from "react-router-dom";
import "./Navbar.css";

const navbar = () => (

    <Navbar id="navbar" sticky="top" expand="lg">
        <Navbar.Brand id="nav-brand" href="/">CHINESE ENGINEERING SOCIETY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link id="nav-item" className="active" href="/">Home</Nav.Link>
                <Nav.Link id="nav-item" href="/members">Members</Nav.Link>
                <Nav.Link id="nav-item" href="/gallery">Gallery</Nav.Link>
                <Nav.Link id="nav-item" href="#home">Events</Nav.Link>
                <Nav.Link id="nav-item" href="/about">About</Nav.Link>
                <Nav.Link id="nav-item" href="#link">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

)

export default navbar;