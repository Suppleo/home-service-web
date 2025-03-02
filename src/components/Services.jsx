import { motion } from "framer-motion";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const services = [
  {
    title: "General Cleaning",
    description: "Professional cleaning services for your entire home",
    icon: "🧹",
  },
  {
    title: "Home Cooking",
    description: "Experienced chefs for your daily meals or special occasions",
    icon: "👩🍳",
  },
  {
    title: "Babysitting",
    description: "Trusted childcare professionals available 24/7",
    icon: "👶",
  },
];

export default function Services() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row xs={1} md={3} className="g-4">
          {services.map((service, index) => (
            <Col key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="shadow-sm h-100">
                  <Card.Body className="text-center">
                    <div className="display-1 mb-3">{service.icon}</div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                    <Button variant="primary">Learn More →</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
