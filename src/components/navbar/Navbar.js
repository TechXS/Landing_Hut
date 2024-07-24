import React from "react";
import { Link } from "react-scroll";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo/hut.png";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import Dropdown from 'react-bootstrap/Dropdown';


function NavBar() {
  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#" className="me-lg-5">
          <img className="logo" src={logo} alt="logo-01" width={50} height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link>
              <Link to="properties" smooth={true} duration={500}>
                Rent
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="about-us" smooth={true} duration={500}>
                Manage
              </Link>
            </Nav.Link>
            <Nav.Link className="px-lg-3">
              <Link to="about-us" smooth={true} duration={500}>
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="join" smooth={true} duration={500}>
                Features
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center order">
          
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Sign In
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">TMS</Dropdown.Item>
              <Dropdown.Item href="#/action-2">HF</Dropdown.Item>
              <Dropdown.Item href="#/action-3">CLA</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;
