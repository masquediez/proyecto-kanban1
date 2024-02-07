import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="Company Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Web Development Company</h1>
          <p>
            We are a team of passionate developers dedicated to creating amazing
            web experiences.
          </p>
          <button>Contact Us</button>
        </div>
      </section>
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service">
            <h3>Web Design</h3>
            <p>
              We design beautiful and functional websites that leave a lasting
              impression.
            </p>
          </div>
          <div className="service">
            <h3>Web Development</h3>
            <p>
              Our skilled developers bring your vision to life with clean,
              efficient code.
            </p>
          </div>
          <div className="service">
            <h3>SEO Optimization</h3>
            <p>
              Improve your website's visibility and ranking with our SEO
              services.
            </p>
          </div>
        </div>
      </section>
      <section id="portfolio" className="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-gallery">{}</div>
      </section>
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>Learn more about our company and our team of experts.</p>
      </section>
      <footer className="footer">
        <p>Contact us for more information.</p>
      </footer>
    </div>
  );
};
export default Home;
