import React from 'react';
import './Header.css';
import logo from '../../assets/images/Cardly logo.png';
import userIcon from '../../assets/images/666201.png';
import { motion } from 'framer-motion';
import { Container, Row } from 'reactstrap';

const nav_links = [
  { path: 'home', display: 'Home' },
  { path: 'shop', display: 'Shop' },
  { path: 'cart', display: 'Cart' },
];

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div>
            <div className='nav_wrapper'>
              <div className='logo'>
                <img src={logo} alt='logo' />
                <div>
                  <h1>Cardly.com</h1>
                </div>
              </div>

              <div className='navigation'>
                <ul className='menu'>
                  {nav_links.map((item, index) => (
                    <li className='nav_item' key={index}>
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

              <div className='nav_icons'>
                <span className='fav_icon'>
                  <i className='ri-heart-line'></i>
                  <span className='badge'>1</span>
                </span>
                <span className='cart_icon'>
                  <span className='badge'>1</span>
                  <i className='ri-shopping-cart-2-line'></i>
                </span>

                <span>
                  <motion.img whileTap={{ scale: 1.1 }} src={userIcon} alt='' />
                </span>
              </div>

              <div className='mobile_menu'>
                <span>
                  <i className='ri-menu-line'></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
