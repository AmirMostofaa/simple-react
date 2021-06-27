import React from 'react';
import './Header.css';
import { Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="header">
            <Navbar expand="sm" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand href="#"><FontAwesomeIcon icon={faUsers} />Build Your Team</Navbar.Brand>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;