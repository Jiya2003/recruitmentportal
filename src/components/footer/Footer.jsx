import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-links">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram"></i>
        </a>
      </div>
      <p className="footer-text">© 2023 TalentPlus. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
