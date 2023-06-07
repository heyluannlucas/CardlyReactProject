
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import React from 'react'
import CommonSection from '../components/UI/CommonSection'

const Checkout = () => {
  return (<Helmet>
    <CommonSection title='checkout'/>
    <section>
      <Container>
        <Row>
          <Col>
          <h6 className='mb-4 fw-bold'>Billing information</h6>
          <Form>
            <FormGroup>
              <input type='text' placeholder='Enter you name'/>
            </FormGroup>
          </Form>
          </Col>
        </Row>
      </Container>
    </section>
   
  </Helmet>)
}

export default Checkout