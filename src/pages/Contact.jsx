import { Link } from 'react-router-dom';
import { FiBriefcase, FiGithub, FiInstagram, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import '../styles/Contact.css';

const contactDetails = [
  {
    label: 'Availability',
    value: 'Open to frontend projects',
    Icon: FiBriefcase
  },
  {
    label: 'Location',
    value: 'Bihar, India',
    Icon: FiMapPin
  },
  {
    label: 'Project Focus',
    value: 'React, Shopify, responsive UI',
    Icon: FiMail
  }
];

const socialItems = [
  { label: 'Instagram', caption: 'Portfolio updates', Icon: FiInstagram },
  { label: 'LinkedIn', caption: 'Professional profile', Icon: FiLinkedin },
  { label: 'GitHub', caption: 'Code and projects', Icon: FiGithub }
];

function Contact() {
  return (
    <div className="contact-page section-pad">
      <section className="container contact-hero">
        <span className="eyebrow">Contact</span>
        <h1>Let's shape a clean frontend experience for your next project.</h1>
        <p>
          Share the essentials of your website, Shopify store, or dashboard idea. I will review the
          project details with a practical, design-aware frontend perspective.
        </p>
      </section>

      <section className="container contact-layout">
        <aside className="contact-panel">
          <div className="contact-panel-head">
            <span>Start here</span>
            <h2>Project-ready communication, without the clutter.</h2>
            <p>
              Use the form for project details, or keep the social icons as profile touchpoints once
              live links are available.
            </p>
          </div>

          <div className="contact-detail-list">
            {contactDetails.map(({ label, value, Icon }) => (
              <article className="contact-detail" key={label}>
                <div className="contact-detail-icon">
                  <Icon aria-hidden="true" />
                </div>
                <div>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              </article>
            ))}
          </div>

          <div className="contact-social-panel">
            <div className="contact-social-heading">
              <span>Connect</span>
              <Link to="/contact" aria-label="Mail">
                <FiMail aria-hidden="true" />
                Mail
              </Link>
            </div>
            <div className="contact-social-grid" aria-label="Social icons">
              {socialItems.map(({ label, caption, Icon }) => (
                <span className="contact-social-item" key={label} title={label}>
                  <Icon aria-hidden="true" />
                  <span>
                    <strong>{label}</strong>
                    <small>{caption}</small>
                  </span>
                </span>
              ))}
            </div>
          </div>
        </aside>

        <form className="contact-form">
          <div className="form-heading">
            <span className="eyebrow">Project Brief</span>
            <h2>Tell me what you want to build.</h2>
          </div>
          <div className="form-row">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" />
            </label>
          </div>
          <label>
            Project Type
            <select name="project">
              <option>Portfolio Website</option>
              <option>Shopify Store</option>
              <option>Dashboard UI</option>
              <option>Frontend Build</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows="6" placeholder="Tell me about your project"></textarea>
          </label>
          <button className="btn btn-primary" type="button">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
