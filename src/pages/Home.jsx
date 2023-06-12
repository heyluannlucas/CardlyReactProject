import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import homeImage from '../assets/images/giftcards.png';
import Services from '../services/Services';
import '../styles/home.css';
import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';

const Home = () => {
  const [data, setData] = useState([]);
  const [categories] = useState(['store', 'apps', 'streaming', 'games']);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const category = categories[currentIndex];
    let filteredProducts = products.filter(item => item.category === category);

    while (filteredProducts.length < 4) {
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      if (!filteredProducts.includes(randomProduct)) {
        filteredProducts.push(randomProduct);
      }
    }

    setData(filteredProducts.slice(0, 4));
  }, [currentIndex, categories]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % categories.length);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [categories.length]);

  return (
    <Helmet title={'Home'}>
      <section className="home_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="home_content">
                <h2 className="slogan">
                  The power of gifting <br />
                  emotions in the form of <br />
                  giftcards
                </h2>
                <motion.button whileTap={{ scale: 1.2 }} className="shop_button">
                  <Link to="/shop">SHOP</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <img className="home_img" src={homeImage} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="trending_products">
        <Container>
          <Row>
            <ProductsList data={data} />
          </Row>
        </Container>
        <Services />
      </section>
    </Helmet>
  );
};

export default Home;
