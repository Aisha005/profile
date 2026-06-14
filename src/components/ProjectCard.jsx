import '../styles/Projects.css';

function ProjectCard({ project }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-card-top">
        <span>{project.category}</span>
        <div className="project-accent" aria-hidden="true"></div>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tags" aria-label={`${project.title} technologies`}>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
