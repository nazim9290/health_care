import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
           <Container>
           <Row>
    <Col xs={6} md={2}>
    <img src="https://i.ibb.co/Dz7DhVc/screenshot-hatchful-shopify-com-2021-10-18-13-53-34.png" alt="" width="200" height="100" />
      
    </Col>
    <Col xs={6} md={3}>
      <h4 className="title">Offliline</h4>
      <NavLink to="#" className="nav-link">
      Intensive
      </NavLink>
      <NavLink to="#" className="nav-link">
      Part-time
      </NavLink>
      <NavLink to="#" className="nav-link">
      Private
      </NavLink>
      <NavLink to="#" className="nav-link">
      Intensive
      </NavLink>
    </Col>
    <Col xs={6} md={3}>
    <h4 className="title">Online</h4>
      <NavLink to="#" className="nav-link">
      Intensive 
      </NavLink>
      <NavLink to="#" className="nav-link">
      Part-time 
      </NavLink>
      <NavLink to="#" className="nav-link">
      Private
      </NavLink>
      <NavLink to="#" className="nav-link">
      Intensive 
      </NavLink>
    </Col>
    <Col xs={6} md={2}>
    <h4 className="title">Company</h4>
      <NavLink to="#" className="nav-link">
      Intensive
      </NavLink>
      <NavLink to="#" className="nav-link">
      Part-time 
      </NavLink>
      <NavLink to="#" className="nav-link">
      Private
      </NavLink>
      <NavLink to="#" className="nav-link">
      Intensive 
      </NavLink>
    </Col>
    <Col xs={6} md={2}>
    <h4 className="title">Contacts</h4>
      <NavLink to="#" className="nav-link">
      Intensive 
      </NavLink>
      <NavLink to="#" className="nav-link">
      Part-time
      </NavLink>
      <NavLink to="#" className="nav-link">
      Private
      </NavLink>
      <NavLink to="#" className="nav-link">
      Intensive
      </NavLink>
    </Col>
  </Row>
           </Container>
        </div>
    );
};

export default Footer;