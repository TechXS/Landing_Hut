import { Button, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";


function AboutUs() {
  return (
    <div className="about">
      <Container className="d-flex justify-content-between flex-wrap flex-md-nowrap">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationTitles title="Manage with ease - TMS" className="title" />
          <p className="gray-50 mb-5">
            The Tenant Management System (TMS) in our property management
            application is designed to streamline tenant-related processes by
            offering comprehensive tenant profiles, seamless communication, and
            efficient rent collection. It also facilitates easy management of
            maintenance requests, secure document storage, and insightful
            reporting and analytics. With TMS, you can ensure compliance with
            regulations, conduct tenant screenings, and maintain positive tenant
            relationships effortlessly.
          </p>
          {/* TMS LOGIN */}
          <a href={`${process.env.REACT_APP_TMS}/auth/signup`}>
            <Button variant="primary ms-0">Get Started</Button>
          </a>
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="d-flex flex-column"
        >
          <div className="d-flex ">
            <img
              src={require("..//images/click-smith-nick254-media-ltd-833P7yxEHF8-unsplash (1).jpg")}
              className="p-0 me-2 img"
              alt="img"
            />
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default AboutUs;
