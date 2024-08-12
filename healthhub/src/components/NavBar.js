import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" className={styles.navbar}>
            <Navbar.Brand as={Link} to="/" className={styles.navbarBrand}>
                MyApp
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarToggler} />
            <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarCollapse}>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/" className={styles.navLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about" className={styles.navLink}>
                        About
                    </Nav.Link>
                    <Nav.Link as={Link} to="/auth/login" className={styles.navLink}>
                        Login
                    </Nav.Link>
                    <Nav.Link as={Link} to="/auth/register" className={styles.navLink}>
                        Register
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;

