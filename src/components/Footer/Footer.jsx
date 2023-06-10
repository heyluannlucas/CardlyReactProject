import './footer.css';

import React from 'react';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const nav_links = [
  { path: 'home', display: 'Home' },
  { path: 'shop', display: 'Shop' },
  { path: 'cart', display: 'Cart' },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4'>
            <div className='logo'>
            
              <div>
                <h1>Cardly.com</h1>
              </div>
            </div>
            <p className="footer_text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nostrum at animi itaque eaque sapiente aut vitae ad officiis
              similique nihil!
            </p>
          </Col>

          <Col lg='3'>
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Categories</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'><p>um</p></ListGroupItem>
                <ListGroupItem className='ps-0 border-0'><p>dois</p></ListGroupItem>
                <ListGroupItem className='ps-0 border-0'><p>tres</p></ListGroupItem>
                <ListGroupItem className='ps-0 border-0'><p>quatro</p></ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2'>
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Links</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'><p>um</p></ListGroupItem>
                <ListGroupItem className='ps-0 border-0'><p>dois</p></ListGroupItem>
                <ListGroupItem className='ps-0 border-0'><p>tres</p></ListGroupItem>
                <ListGroupItem className='ps-0 border-0'><p>quatro</p></ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3'>
            <div className='footer_quick-links'>
              <h4 className='quick_links-title'>Contact</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <span><i className='ri-map-pin-line'></i></span>
                  <p>123, Recife, Pernambuco, Brazil</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <span><i className="ri-phone-line"></i></span>
                  <p>+55 (99) 9999-9999 </p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <span><i className="ri-mail-line"></i></span>
                  <p>Cardly.support@email.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className='footer_copyright'>COPYRIGHT @{year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
