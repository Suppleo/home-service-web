import { motion } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Hero() {
  return (
    <section
      className="position-relative d-flex align-items-center justify-content-center"
      style={{
        height: "80vh",
        backgroundImage: "linear-gradient(to right, #3b82f6, #1d4ed8)",
      }}
    >
      <Container className="text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="display-4 font-weight-bold mb-3">
            Professional Home Services, On-Demand
          </h1>
          <p className="lead mb-4">
            Book trusted professionals for all your home needs in just a few
            clicks
          </p>
          <Button variant="light" size="lg">
            Book a Service
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
