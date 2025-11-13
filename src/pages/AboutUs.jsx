import { Button, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function AboutUs() {
  return (
    <div className="about py-5">
      <Container>
        <AnimationTitles
          className="title text-center mb-5"
          title="Why Choose TMS?"
        />

        <Row className="mb-5">
          <Col md={6}>
            <motion.div
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="mb-4">Complete Property Management Solution</h3>
              <p className="gray-50 mb-4">
                The Tenant Management System (TMS) is your comprehensive
                platform for streamlining every aspect of property management.
                From tenant onboarding to rent collection and maintenance
                tracking, TMS brings everything together in one intuitive
                interface.
              </p>

              <div className="mb-4">
                <h5 className="fw-bold mb-2">✓ Automated Rent Collection</h5>
                <p className="gray-50">
                  Seamless M-Pesa integration for secure, timely payments with
                  automated reminders.
                </p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold mb-2">✓ Tenant Communication Hub</h5>
                <p className="gray-50">
                  Keep all tenant communications organized in one place with
                  built-in messaging.
                </p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold mb-2">✓ Smart Maintenance Tracking</h5>
                <p className="gray-50">
                  Manage maintenance requests efficiently with priority tracking
                  and vendor management.
                </p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold mb-2">
                  ✓ Powerful Analytics & Reporting
                </h5>
                <p className="gray-50">
                  Make data-driven decisions with comprehensive reports on
                  occupancy, revenue, and expenses.
                </p>
              </div>

              <a href={`${process.env.REACT_APP_TMS}/auth/signup`}>
                <Button variant="primary" size="lg" className="ms-0">
                  Start Managing Today
                </Button>
              </a>
            </motion.div>
          </Col>

          <Col md={6}>
            <motion.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
              className="d-flex flex-column justify-content-center h-100"
            >
              <div className="d-flex">
                <img
                  src={require("../images/click-smith-nick254-media-ltd-833P7yxEHF8-unsplash (1).jpg")}
                  className="p-0 img rounded shadow-lg"
                  alt="Property Management Dashboard"
                  style={{ width: "100%", objectFit: "cover" }}
                />
              </div>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-5 p-5 bg-white-100 rounded"
        >
          <h4 className="mb-3">Trusted by Property Managers Across Kenya</h4>
          <p className="gray-50 mb-0">
            Join hundreds of landlords who have simplified their property
            management workflow with TMS. Save time, reduce stress, and increase
            your revenue.
          </p>
        </motion.div>
      </Container>
    </div>
  );
}

export default AboutUs;
