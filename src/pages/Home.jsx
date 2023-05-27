import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Row, Col, Container } from 'reactstrap';
import homeImage from '../assets/images/giftcards.png';
import '../styles/home.css'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';


const Home = () => {
  
  return (
    <Helmet title={'Home'}>
      <section className='home_section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="home_content">
                <h2 className='slogan'>The power of gifting <br />  
                  emotions in the form of   <br />
                  giftcards</h2>
                <motion.button whileTap={{scale:1.2}} 
                className='shop_button'><Link to='/shop'>SHOP</Link></motion.button>
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
      <Services/>
      <section className='trending_products'>
        <Container>
          <Row>
            <Col  lg='12' className='text-center'>
              <h2 className='section_title'>Trending Products</h2>
            </Col>
            <ProductsList/>
          </Row>
        </Container>

      </section>
    </Helmet>
  );
};

export default Home;

