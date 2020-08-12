import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import './../App.css';


function Appbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navbar-custom" variant="light">
        <Navbar.Brand href="#home" className="nav-head">Web Ready</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#service" className="nav-head1">Services</Nav.Link>
            <Nav.Link eventKey={2} href="#contact" className="nav-head1">
             ContactUs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Appbar;
