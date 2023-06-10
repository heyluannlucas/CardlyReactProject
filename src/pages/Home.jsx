import React, { useState, useEffect } from 'react';

import Helmet from '../components/Helmet/Helmet';
import { Row, Col, Container } from 'reactstrap';
import homeImage from '../assets/images/giftcards.png';
import Services from '../services/Services'

import '../styles/home.css'

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import products from '../assets/data/products'


import ProductsList from '../components/UI/ProductsList';


const Home = () => {


  const [data, setData] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === 'teste'
    );

    setData(filteredProducts)
  }, []);

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
                <motion.button whileTap={{ scale: 1.2 }}
                  className='shop_button'><Link to='/shop'>SHOP</Link></motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <img className='home_img' src={homeImage} alt='' />
            </Col>
          </Row>
        </Container>

      </section>
      {/* <Services/> */}
      <section className='trending_products'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title'> </h2>
            </Col>
            <ProductsList data={data} />
          </Row>
        </Container>

      </section>
    </Helmet>
  );
};

export default Home;

