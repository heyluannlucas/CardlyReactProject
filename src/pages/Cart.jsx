import Helmet from '../components/Helmet/Helmet'
import '../styles/cart.css' 
import React from 'react'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col } from 'reactstrap'

import { cartActions } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import tdImg from '../assets/images/giftCard -Playstore.png'
import { motion } from 'framer-motion'


const Cart = () => {

    const cartItems = useSelector ((state) => state.cart.cartItems)

  return (
    <Helmet title='Cart'>
      <CommonSection title='Shopping Cart' />
      <section>
        <Container>
          <Row>
            <Col lg="9">

            {
              cartItems.length===0 ? (
                <h2 className='fs-4 text-center'> no items </h2>
              ) : (
                <table className='table bordered'>
                  <thead>
                    <tr>
                      <th>img</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      cartItems.map((item, index) => {
                        <tr>
                        <td>
                          <img src={item.image} alt=''/>
                        </td>
                        <td>
                          {item.productName}
                        </td>
                        <td>
                          {item.price}
                        </td>
                        <td>
                          {item.quantity}px
                        </td>
                      </tr>

                      })
                    }
                   
                  </tbody>

                  
                </table>
              )
            }
          

            </Col>

            <Col lg="3"></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
