import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import { Link } from "react-scroll";

function Loading() {
  return (
    <div className="loading position-relative">
      <Container className="d-flex justify-content-between align-items-center gap-md-5 flex-column flex-md-row mt-3 mt-xl-4 overflow-hidden">
        <motion.div
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-grow-1"
        >
          <AnimationTitles title="Simplify Property Management with TMS" />
          <p className="gray-90 mt-3 fs-5">
            Streamline tenant relationships, automate rent collection, and
            manage maintenance requests all in one powerful platform. Built for
            landlords who want to focus on growing their portfolio, not managing
            spreadsheets.
          </p>
          <div className="d-flex gap-3 align-items-center">
            <a href={`${process.env.REACT_APP_TMS}/auth/signup`}>
              <Button className="m-0 my-3 px-5 py-2 fs-5 fw-bold">
                Get Started Free
              </Button>
            </a>
            <Link to="features" smooth={true} duration={500}>
              <Button
                variant="outline-primary"
                className="m-0 my-3 px-5 py-2 fs-5 fw-bold"
              >
                Learn More
              </Button>
            </Link>
          </div>
          <div className="d-none d-md-flex justify-content-between align-items-center my-4 gap-5">
            <div>
              <h5 className="fw-bold fs-1">500+</h5>
              <span className="gray-100">Properties Managed</span>
            </div>
            <div>
              <h5 className="fw-bold fs-1">1000+</h5>
              <span className="gray-100">Active Tenants</span>
            </div>
            <div>
              <h5 className="fw-bold fs-1">99%</h5>
              <span className="gray-100">On-time Payments</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-100 my-5 d-flex justify-content-center"
        >
          <div className="hero-image-container">
            <img
              src={require("../images/click-smith-nick254-media-ltd-833P7yxEHF8-unsplash (1).jpg")}
              alt="Property Management"
              className="rounded shadow-lg img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="d-md-none d-flex justify-content-between align-items-center my-4 features w-100"
        >
          <div className="text-center">
            <h5 className="fw-bold fs-1">500+</h5>
            <span className="gray-100">Properties</span>
          </div>
          <div className="text-center">
            <h5 className="fw-bold fs-1">1000+</h5>
            <span className="gray-100">Tenants</span>
          </div>
          <div className="text-center">
            <h5 className="fw-bold fs-1">99%</h5>
            <span className="gray-100">On-time</span>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default Loading;
