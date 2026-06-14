import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-page section-pad">
      <section className="container contact-hero">
        <span className="eyebrow">Contact</span>
        <h1>Let’s create a frontend experience that feels polished from the first click.</h1>
        <p>
          Have a portfolio, business website, Shopify store, or dashboard idea? Send a message and
          start the conversation.
        </p>
      </section>

      <section className="container contact-grid">
        <div className="contact-info">
          <article>
            <span>Email</span>
            <strong>hello@aishapandit.dev</strong>
          </article>
          <article>
            <span>Location</span>
            <strong>Bihar, India</strong>
          </article>
          <article>
            <span>Role</span>
            <strong>Frontend Developer</strong>
          </article>
          <div className="social-row" aria-label="Social media links">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>

        <form className="contact-form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" />
          </label>
          <label>
            Project Type
            <select name="project">
              <option>Portfolio Website</option>
              <option>Shopify Store</option>
              <option>Dashboard UI</option>
              <option>Other Frontend Work</option>
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

      <section className="container contact-cta">
        <span className="eyebrow">Available for Projects</span>
        <h2>Clean code, sharp layouts, and responsive design for modern brands.</h2>
      </section>
    </div>
  );
}

export default Contact;
