import React from 'react';
import '../assets/css/SinglePage.css'; // Assuming you will style this with an external CSS file

function SingelPage() {
  return (
    <div className="single-page-container">
      {/* Main Content Section */}
      <div className="main-content">
        <img 
          src="https://via.placeholder.com/1200x400" 
          alt="Travel Destination" 
          className="blog-image"
        />
        <h1 className="blog-title">Explore the Hidden Gems of Bali</h1>
        <p className="blog-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
      </div>

      {/* Sidebar Section for Ads */}
      <div className="sidebar">
        <div className="ads">
          <h3>Sponsored Ads</h3>
          <div className="ad">
            <img src="https://via.placeholder.com/300x250" alt="Ad 1" />
          </div>
          <div className="ad">
            <img src="https://via.placeholder.com/300x250" alt="Ad 2" />
          </div>
        </div>
      </div>

      {/* Similar Articles Section */}
      <div className="similar-articles">
        <h3>Similar Articles</h3>
        <div className="article">
          <h4>10 Best Beaches in Bali</h4>
        </div>
        <div className="article">
          <h4>How to Travel on a Budget in Bali</h4>
        </div>
        <div className="article">
          <h4>Top 5 Luxury Resorts in Bali</h4>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 Travel Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SingelPage;
