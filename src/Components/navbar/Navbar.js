import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import {Container} from "react-bootstrap";
import "./Navbar.css";

const navbar = () => (

    <Navbar id="navbar" fixed="top" expand="lg">
        <Container>


        <Navbar.Brand id="nav-brand" href="/">CHINESE ENGINEERING SOCIETY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{float: "right"}}>
            <Nav >
                <Nav.Item style={{float: "right"}}><Nav.Link id="nav-item" className="active" href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item style={{float: "right"}}><Nav.Link id="nav-item" href="/members">Members</Nav.Link></Nav.Item>
                <Nav.Item style={{float: "right"}}><Nav.Link id="nav-item" href="/gallery">Gallery</Nav.Link></Nav.Item>
                <Nav.Item style={{float: "right"}}><Nav.Link id="nav-item" href="/events">Events</Nav.Link></Nav.Item>
                <Nav.Item style={{float: "right"}}><Nav.Link id="nav-item" href="/about">About</Nav.Link></Nav.Item>
                <Nav.Item style={{float: "right"}}><Nav.Link id="nav-item" href="#link">Contact</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>

)

export default navbar;