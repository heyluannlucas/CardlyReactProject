import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';
import '../styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user

      setLoading(false)
      toast.success(`Welcome to Cardly, ${user.displayName}!`);
      navigate('/checkout')

    } catch (error) {
      setLoading(false)
      toast.error('Login error:', error.message);
    }
  };

  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            {
              loading ? <Col lg='12' className='text-center'><h5 className='fw-bold'>Loggin in...</h5></Col> :
                <Col lg='6' className='m-auto text-center'>
                  <h3 className='fw-bold fs-4 mb-4'>Login</h3>
                  <Form className='auth_form' onSubmit={login}>
                    <FormGroup className='form_group'>
                      <input
                        type='email'
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup className='form_group'>
                      <input
                        type='password'
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FormGroup>

                    <button className='add_button auth_button mt-4'>Login</button>
                    <p className='mt-4'>
                      Don't have an account? <Link to='/signup'>Signup</Link>
                    </p>
                  </Form>
                </Col>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
