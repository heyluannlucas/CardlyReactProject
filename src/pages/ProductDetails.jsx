

import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import products from '../assets/data/products';
import '../styles/product-details.css'
import { motion } from 'framer-motion';
import ProductsList from '../components/UI/ProductsList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';

const ProductDetails = () => {

  const [tab, setTab] = useState('desc');
  const reviewUser = useRef('')
  const reviewMsg = useRef('');
  const dispatch = useDispatch()

  const [rating, setRating] = useState(null)

  const { id } = useParams()
  const product = products.find(item => item.id === id)

  const { imgUrl, productName, price, avgRating, reviews,
    description, shortDesc, category } = product;

  const relatedProducts = products.filter(item => item.category === category)

  const submitHandler = (e) => {
    e.preventDefault()

    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value

    const reviewObj = {
      author: reviewUserName,
      text: reviewUserMsg,
      rating,
    }
    console.log(reviewObj)
    toast.success('subimited, thank you!')
  };

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image: imgUrl,
      productName,
      price,
    })
    );
    toast.success('Product added')
  };


  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section className='pt-5'>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt='' />
            </Col>

            <Col lg='6'>
              <div className="product_details">
                <h2>{productName}</h2>
                <div className='product_rating d-flex align-items-center gap-3 mb-3'>

                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-fill"></i></span>
                  <span><i class="ri-star-half-fill"></i></span>

                  <p>(<span>{avgRating} ratings</span>)</p>
                </div>

                <span className='price'>${price}</span>
                <p className='mt-3'>{shortDesc}</p>
                <motion.button whileTap={{ scale: 0.8 }}
                  className='add_button' onClick={addToCart}>add to cart</motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className='tab_wrapper d-flex align-items-center
          gap-5'>
                <h6 className={`${tab === 'desc' ? 'active__tab' : ''}`}
                  onClick={() => setTab('desc')}>
                  Description
                </h6>
                <h6 className={`${tab === 'rev' ? 'active__tab' : ''}`}
                  onClick={() => setTab('rev')}>
                  Reviews ({reviews.length})
                </h6>
              </div>


              {
                tab === 'desc' ? <div className="tab_content mt-4">
                  <p>{description}</p>
                </div> : (
                  <div className='product_review  mt-5'>
                    <div className='review_wrapper'>
                      <ul>
                        {
                          reviews?.map((item, index) => (
                            <li kew={index} className='mb-4'>
                              <h6>Jhon Doe</h6>
                              <span>{item.rating} (rating)</span>
                              <p>{item.text}</p>
                            </li>
                          ))
                        }
                      </ul>

                      <div className="review_form">
                        <h4>Leave your experience</h4>
                        <form action='' onSubmit={submitHandler}>
                          <div className="form_group">
                            <input type='text' placeholder='Enter name'
                              ref={reviewUser}
                              required />

                            <div className='form_group_review d-flex align-items-center gap-5 rating_group'>

                              <motion.span whileTap={{ scale: 1.2 }} onClick={() =>
                                setRating(1)}>1
                                <i class="ri-star-fill"></i>
                              </motion.span>

                              <motion.span whileTap={{ scale: 1.2 }} onClick={() =>
                                setRating(2)}>2
                                <i class="ri-star-fill"></i>
                              </motion.span>

                              <motion.span whileTap={{ scale: 1.2 }} onClick={() =>
                                setRating(3)}>3
                                <i class="ri-star-fill"></i>
                              </motion.span>

                              <motion.span whileTap={{ scale: 1.2 }} onClick={() =>
                                setRating(4)}>4
                                <i class="ri-star-fill"></i>
                              </motion.span>

                              <motion.span whileTap={{ scale: 1.2 }} onClick={() =>
                                setRating(5)}>5
                                <i class="ri-star-fill"></i>
                              </motion.span>

                            </div>

                            <div className="form_group">
                              <textarea
                                ref={reviewMsg}
                                rows={4}
                                type='text'
                                placeholder='Review'
                                required
                              />
                            </div>

                            <button type='submit' className='add_button'>Submit</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}


            </Col>

            <Col lg='12' className='mt-5'>
              <h2 className='related_title mb-5'>You may wanna see</h2>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails