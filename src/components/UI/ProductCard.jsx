import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/product-card.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';


const scrollToTop = () => {
  window.scrollTo({
    top: 1,
    behavior: "smooth"
  });
};


const ProductCard = ({item}) => {


  const { id} = item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
      })
    );

   toast.success('Product added')
  };



  return (
    <Col lg='3' md='4'>
      <div className="product_item">
        <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt="" />
      </div>
      <div className='p-2 product_info'>
    <h3 className='product_name'>
      <Link to={`/shop/${id}`} onClick={scrollToTop}>
        {item.productName}
      </Link>
    </h3>
    <span>{item.category}</span>
  </div>
      <div className='product_card-bottom d-flex align-items-center justify-content-between'>
        <span className='price'>${item.price}</span>
        <motion.span whileTap={{scale: 1.2}} onClick={addToCart}>
          <i className="ri-add-line"></i>
          </motion.span>
      </div>
    </Col>
  );
};

export default ProductCard;
