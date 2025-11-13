import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function AboutUs() {
  const features = [
    {
      icon: "💰",
      title: "Automated Rent Collection",
      description:
        "Seamless M-Pesa integration for secure, timely payments with automated reminders and payment tracking.",
      color: "#7E56DA",
    },
    {
      icon: "💬",
      title: "Tenant Communication Hub",
      description:
        "Keep all tenant communications organized in one place with built-in messaging and notification system.",
      color: "#356DF6",
    },
    {
      icon: "🔧",
      title: "Smart Maintenance Tracking",
      description:
        "Manage maintenance requests efficiently with priority tracking, vendor assignment, and status updates.",
      color: "#F6A756",
    },
    {
      icon: "📊",
      title: "Powerful Analytics & Reporting",
      description:
        "Make data-driven decisions with comprehensive reports on occupancy, revenue, expenses, and trends.",
      color: "#56DAA1",
    },
  ];

  return (
    <div className="tms-about-section py-5">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <AnimationTitles
            className="title text-center mx-auto mb-3"
            title="Why Choose TMS?"
          />
          <p className="lead gray-90 mx-auto" style={{ maxWidth: "700px" }}>
            The complete property management platform designed for modern
            landlords. Streamline operations, automate workflows, and grow your
            business.
          </p>
        </motion.div>

        {/* Main Content Area */}
        <Row className="align-items-center mb-5 g-4">
          {/* Left Side - Feature Cards */}
          <Col lg={6}>
            <Row className="g-4">
              {features.map((feature, index) => (
                <Col xs={12} sm={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="tms-feature-card h-100 border-0 shadow-sm p-4">
                      <div
                        className="tms-feature-icon mb-3"
                        style={{ backgroundColor: `${feature.color}15` }}
                      >
                        <span style={{ fontSize: "2rem" }}>{feature.icon}</span>
                      </div>
                      <h5 className="fw-bold mb-2">{feature.title}</h5>
                      <p className="gray-90 mb-0 small">
                        {feature.description}
                      </p>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Right Side - Image & Stats */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="tms-image-container position-relative">
                <img
                  src={require("../images/click-smith-nick254-media-ltd-833P7yxEHF8-unsplash (1).jpg")}
                  className="w-100 rounded-4 shadow-lg"
                  alt="Property Management Dashboard"
                  style={{ objectFit: "cover", height: "400px" }}
                />

                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="tms-floating-stat tms-stat-1"
                >
                  <div className="bg-white rounded-3 shadow p-3">
                    <h6 className="text-primary mb-1 fw-bold">99%</h6>
                    <small className="text-muted">On-time Payments</small>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="tms-floating-stat tms-stat-2"
                >
                  <div className="bg-white rounded-3 shadow p-3">
                    <h6 className="text-success mb-1 fw-bold">1000+</h6>
                    <small className="text-muted">Active Tenants</small>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="tms-cta-box text-center p-5 rounded-4 mt-5"
        >
          <h3 className="fw-bold mb-3">
            Trusted by Property Managers Across Kenya
          </h3>
          <p className="gray-90 mb-4 mx-auto" style={{ maxWidth: "600px" }}>
            Join hundreds of landlords who have simplified their property
            management workflow with TMS. Save time, reduce stress, and increase
            your revenue.
          </p>
          <a href={`${process.env.REACT_APP_TMS}/auth/signup`}>
            <Button variant="primary" size="lg" className="px-5 py-3 fw-bold">
              Start Managing Today
            </Button>
          </a>
        </motion.div>
      </Container>
    </div>
  );
}

export default AboutUs;
