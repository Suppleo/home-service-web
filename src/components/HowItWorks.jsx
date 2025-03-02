import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";

const steps = [
  {
    title: "Choose Service",
    description: "Select from our range of professional home services",
    icon: "📋",
  },
  {
    title: "Pick Time & Staff",
    description: "Select your preferred time and available professionals",
    icon: "⏰",
  },
  {
    title: "Enjoy Service",
    description: "Relax while our experts handle your home needs",
    icon: "😊",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">How It Works</h2>
        <Row xs={1} md={3} className="g-4">
          {steps.map((step, index) => (
            <Col key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="shadow-sm h-100 text-center">
                  <Card.Body>
                    <div className="display-1 mb-3">{step.icon}</div>
                    <Card.Title>{step.title}</Card.Title>
                    <Card.Text>{step.description}</Card.Text>
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
