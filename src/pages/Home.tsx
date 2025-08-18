import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="py-10 space-y-6">
      <h1 className="text-3xl font-bold">Joachim Tramper</h1>

      <div className="text-zinc-600 dark:text-zinc-400 max-w-2xl space-y-4">
        <p>
          <strong>Backend-focused full-stack developer</strong>
        </p>

        <p>
          I’m a full-stack developer with a strong focus on backend development and system
          architecture. I thrive on creating robust, scalable solutions that solve real-world
          problems—whether that’s in e-commerce infrastructure or blockchain-powered access control.
        </p>

        <p>
          One of my most recent projects is a Solana-based NFT verification platform, designed to
          verify ownership of NFTs using wallet authentication, collection ID matching via the
          Helius API, and smart access logic integrated with Firebase. From admin approval flows to
          dynamic access checks and session caching, the system ensures a smooth and secure user
          experience.
        </p>

        <p>
          I also built a comprehensive e-commerce REST API using Django REST Framework, engineered
          for performance, maintainability, and full test coverage. It features an advanced cart and
          checkout system with stock reservation, JWT authentication with optional 2FA,
          webhook-based payment confirmation, and a TypeScript-Axios SDK generated from an OpenAPI
          schema. The entire stack is containerized with Docker and deployed using Railway, with
          logging, Sentry monitoring, and periodic tasks managed via Celery.
        </p>

        <p>
          I combine deep technical know-how with a pragmatic approach to product development. I’m
          passionate about building systems that are secure, scalable, and
          developer-friendly—designed not just to work, but to work well in production.
        </p>
      </div>

      <div className="flex gap-3">
        <Link to="/projects" className="btn">
          View projects →
        </Link>
        <Link to="/contact" className="btn">
          Get in touch
        </Link>
      </div>
    </section>
  )
}
