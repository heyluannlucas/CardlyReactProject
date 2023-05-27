import React from 'react';
import productImg from '../../assets/images/giftCard-amazon.png';
import { motion } from 'framer-motion';
import '../../styles/product-card.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <Col lg='3' md='4'>
      <div className="product_item">
        <motion.img whileHover={{scale: 0.9}} src={productImg} alt="" />
      </div>
      <div className='p-2 product_info'>
        <h3 className='product_name'><Link to='/shop/id'>GiftCard</Link></h3>
        <span>Store Card</span>
      </div>
      <div className='product_card-bottom d-flex align-items-center justify-content-between'>
        <span className='price'>$20</span>
        <motion.span whileTap={{scale: 1.2}}><i className="ri-add-line"></i></motion.span>
      </div>
    </Col>
  );
};

export default ProductCard;
