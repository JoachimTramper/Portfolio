import { Link } from 'react-router-dom'
import { Folders, Mail } from 'lucide-react'

export default function Home() {
  return (
    <section className="py-6 space-y-6">
      <h1 className="text-3xl font-bold mb-10">Joachim Tramper</h1>

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
          One of my most recent projects is a Solana-based NFT verification platform, built for the
          Meme Theft Auto ecosystem. It combines wallet authentication, user-submitted video and
          profile data, and admin approval flows to verify eligibility. Approved users receive a
          free access NFT, which unlocks their personal dashboard and MTA token rewards.
        </p>

        <p>
          I also built a comprehensive e-commerce REST API using Django REST Framework, designed for
          performance, maintainability, and full test coverage. It features an advanced cart and
          checkout system with atomic stock reservation, JWT authentication with optional 2FA,
          secure webhook-based payment confirmation, and a fully typed TypeScript-Axios SDK
          generated from an OpenAPI schema. The stack is containerized with Docker and deployed via
          Railway, with logging, monitoring via Sentry, and scheduled background tasks powered by
          Celery.
        </p>

        <p>
          I combine deep technical know-how with a pragmatic approach to product development. I'm
          passionate about building systems that are secure, scalable, and developer-friendly.
          They’re designed not just to work, but to work well in production.
        </p>
      </div>

      <div className="flex gap-3">
        <Link to="/projects" className="btn btn-accent flex items-center gap-2">
          <Folders size={16} /> View projects
        </Link>
        <Link to="/contact" className="btn btn-accent flex items-center gap-2">
          <Mail size={16} /> Get in touch
        </Link>
      </div>
    </section>
  )
}
