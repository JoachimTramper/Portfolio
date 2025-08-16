import { useParams, Link } from 'react-router-dom'
import { projects } from '@/data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <section className="prose dark:prose-invert max-w-none">
        <p>Project not found.</p>
        <Link to="/projects" className="text-sm underline">
          ← Back to projects
        </Link>
      </section>
    )
  }

  return (
    <article className="prose dark:prose-invert max-w-none">
      <nav aria-label="Breadcrumb">
        <Link to="/projects" className="text-sm underline">
          ← Back to projects
        </Link>
      </nav>

      <header className="mb-6">
        <div className="flex items-start justify-between gap-3">
          <h1 className="mb-8">{project.title}</h1> {/* <-- extra ruimte */}
          <span
            className={
              'badge text-sm ' +
              (project.status === 'Public'
                ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-900/40'
                : 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-900/40')
            }
            title={project.status === 'Public' ? 'Code is public' : 'Code is private'}
          >
            {project.status}
          </span>
        </div>

        {project.stack?.length ? (
          <div className="mt-3">
            <div className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Stack
            </div>
            <ul className="mt-2 flex flex-wrap gap-2 text-xs not-prose">
              {project.stack.map((tech) => (
                <li key={tech} className="badge">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </header>

      {/* Overview */}
      {project.description ? (
        <section>
          <h2>Overview</h2>
          <p>{project.description}</p>
        </section>
      ) : null}

      {/* Demos & Documentation */}
      {(project.demo || project.github || project.videos.length > 0) && (
        <section>
          <h2>Demos & Documentation</h2>

          <div className="not-prose mt-3 flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="btn"
                aria-label="Open live demo in a new tab"
              >
                Live demo
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="btn"
                aria-label="Open GitHub repository in a new tab"
              >
                GitHub
              </a>
            )}

            {project.videos.length > 0 &&
              project.videos.map((v) => (
                <a
                  key={v.url}
                  href={v.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn"
                  aria-label={`Open video: ${v.title}`}
                >
                  {v.title}
                </a>
              ))}
          </div>

          {project.note && (
            <p className="mt-2 text-sm text-zinc-600">
              <strong>Note:</strong> {project.note}
            </p>
          )}
        </section>
      )}

      {/* Case Study */}
      {(project.problem || project.analysis || project.solution || project.result) && (
        <section>
          <h2>Case Study</h2>

          {project.problem && (
            <>
              <h3>Problem</h3>
              <p>{project.problem}</p>
            </>
          )}

          {project.analysis && (
            <>
              <h3>Analysis</h3>
              <p>{project.analysis}</p>
            </>
          )}

          {project.solution && (
            <>
              <h3>Solution</h3>
              <p>{project.solution}</p>
            </>
          )}

          {project.result && (
            <>
              <h3>Result</h3>
              <p>{project.result}</p>
            </>
          )}
        </section>
      )}
    </article>
  )
}
