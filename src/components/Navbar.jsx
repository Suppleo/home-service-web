import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavigationBar({ scrollToSection }) {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#">MONKEY5</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => scrollToSection("hero")}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("services")}>
              Services
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("howItWorks")}>
              How It Works
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("testimonials")}>
              Testimonials
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("cta")}>Contact</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("benefits")}>
              Benefits
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
