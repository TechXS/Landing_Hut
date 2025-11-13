import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function Join() {
  const features = [
    {
      number: "1",
      title: "Automated Rent Collection",
      description:
        "Simplify rent payments with secure M-Pesa integration. Set up automatic reminders and track payment history effortlessly.",
      image: require("../images/illustration/01.webp"),
      icon: "💰",
    },
    {
      number: "2",
      title: "Comprehensive Reports",
      description:
        "Gain valuable insights with detailed financial reports, occupancy analytics, and customizable dashboards.",
      image: require("../images/illustration/02.webp"),
      icon: "📊",
    },
    {
      number: "3",
      title: "Multi-Property Management",
      description:
        "Handle unlimited properties seamlessly within one platform. Scale your portfolio without the complexity.",
      image: require("../images/illustration/03.webp"),
      icon: "🏢",
    },
    {
      number: "4",
      title: "Smart Maintenance Tracking",
      description:
        "Streamline maintenance requests with priority levels, vendor assignment, and real-time status updates.",
      image: require("../images/illustration/04.webp"),
      icon: "🔧",
    },
    {
      number: "5",
      title: "Tenant Portal",
      description:
        "Provide tenants with a self-service portal to submit requests, make payments, and communicate directly.",
      icon: "👥",
    },
    {
      number: "6",
      title: "Document Management",
      description:
        "Store and organize all lease agreements, invoices, and important documents securely in the cloud.",
      icon: "📄",
    },
    {
      number: "7",
      title: "Mobile Access",
      description:
        "Manage your properties on the go with our mobile-responsive platform. Access everything from anywhere.",
      icon: "📱",
    },
    {
      number: "8",
      title: "Compliance & Security",
      description:
        "Stay compliant with regulations and keep tenant data secure with enterprise-grade encryption.",
      icon: "🔒",
    },
  ];

  return (
    <div className="join py-5">
      <Container>
        <AnimationTitles
          className="title mx-auto text-center mb-4"
          title="Powerful Features for Modern Landlords"
        />
        <p
          className="text-center gray-50 mb-5 mx-auto"
          style={{ maxWidth: "800px" }}
        >
          Everything you need to manage your properties efficiently, communicate
          with tenants effectively, and grow your rental business.
        </p>

        <Row className="g-4">
          {features.map((feature, index) => (
            <Col key={index} xs={12} sm={6} lg={3}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a
                  href={`${process.env.REACT_APP_TMS}/auth/signup`}
                  style={{ textDecoration: "none" }}
                >
                  <Card className="h-100 p-4 feature-card border-0 shadow-sm hover-lift">
                    <div className="mb-3">
                      <span className="feature-number gray-100 fw-bold fs-5">
                        {feature.number}
                      </span>
                      <span className="feature-icon fs-1 float-end">
                        {feature.icon}
                      </span>
                    </div>
                    {feature.image && (
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="mb-3 rounded"
                        style={{
                          width: "100%",
                          height: "150px",
                          objectFit: "cover",
                        }}
                      />
                    )}
                    <h5 className="fw-bold mb-3">{feature.title}</h5>
                    <p className="gray-50 mb-0">{feature.description}</p>
                  </Card>
                </a>
              </motion.div>
            </Col>
          ))}
        </Row>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-5 pt-4"
        >
          <h4 className="mb-3">Ready to transform your property management?</h4>
          <a href={`${process.env.REACT_APP_TMS}/auth/signup`}>
            <button className="btn btn-primary btn-lg px-5 py-3">
              Get Started for Free
            </button>
          </a>
        </motion.div>
      </Container>
    </div>
  );
}

export default Join;
