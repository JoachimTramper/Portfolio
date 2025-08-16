import { projects } from '@/data/projects'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Selected Projects</h1>
      <div className="grid-auto">
        {projects.map((p) => (
          <Link
            to={`/projects/${p.slug}`}
            key={p.slug}
            className="card block"
            aria-label={`Open case: ${p.title}`}
            title={p.status === 'Private' ? 'Private (code not public)' : 'Public'}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <span className="badge">{p.status}</span>
            </div>

            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {p.summary}
            </p>

            <ul className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-500">
              {p.stack.map((tech) => (
                <li key={tech} className="badge">
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-3 text-sm">View case →</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
