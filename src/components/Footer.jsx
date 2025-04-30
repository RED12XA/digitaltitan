/*import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-linksz">
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

export default Footer;*/
import React from 'react';

function Footer() {
  return (
    <footer className="footer travel-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-branding">
            <h2 className="footer-logo">Wanderly</h2>
            <p className="footer-tagline">Your journey begins here.</p>
          </div>
          <nav className="footer-links" aria-label="Travel Footer Navigation">
            <div className="footer-link-group">
              <h3>Discover</h3>
              <ul>
                <li><a href="/destinations">Top Destinations</a></li>
                <li><a href="/guides">Travel Guides</a></li>
                <li><a href="/experiences">Experiences</a></li>
              </ul>
            </div>
            <div className="footer-link-group">
              <h3>Plan</h3>
              <ul>
                <li><a href="/itineraries">Itineraries</a></li>
                <li><a href="/deals">Deals & Offers</a></li>
                <li><a href="/travel-tips">Travel Tips</a></li>
              </ul>
            </div>
            <div className="footer-link-group">
              <h3>Connect</h3>
              <ul>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/community">Traveler Community</a></li>
                <li><a href="/newsletter">Newsletter</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-social">
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://pinterest.com" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-pinterest-p"></i>
          </a>
          <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Wanderly. Adventure awaits.</p>
          <p><a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Use</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
