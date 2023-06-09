import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebase.config';
import { storage } from '../firebase.config';
import { ref, uploadBytesResumable, getDowloadURL } from 'firebase/storage';
import { setDoc } from 'firebase/firestore';

import '../styles/login.css';
import { upload } from '@testing-library/user-event/dist/upload';
import { toast } from 'react-toastify';
import { db } from '../firebase.config'

import '../styles/login.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

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
      if (file) {
        const storageRef = storage.ref(`images/${Date.now() + username}`);
        const uploadTask = storageRef.put(file);

        uploadTask.on(
          'state_changed',
          null,
          (error) => {
            toast.error(error.message);
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              // Update user profile with downloadURL
              updateProfile(user, {
                displayName: username,
                photoURL: downloadURL,
              })
                .then(() => {
                  console.log('User profile updated successfully.');
                })
                .catch((error) => {
                  console.log('Error updating user profile:', error);
                });
            });
          }
        );
      } else {
        // Update user profile without photoURL 
        updateProfile(user, {
          displayName: username,
        })
          .then(() => {
            console.log('User profile updated successfully');
          })
          .catch((error) => {
            console.log('Error updating user profile:', error);
          });
      }

      console.log(user);
    } catch (error) {
      toast.error('Signup error:', error);
    } finally {
      setLoading(false);
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
                Already have an account?{' '}
                <Link to='/login'>Login</Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Signup;