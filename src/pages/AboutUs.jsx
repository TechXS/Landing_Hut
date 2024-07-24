import { Button, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import { Link } from "react-scroll";


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
          The Tenant Management System (TMS) in our property management application
          is designed to streamline tenant-related processes by offering comprehensive tenant profiles,
          seamless communication, and efficient rent collection. It also facilitates easy management of
          maintenance requests, secure document storage, and insightful reporting and analytics. With TMS,
          you can ensure compliance with regulations, conduct tenant screenings, and maintain positive tenant relationships effortlessly.
          </p>
{/* TMS LOGIN */}
          <Link to="#" smooth={true} duration={500}>
          <Button variant="primary ms-0">Sign Up</Button>
            </Link>
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="d-flex flex-column"
        >
          <div className="d-flex">
            <div>
              <img
                src={require("..//images/bohdan-d-fh6o-XkVQG8-unsplash.webp")}
                className="p-0 me-2 img"
                alt="img"
              />
            </div>
            <div>
              <img
                src={require("..//images/john-o-nolan-6f_ANCcbj3o-unsplash.webp")}
                className="p-0 img"
                alt="img"
              />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img
                src={require("..//images/julia-solonina-ci19YINguoc-unsplash.webp")}
                className="p-0 me-2 img"
                alt="img"
              />
            </div>
            <div>
              <img
                src={require("..//images/theater-amazonas-manaus.webp")}
                className="p-0 img"
                alt="img"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default AboutUs;
