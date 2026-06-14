import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="footer-brand">
            Aisha Pandit
          </Link>
          <p>Frontend Developer crafting elegant, responsive web experiences from Bihar, India.</p>
        </div>
        <div className="footer-links" aria-label="Footer links">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Aisha Pandit. All rights reserved.</span>
        <span>Built with React and plain CSS.</span>
      </div>
    </footer>
  );
}

export default Footer;
