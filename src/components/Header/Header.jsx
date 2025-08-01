import React, { useEffect, useRef } from 'react';
import './Header.css';
import Logo from '../../assets/logojon.svg';
import AOS from 'aos';
import Img from '../../assets/illustration.jpg'

const Header = () => {
  const burgerRef = useRef(null);
  const navListRef = useRef(null);

  useEffect(() => {
    AOS.init(); 
    const burger = burgerRef.current;
    const navList = navListRef.current;

    const toggleNav = () => {
      navList.classList.toggle('active');
    };

    burger.addEventListener('click', toggleNav);

    return () => {
      burger.removeEventListener('click', toggleNav); 
    };
  }, []);

  return (
    <>
      <div className="header">
        <div className="container header-container">
          <img src={Logo} alt="Logo" className="logo" />
          
          <div className="burger" ref={burgerRef}>
            ☰
          </div>

          <ul className="header-list" ref={navListRef}>
            <li className="header-item"><a href="#">Home</a></li>
            <li className="header-item"><a href="#">Find a doctor</a></li>
            <li className="header-item"><a href="#">Apps</a></li>
            <li className="header-item"><a href="#">Testimonials</a></li>
            <li className="header-item"><a href="#">About us</a></li>
          </ul>
        </div>
      </div>

      <div className="hero">
        <div className="container hero-container">
          <ul className="hero-list">
            <li data-aos="fade-right" className="hero-item">
              <h1 className="hero-title">Virtual healthcare for you</h1>
              <p className="hero-text">
                Trafalgar provides progressive, and affordable 
                healthcare, accessible on mobile and online 
                for everyone
              </p>
              <button type="button" className="hero-btn">Consult Today</button>
            </li>
            <li>
              <img data-aos="fade-left"  src={Img} alt="Img"  className="hero-img" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
