import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects, skills } from '../data/projects.js';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero section-pad">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Aisha Pandit / Frontend Developer</span>
            <h1>Clean React and Shopify interfaces for modern brands.</h1>
            <p>
              Based in Bihar, India, I build polished web experiences with crisp layouts, smooth
              interactions, and responsive details that feel reliable on every screen.
            </p>
            <div className="hero-tags" aria-label="Primary services">
              <span>React UI</span>
              <span>Shopify Stores</span>
              <span>Dashboard Design</span>
            </div>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/projects">
                View Projects
              </Link>
              <Link className="btn btn-secondary" to="/contact">
                Contact Me
              </Link>
            </div>
          </div>

          <div className="hero-showcase" aria-label="Aisha Pandit portfolio preview">
            <div className="showcase-topline">
              <span>Available for frontend projects</span>
              <strong>2026</strong>
            </div>
            <div className="showcase-monogram" aria-hidden="true">
              AP
            </div>
            <p>Premium portfolio, HRMS, and Shopify storefront development.</p>
            <div className="hero-metrics">
              <div>
                <strong>04</strong>
                <span>Featured Projects</span>
              </div>
              <div>
                <strong>320+</strong>
                <span>Responsive Width</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container section-heading">
          <span className="eyebrow">Selected Skills</span>
          <h2>Frontend craft with a commerce-ready mindset.</h2>
        </div>
        <div className="container skill-cloud">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section-pad feature-band">
        <div className="container section-heading split-heading">
          <div>
            <span className="eyebrow">Featured Work</span>
            <h2>Interfaces built for clarity, speed, and trust.</h2>
          </div>
          <Link className="text-link" to="/projects">
            Explore all projects
          </Link>
        </div>
        <div className="container project-grid compact">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container stats-grid">
          <div>
            <strong>100%</strong>
            <span>Responsive layouts</span>
          </div>
          <div>
            <strong>4K</strong>
            <span>Large screen ready</span>
          </div>
          <div>
            <strong>320px</strong>
            <span>Mobile-first support</span>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container cta-panel">
          <span className="eyebrow">Let's Collaborate</span>
          <h2>Need a clean, premium frontend for your next idea?</h2>
          <Link className="btn btn-primary" to="/contact">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
