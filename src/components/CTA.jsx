import { motion } from "framer-motion";
import { Container, Button } from "react-bootstrap";

export default function CTA() {
  return (
    <section className="py-5 bg-primary text-white text-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-3">Ready to Transform Your Home?</h2>
          <p className="mb-4">
            Join thousands of happy customers enjoying our professional services
          </p>
          <Button variant="light" size="lg">
            Get Started Now
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
