import { companyExperience, education } from '../data/experience.js';
import '../styles/Experience.css';

function Experience() {
  return (
    <div className="experience-page section-pad">
      <section className="container experience-hero">
        <span className="eyebrow">Experience & Education</span>
        <h1>Practical frontend experience shaped through real interface work.</h1>
        <p>
          A focused view of company-style project experience, frontend responsibilities, and
          continued education in modern web development.
        </p>
      </section>

      <section className="container experience-section">
        <div className="section-heading">
          <span className="eyebrow">Company Experience</span>
          <h2>Frontend work across dashboards, portfolios, and commerce interfaces.</h2>
        </div>
        <div className="experience-list">
          {companyExperience.map((item) => (
            <article className="experience-card" key={`${item.role}-${item.period}`}>
              <div className="experience-meta">
                <span>{item.period}</span>
                <strong>{item.company}</strong>
              </div>
              <div>
                <h3>{item.role}</h3>
                <p>{item.description}</p>
                <div className="experience-points">
                  {item.points.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container education-section">
        <div className="section-heading">
          <span className="eyebrow">Education</span>
          <h2>Learning focused on production-ready frontend development.</h2>
        </div>
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={`${item.title}-${item.period}`}>
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <strong>{item.institution}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Experience;
