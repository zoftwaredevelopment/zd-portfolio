export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="card-meta">
        <span className="tag">{project.category}</span>
        <span className="tag url">{project.tag}</span>
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="card-actions">
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Visit site &rarr;
        </a>
      </div>
    </article>
  )
}
