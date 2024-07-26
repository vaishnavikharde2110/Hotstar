import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#careers">Careers</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>View Website in</h3>
        <div className="language-selection">
          <span>English</span>
          <i className="arrow-down"></i> {/* You can use an icon library or an image for the arrow */}
        </div>
      </div>
      <div className="footer-section">
        <h3>Need Help?</h3>
        <ul>
          <li><a href="#help-center">Visit Help Center</a></li>
          <li><a href="#share-feedback">Share Feedback</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Connect with Us</h3>
        {/* <div className="social-icons">
          <a href="#facebook"><img src="facebook-icon.png" alt="Facebook" /></a>
          <a href="#twitter"><img src="twitter-icon.png" alt="Twitter" /></a>
        </div>
        <div className="app-links">
          <a href="#google-play"><img src="google-play-badge.png" alt="Google Play" /></a>
          <a href="#app-store"><img src="app-store-badge.png" alt="App Store" /></a>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 STAR. All Rights Reserved.</p>
        <ul>
          <li><a href="#terms-of-use">Terms Of Use</a></li>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
