import { motion } from "framer-motion";
import { Container, Row, Col, Card, Stack } from "react-bootstrap";

const testimonials = [
  {
    name: "Sarah T.",
    review:
      "The cleaning service was exceptional! My home has never been cleaner.",
    rating: 5,
  },
  {
    name: "Michael L.",
    review:
      "The chef prepared an amazing meal for our anniversary. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily R.",
    review:
      "Our babysitter was wonderful with the kids. We'll definitely book again!",
    rating: 4.5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">What Our Customers Say</h2>
        <Row xs={1} md={3} className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="shadow-sm h-100">
                  <Card.Body>
                    <Stack direction="horizontal" gap={2} className="mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          width="20"
                          height="20"
                          fill="currentColor"
                          className={
                            i < testimonial.rating
                              ? "text-warning"
                              : "text-muted"
                          }
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </Stack>
                    <Card.Text className="mb-3">
                      "{testimonial.review}"
                    </Card.Text>
                    <Card.Text className="fw-bold">
                      - {testimonial.name}
                    </Card.Text>
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
