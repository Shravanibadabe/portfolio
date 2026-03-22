import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar expand="lg" sticky="top" bg="light" variant="light" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#">Shravani Badabe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#certifications">Certifications</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button
              href="/SHRAVANI BADABE.pdf"
              download
              variant="danger"
              className="ms-3"
            >
              Download Resume
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;