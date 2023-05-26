import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Row, Col, Container } from 'reactstrap';
import homeImage from '../assets/images/giftcards.png';

const Home = () => {
  const year = new Date().getFullYear();
  
  return (
    <Helmet title={'Home'}>
      <section className='home_section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="home_content">
                <p className='home_subtitle'>{year}</p>
                <h2>Gift Cards: The Perfect Present, All in One Card!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className='buy_btn'>BUY</button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='home_img'>
                <img src={homeImage} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
