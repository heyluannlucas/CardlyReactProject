
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import React from 'react'
import CommonSection from '../components/UI/CommonSection'

import '../styles/checkout.css'
import { useSelector } from 'react-redux'

const Checkout = () => {

  const totalQty = useSelector(state => state.cart.totalQty);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  return (<Helmet title='Checkout'>
    <CommonSection title='checkout' />
    <section>
      <Container>
        <Row>
          <Col>
            <h6 className='mb-4 fw-bold'>Billing information</h6>
            <Form className='biling_form'>
              <FormGroup>
                <input type='text' placeholder='Enter you name' />
              </FormGroup>

              <FormGroup>
                <input type='email' placeholder='Enter you email' />
              </FormGroup>

              <FormGroup>
                <input type='number' placeholder='Enter you number' />
              </FormGroup>

              <FormGroup>
                <input type='number' placeholder='Enter you CPF' />
              </FormGroup>

              <FormGroup>
                <input type='text' placeholder='Enter you country' />
              </FormGroup>

            </Form>
          </Col>

          <Col lg='4'>
            <div
              className="checkout_cart">
              <h6>Total Qty: <span>{totalQty} items</span></h6>
              <h6>Subtotal: <span>${totalAmount}</span></h6>
              <h6 className='mt-3'>Free Shipping:</h6>
              <p>You're going to receive de redem code on your email</p>
              <h5>Total Cost: <span>${totalAmount}</span></h5>
              <button className='add_button'>Buy
              </button>
            </div>

          </Col>

        </Row>
      </Container>
    </section>

  </Helmet>)
}

export default Checkout