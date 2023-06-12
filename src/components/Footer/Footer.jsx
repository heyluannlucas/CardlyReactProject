import './footer.css';
import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  const handleLinkClick = (path) => {
    window.scrollTo(0, 0); 
    navigate(`/${path}`); 
  };


  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='5'>
            <div className='logo' onClick={() => handleLinkClick('home')}>
              <div>
                <h1 className='cardly_footer'>Cardly.com</h1>
              </div>
            </div>
            <p className="footer_text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Nostrum at animi itaque eaque sapiente aut vitae ad officiis <br />
              similique nihil!
            </p>
          </Col>

          <Col lg='7'>
            <Row>
              <Col lg='4'>
                <div className="footer_quick-links">
                  <h4 className="quick_links-title mb-3">Links</h4>
                  <ListGroup className='mb-3'>
                    <ListGroupItem className='ps-0 border-0' onClick={() => handleLinkClick('home')}>
                      <p>Home</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0' onClick={() => handleLinkClick('signup')}>
                      <p>Signup</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0' onClick={() => handleLinkClick('login')}>
                      <p>Login</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0' onClick={() => handleLinkClick('shop')}>
                      <p>Shop</p>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>

              <Col lg='4'>
                <div className='footer_quick-links'>
                  <h4 className='quick_links-title mb-3'>Contact</h4>
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

              <Col lg='4'>
                <div className='footer_quick-links'>
                  <h4 className='quick_links-title mb-3'>Social Media</h4>
                  <ListGroup>
                    <ListGroupItem className='ps-0 border-0'>
                      <span><i className='ri-facebook-fill'></i></span>
                      <p>Facebook</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0'>
                      <span><i className='ri-twitter-fill'></i></span>
                      <p>Twitter</p>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0'>
                      <span><i className='ri-instagram-fill'></i></span>
                      <p>Instagram</p>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col lg='12'>
            <p className='footer_copyright'>
              COPYRIGHT @{year}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
