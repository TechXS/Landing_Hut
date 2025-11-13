import React from "react";
import { Link } from "react-scroll";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../../images/logo/hut.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

function NavBar() {
  const handleSignIn = () => {
    const url = process.env.REACT_APP_TMS_SIGNIN;
    if (url) {
      window.location.href = url;
    } else {
      console.error("Sign in URL is undefined");
    }
  };

  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#" className="me-lg-5">
          <img
            className="logo"
            src={logo}
            alt="TMS Logo"
            width={50}
            height={50}
          />
          <span className="ms-2 fw-bold fs-4">TMS</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link>
              <Link to="hero" smooth={true} duration={500}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="features" smooth={true} duration={500}>
                Features
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center gap-2 order">
          <Button variant="outline-primary" onClick={handleSignIn}>
            Sign In
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              (window.location.href =
                process.env.REACT_APP_TMS + "/auth/signup")
            }
          >
            Get Started
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
