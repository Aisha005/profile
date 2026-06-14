import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import '../styles/Footer.css';

const footerLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' }
];

const focusAreas = ['React Interfaces', 'Shopify Stores', 'HRMS Dashboards', 'Responsive UI'];

const socialIcons = [
  { label: 'Instagram', Icon: FiInstagram },
  { label: 'LinkedIn', Icon: FiLinkedin },
  { label: 'GitHub', Icon: FiGithub }
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-cta">
        <div>
          <span className="eyebrow">Available for Projects</span>
          <h2>Let's build a frontend that feels sharp, smooth, and dependable.</h2>
        </div>
        <Link className="btn btn-primary" to="/contact">
          Start a Project
        </Link>
      </div>

      <div className="container footer-grid">
        <div className="footer-about">
          <Link to="/" className="footer-brand">
            <span className="footer-mark">AP</span>
            <span>Aisha Pandit</span>
          </Link>
          <p>
            Frontend Developer from Bihar, India, crafting clean React interfaces, Shopify
            storefronts, and responsive business dashboards.
          </p>
          <div className="footer-socials" aria-label="Social icons">
            <Link className="social-icon" to="/contact" aria-label="Mail">
              <FiMail aria-hidden="true" />
            </Link>
            {socialIcons.map(({ label, Icon }) => (
              <span className="social-icon" key={label} aria-label={label} title={label}>
                <Icon aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <div className="footer-links" aria-label="Footer links">
            {footerLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h3>Focus</h3>
          <div className="footer-focus">
            {focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact</h3>
          <p>Have a website, store, or dashboard idea ready to shape?</p>
          <Link to="/contact">
            Send a message
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>Copyright 2026 Aisha Pandit. All rights reserved.</span>
        <span>Frontend Developer / Bihar, India</span>
      </div>
    </footer>
  );
}

export default Footer;
