import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' }
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Primary navigation">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">AP</span>
          <span>Aisha Pandit</span>
        </NavLink>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
