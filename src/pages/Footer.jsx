import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="py-5">
      <Container>
        <Row className="pt-5 pb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <motion.div
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h5 className="fw-bold mb-3">TMS - Tenant Management System</h5>
              <p className="gray-100 mb-3">
                Simplifying property management for modern landlords. Manage
                properties, tenants, and finances all in one place.
              </p>
              <div className="mb-3">
                <p className="mb-1 gray-100">Contact us:</p>
                <Link
                  className="link-primary link-underline-opacity-0 d-block"
                  to={""}
                >
                  techxsweb@gmail.com
                </Link>
                <Link
                  className="link-primary link-underline-opacity-0 d-block"
                  to={""}
                >
                  +254 717588898
                </Link>
              </div>
            </motion.div>
          </Col>

          <Col md={2} className="mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h6 className="gray-100 text-uppercase mb-3 fw-bold">Product</h6>
              <ul className="p-0 list-unstyled">
                <li className="mb-2">
                  <a
                    href="#features"
                    className="link-secondary link-underline-opacity-0"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#about"
                    className="link-secondary link-underline-opacity-0"
                  >
                    About TMS
                  </a>
                </li>
                <li className="mb-2">
                  <Link
                    to={""}
                    className="link-secondary link-underline-opacity-0"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-2">
                  <a
                    href={`${process.env.REACT_APP_TMS}/auth/signup`}
                    className="link-secondary link-underline-opacity-0"
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </motion.div>
          </Col>

          <Col md={3} className="mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h6 className="gray-100 text-uppercase mb-3 fw-bold">
                Resources
              </h6>
              <ul className="p-0 list-unstyled">
                <li className="mb-2">
                  <Link
                    to={""}
                    className="link-secondary link-underline-opacity-0"
                  >
                    Documentation
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={""}
                    className="link-secondary link-underline-opacity-0"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={""}
                    className="link-secondary link-underline-opacity-0"
                  >
                    Video Tutorials
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={""}
                    className="link-secondary link-underline-opacity-0"
                  >
                    API Reference
                  </Link>
                </li>
              </ul>
            </motion.div>
          </Col>

          <Col md={3}>
            <motion.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h6 className="gray-100 text-uppercase mb-3 fw-bold">Connect</h6>
              <ul className="p-0 list-unstyled">
                <li className="mb-2">
                  <Link
                    to={""}
                    className="link-secondary link-underline-opacity-0"
                  >
                    <i className="fab fa-twitter me-2"></i>Twitter
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={""}
                    className="link-secondary link-underline-opacity-0"
                  >
                    <i className="fab fa-instagram me-2"></i>Instagram
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={""}
                    className="link-secondary link-underline-opacity-0"
                  >
                    <i className="fab fa-facebook me-2"></i>Facebook
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to={""}
                    className="link-secondary link-underline-opacity-0"
                  >
                    <i className="fab fa-linkedin me-2"></i>LinkedIn
                  </Link>
                </li>
              </ul>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="d-flex justify-content-between flex-column flex-md-row flex-wrap gray-100 pt-4 mt-4 border-top"
        >
          <p>© 2024 TMS - Tenant Management System. All rights reserved</p>
          <div>
            <Link
              className="link-secondary link-underline-opacity-0 me-3"
              to={""}
            >
              Privacy Policy
            </Link>
            <Link
              className="link-secondary link-underline-opacity-0 me-3"
              to={""}
            >
              Terms of Service
            </Link>
            <span>
              Developed by{" "}
              <Link className="link-primary link-underline-opacity-0" to={""}>
                TECHX
              </Link>
            </span>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}

export default Footer;
