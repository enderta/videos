import React from "react";
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import UserInfoMenu from "./UserInfoMenu";

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/home">SB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">All Users</Nav.Link>
                            <Nav.Link href="/myavailability">My Availabilities</Nav.Link>
                            <Nav.Link href="/availability">Create Availability</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <UserInfoMenu />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;