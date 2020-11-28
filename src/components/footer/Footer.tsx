import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Footer = () => {

    return (
        <Navbar className="nav top-shadow mt-5 sticky-bottom" variant="dark">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="#">Terms</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href="#" className="green">About Skilldar</Nav.Link>
                    <Nav.Link href="#" className="yellow">Get Started</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Footer;