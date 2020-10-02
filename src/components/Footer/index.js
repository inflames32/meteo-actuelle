import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Footer = () => (
  <div className="footer-container">
    <Link to="/" className="footer-container-title">What's the weather today?</Link>
  </div>

);

export default Footer;
