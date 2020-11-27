import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHashtag, faSignInAlt } from '@fortawesome/free-solid-svg-icons'


function TopBar() {
    return (
        <Navbar className="nav bottom-shadow mb-5" variant="dark">
            <Navbar.Brand href="#"><FontAwesomeIcon icon={faHashtag} size="lg" color="red" /> Browse Skills</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#"><FontAwesomeIcon icon={faInstagram} size="lg" /></Nav.Link>
                    <Nav.Link href="#"><FontAwesomeIcon icon={faTwitter} size="lg" /></Nav.Link>
                    <Nav.Link href="#" className="blue">Login <FontAwesomeIcon icon={faSignInAlt} size="lg" /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default TopBar;
