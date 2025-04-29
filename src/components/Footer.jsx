import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-link-group">
            <h3>About Us</h3>
            <a href="/about">Our Story</a>
            <a href="/team">Our Team</a>
            <a href="/careers">Careers</a>
          </div>
          <div className="footer-link-group">
            <h3>Services</h3>
            <a href="/services">What We Offer</a>
            <a href="/pricing">Pricing</a>
            <a href="/faq">FAQ</a>
          </div>
          <div className="footer-link-group">
            <h3>Contact</h3>
            <a href="/contact">Get in Touch</a>
            <a href="/support">Support</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;