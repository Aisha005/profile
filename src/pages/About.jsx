import { skills } from '../data/projects.js';
import '../styles/About.css';

const timeline = [
  {
    year: '2026',
    title: 'Frontend Portfolio',
    text: 'Focused on building refined React interfaces, responsive layouts, and modern portfolio experiences.'
  },
  {
    year: '2025',
    title: 'Shopify Projects',
    text: 'Created store interfaces with polished product presentation, theme customization, and mobile-first commerce flows.'
  },
  {
    year: '2024',
    title: 'HRMS UI Work',
    text: 'Designed dashboard screens for people operations, data display, and clear administrative workflows.'
  }
];

const stack = ['React', 'JavaScript', 'CSS Grid', 'Flexbox', 'Shopify', 'Liquid', 'Vite', 'Git'];

function About() {
  return (
    <div className="about-page section-pad">
      <section className="container about-hero">
        <span className="eyebrow">About Aisha</span>
        <h1>Frontend Developer building elegant digital interfaces from Bihar, India.</h1>
        <p>
          I enjoy turning product ideas into polished, accessible, and responsive user interfaces.
          My work focuses on clean component structure, sharp visual details, and smooth experiences
          across every screen size.
        </p>
      </section>

      <section className="container about-grid">
        <div className="about-card">
          <h2>Professional Summary</h2>
          <p>
            I specialize in frontend development for portfolio websites, HRMS dashboards, and
            Shopify storefronts. I care about layouts that feel premium, content that is easy to
            scan, and interfaces that perform well in real-world use.
          </p>
        </div>
        <div className="about-card intro-card">
          <h2>Personal Introduction</h2>
          <p>
            I am Aisha Pandit, a frontend developer with a detail-oriented approach to design and
            implementation. I like building web experiences that feel calm, confident, and useful.
          </p>
        </div>
      </section>

      <section className="container skill-section">
        <div className="section-heading">
          <span className="eyebrow">Capabilities</span>
          <h2>Skills that support polished product experiences.</h2>
        </div>
        <div className="skill-list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="container timeline-section">
        <div className="section-heading">
          <span className="eyebrow">Experience</span>
          <h2>A focused path through frontend and commerce work.</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article key={item.title} className="timeline-item">
              <span>{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container stack-section">
        <div className="section-heading">
          <span className="eyebrow">Technology Stack</span>
          <h2>Tools I use to build reliable frontend interfaces.</h2>
        </div>
        <div className="stack-grid">
          {stack.map((tool) => (
            <div key={tool}>{tool}</div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
