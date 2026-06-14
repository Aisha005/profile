import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className="projects-page section-pad">
      <section className="container projects-hero">
        <span className="eyebrow">Project Portfolio</span>
        <h1>Selected builds across HRMS platforms and Shopify commerce.</h1>
        <p>
          Each project highlights practical frontend thinking: responsive structure, readable
          interfaces, strong visual hierarchy, and details that make digital products feel premium.
        </p>
      </section>

      <section className="container filter-row" aria-label="Project categories">
        <span>All</span>
        <span>Dashboard</span>
        <span>Shopify</span>
        <span>Responsive UI</span>
      </section>

      <section className="container project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </div>
  );
}

export default Projects;
