import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import {Container} from "react-bootstrap";
import "./Navbar.css";

const navbar = () => (

    <Navbar id="navbar" fixed="top" expand="lg">
        <Container>


        <Navbar.Brand id="nav-brand" href="/">CHINESE ENGINEERING SOCIETY</Navbar.Brand>
        <Navbar.Brand id="nav-brand-small" href="/">C E S</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{float: "right"}}>
            <Nav >
                <Nav.Item style={{float: "right"}}><Nav.Link activeclassName="active" href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item style={{float: "right"}}><Nav.Link activeClassName="active" href="/members">Members</Nav.Link></Nav.Item>
                <Nav.Item style={{float: "right"}}><Nav.Link activeClassName="active" href="/gallery">Gallery</Nav.Link></Nav.Item>
                <Nav.Item style={{float: "right"}}><Nav.Link activeClassName="active" href="/events">Events</Nav.Link></Nav.Item>
                <Nav.Item style={{float: "right"}}><Nav.Link activeClassName="active" href="/about">About</Nav.Link></Nav.Item>
                <Nav.Item style={{float: "right"}}><Nav.Link activeClassName="active" href="#link">Contact</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>

)
export default navbar;

