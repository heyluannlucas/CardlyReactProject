import React, { useRef, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/images/icon.svg';
import userIcon from '../../assets/images/666201.png';
import { motion } from 'framer-motion';
import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../custom-hooks/useAuth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';

const nav_links = [
  { path: 'home', display: 'Home' },
  { path: 'shop', display: 'Shop' },
  { path: 'cart', display: 'Cart' },
];

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const profileActionRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const stickyHeaderFun = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  const navigateToCart = () => {
    navigate('/cart');
  };

  const toggleProfileActions = () => {
    const profileActions = profileActionRef.current;
    profileActions.style.display = profileActions.style.display === 'block' ? 'none' : 'block';
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success('Logged Out');
        navigate('/home');
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    stickyHeaderFun();

    return () => window.removeEventListener('scroll', stickyHeaderFun);
  });

  const goHome = () => {
    navigate('/home')
  }

  const menuToggle = () => menuRef.current.classList.toggle('active_menu');

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div>
            <div className="nav_wrapper">
              <div className="logo" onClick={goHome}>
                <img src={logo} alt="logo" />
                <div>
                  <h1>Cardly.com</h1>
                </div>
              </div>

              <div className="navigation" ref={menuRef} onClick={menuToggle}>
                <ul className="menu">
                  {nav_links.map((item, index) => (
                    <li className="nav_item" key={index}>
                      <a
                        href={`/${item.path}`}
                        className={window.location.pathname === `/${item.path}` ? 'nav_active' : ''}
                      >
                        {item.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="nav_icons">
                <span className="fav_icon">
                  <i className="ri-heart-line"></i>
                  <span className="badge">1</span>
                </span>
                <span className="cart_icon" onClick={navigateToCart}>
                  <a href="/cart">
                    <span className="badge">{totalQuantity}</span>
                    <i className="ri-shopping-cart-2-line"></i>
                  </a>
                </span>

                <div className="profile">
                  <motion.img
                    whileTap={{ scale: 1.1 }}
                    src={currentUser ? currentUser.photoURL : userIcon}
                    alt=""
                    onClick={toggleProfileActions}
                  />

                  <div
                    className="profile_actions"
                    ref={profileActionRef}
                    onClick={toggleProfileActions}
                  >
                    {currentUser ? (
                      <span onClick={logout}>Logout</span>
                    ) : (
                      <div className="d-flex align-items-center justify-content-center flex-column">
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mobile_menu">
                  <span onClick={menuToggle}>
                    <i className="ri-menu-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
