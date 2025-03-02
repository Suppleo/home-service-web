import { Container, Row, Col, ListGroup } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="mb-3">MONKEY5</h5>
            <p className="text-white">
              Your trusted partner for professional home services
            </p>
          </Col>
          <Col md={3}>
            <h6 className="mb-3">Quick Links</h6>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-dark text-white p-0 border-0">
                <a href="#" className="text-white">
                  Home
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white p-0 border-0">
                <a href="#" className="text-white">
                  Services
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white p-0 border-0">
                <a href="#" className="text-white">
                  About Us
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white p-0 border-0">
                <a href="#" className="text-white">
                  Contact
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <h6 className="mb-3">Contact Info</h6>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-dark text-white p-0 border-0">
                123 Service Street
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white p-0 border-0">
                City, Country
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white p-0 border-0">
                Phone: (123) 456-7890
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-white p-0 border-0">
                Email: info@monkey5.com
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="text-center">
            <h6 className="mb-3">Follow Us</h6>
            <a href="#" className="text-white me-2">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="text-white me-2">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="text-white me-2">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </Col>
        </Row>
        <hr />
        <p className="text-center text-white">
          © 2025 MONKEY5. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
