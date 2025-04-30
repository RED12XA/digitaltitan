import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/SinglePage.css";

function SinglePage() {
  return (
    <div className="single-page-wrapper">
      <div className="container py-4">
        <div className="row">
          {/* Main Content Section - Takes 8 columns on medium and larger screens */}
          <div className="col-lg-8 mb-4">
            <div className="card main-card shadow">
              <img
                src="https://i.ytimg.com/vi/BlTmbVwCv98/maxresdefault.jpg"
                alt="Travel Destination"
                className="card-img-top blog-hero-image"
              />
              <div className="card-body">
                <h1 className="blog-title">Explore the Hidden Gems of Bali</h1>
                <div className="blog-meta">
                  <span className="blog-date">
                    <i className="bi bi-calendar me-2"></i>April 30, 2025
                  </span>
                  <span className="blog-author">
                    <i className="bi bi-person me-2"></i>Travel Expert
                  </span>
                </div>
                <div className="blog-content mt-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                    Duis sagittis ipsum.
                  </p>

                  <p>
                    Praesent mauris. Fusce nec tellus sed augue semper porta.
                    Mauris massa. Vestibulum lacinia arcu eget nulla. Class
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Curabitur sodales ligula in
                    libero.
                  </p>

                  <h2 className="mt-4 mb-3">
                    Why Bali Should Be Your Next Destination
                  </h2>

                  <p>
                    Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque
                    nibh. Aenean quam. In scelerisque sem at dolor. Maecenas
                    mattis. Sed convallis tristique sem. Proin ut ligula vel
                    nunc egestas porttitor.
                  </p>

                  <div className="row mt-4">
                    <div className="col-md-6 mb-3">
                      <div className="highlight-box">
                        <h4>Best Time to Visit</h4>
                        <p>
                          April to October offers the most pleasant weather for
                          exploring Bali's treasures.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="highlight-box">
                        <h4>Local Cuisine</h4>
                        <p>
                          Don't miss trying Babi Guling and Nasi Campur for an
                          authentic taste experience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Similar Articles Section */}
            <div className="similar-articles mt-4">
              <h3 className="section-title">Similar Articles</h3>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="article-card">
                    <div className="card h-100 shadow-sm">
                      <img
                        src="https://www.gap360.com/tpl/lib/img/private/media/alfiano-sutianto-exfdowkybqw-unsplash-2.jpg"
                        className="card-img-top"
                        alt="Beach"
                      />
                      <div className="card-body">
                        <h5 className="card-title">10 Best Beaches in Bali</h5>
                        <p className="card-text">
                          Discover the most beautiful beaches that Bali has to
                          offer.
                        </p>
                        <a href="#" className="btn btn-sm read-more-btn">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="article-card">
                    <div className="card h-100 shadow-sm">
                      <img
                        src="https://www.thepoortraveler.net/wp-content/uploads/2019/12/Bali-Travel-Guide-1024x576.jpg"
                        className="card-img-top"
                        alt="Budget Travel"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          How to Travel on a Budget in Bali
                        </h5>
                        <p className="card-text">
                          Tips and tricks for experiencing Bali without breaking
                          the bank.
                        </p>
                        <a href="#" className="btn btn-sm read-more-btn">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="article-card">
                    <div className="card h-100 shadow-sm">
                      <img
                        src="https://api.photon.aremedia.net.au/wp-content/uploads/sites/10/2024/07/1703641579744_Best-Bali-resort-The-Bulgari-Villa-Exterior-edited.jpg?resize=1200%2C675"
                        className="card-img-top"
                        alt="Luxury Resort"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          Top 5 Luxury Resorts in Bali
                        </h5>
                        <p className="card-text">
                          Experience the ultimate luxury at these exclusive
                          Balinese resorts.
                        </p>
                        <a href="#" className="btn btn-sm read-more-btn">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Section - Takes 4 columns on medium and larger screens */}
          <div className="col-lg-4">
            <div className="sidebar">
              <div className="card shadow mb-4">
                <div className="card-header sidebar-header">
                  <h3>Sponsored Ads</h3>
                </div>
                <div className="card-body">
                  <div className="ad mb-3">
                    <img
                      src="https://cdn.create.vista.com/downloads/e81f8e93-40c8-418a-a7c4-f5847784cfa9_1024.jpeg"
                      alt="Ad 1"
                      className="img-fluid"
                    />
                  </div>
                  <div className="ad">
                    <img
                      src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/luxury-hotel-offer-banner-ad-design-template-e674be70806f6236402e9ce5e1aefd23_screen.jpg?ts=1727461830"
                      alt="Ad 2"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              <div className="card shadow mb-4">
                <div className="card-header sidebar-header">
                  <h3>Subscribe</h3>
                </div>
                <div className="card-body">
                  <p>Stay updated with our latest travel stories!</p>
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                    <button type="submit" className="btn subscribe-btn">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>

              <div className="card shadow">
                <div className="card-header sidebar-header">
                  <h3>Popular Tags</h3>
                </div>
                <div className="card-body">
                  <div className="tag-cloud">
                    <a href="#" className="tag">
                      Bali
                    </a>
                    <a href="#" className="tag">
                      Beach
                    </a>
                    <a href="#" className="tag">
                      Travel
                    </a>
                    <a href="#" className="tag">
                      Indonesia
                    </a>
                    <a href="#" className="tag">
                      Vacation
                    </a>
                    <a href="#" className="tag">
                      Food
                    </a>
                    <a href="#" className="tag">
                      Culture
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <h4>Travel Blog</h4>
              <p>Exploring the world one destination at a time.</p>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <h4>Quick Links</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Destinations</a>
                </li>
                <li>
                  <a href="#">Travel Tips</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Connect With Us</h4>
              <div className="social-links">
                <a href="#" className="social-link">
                  Facebook
                </a>
                <a href="#" className="social-link">
                  Twitter
                </a>
                <a href="#" className="social-link">
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="text-center py-3">
            <p>&copy; 2025 Travel Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SinglePage;
