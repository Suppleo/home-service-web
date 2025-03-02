import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Benefits() {
  return (
    <section id="benefits" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Benefits of Using MONKEY5</h2>
        <Row>
          <Col md={4}>
            <i className="fas fa-clock fa-3x mb-3"></i>
            <h3>Convenience</h3>
            <p>
              Book home services quickly and easily from your phone or computer.
            </p>
          </Col>
          <Col md={4}>
            <i className="fas fa-user-shield fa-3x mb-3"></i>
            <h3>Trusted Professionals</h3>
            <p>
              We carefully vet all of our service providers to ensure quality
              and reliability.
            </p>
          </Col>
          <Col md={4}>
            <i className="fas fa-lock fa-3x mb-3"></i>
            <h3>Secure Payments</h3>
            <p>
              Pay securely through our platform with our secure payment system.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Benefits;
