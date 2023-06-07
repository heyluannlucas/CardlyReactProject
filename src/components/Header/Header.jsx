import React, { useRef, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/images/icon.svg';
import userIcon from '../../assets/images/666201.png';
import { motion } from 'framer-motion';
import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

const nav_links = [
  { path: 'home', display: 'Home' },
  { path: 'shop', display: 'Shop' },
  { path: 'cart', display: 'Cart' },
];

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const menuRef = useRef(null);

  const stickyHeaderFun = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFun();

    return () => window.removeEventListener('scroll', stickyHeaderFun);
  });

  const menuToggle = () => menuRef.current.classList.toggle('active_menu');

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div>
            <div className="nav_wrapper">
              <div className="logo">
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
                <span className="cart_icon">
                  <a href="/cart"> 
                    <span className="badge">{totalQuantity}</span>
                    <i className="ri-shopping-cart-2-line"></i>
                  </a>
                </span>

                <span>
                  <motion.img whileTap={{ scale: 1.1 }} src={userIcon} alt="" />
                </span>
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
