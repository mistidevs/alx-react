import { getFooterCopy, getFullYear } from '../utils/utils.js';
import './Footer.css'
import React from 'react';

const Footer = () => {
  return (
  <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
  </footer>
  );
}

export default Footer;
