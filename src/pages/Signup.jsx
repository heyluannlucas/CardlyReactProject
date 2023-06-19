import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { storage } from '../firebase.config';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '../firebase.config';
import { auth } from '../firebase.config';

import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/login.css';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        () => { },
        (error) => {
          toast.error(error.message);
          setLoading(false); 
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then(async (downloadURL) => {
              await updateProfile(user, {
                displayName: username,
                photoURL: downloadURL,
              });

              await setDoc(doc(db, 'users', user.uid), {
                uid: user.uid,
                displayName: username,
                email,
                photoURL: downloadURL,
              });
            })
        }
      );

      navigate('/login')
      toast.success(`You've been registered :)`);
      setLoading(false);


    } catch (error) {
      toast.error('Signup error:', error);

    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' className='m-auto text-center'>
            <h3 className='fw-bold fs-4 mb-4'>Signup</h3>
            <Form className='auth_form' onSubmit={signup}>
              <FormGroup className='form_group'>
                <input
                  type='text'
                  placeholder='Username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormGroup>

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
              <FormGroup className='form_group'>
                <input
                  type='file'
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </FormGroup>

              <button
                type='submit'
                className='add_button auth_button mt-4'
                disabled={loading}
              >
                {loading ? 'Creating Account...' : 'Create an Account'}
              </button>
              <p className='mt-4'>
                Already have an account? <Link to='/login'>Login</Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Signup;
