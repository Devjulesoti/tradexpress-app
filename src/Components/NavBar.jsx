import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logotrade from "../Images/TradExpress.png";
import { Link } from "react-router-dom";
import '../styles/NavBar.css'

const NavBar = () => {
  
  return (
    <Navbar className="navbar1" expand="lg">
      <Container className="container-div">
        <Navbar.Brand href="#home">
          <Link to='/'><img src={logotrade} alt="" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="instant" to='/instantbuy'>Instant buy/sell</Link>
            <Link className="learn">Learn</Link>
            <Link className="login" to='/login'>Login</Link>
            <Link className="getstarted" to='/getstarted'>Get Started</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
