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
          problems, whether in e-commerce infrastructure or blockchain-based access control.
        </p>

        <p>
          One of my most recent projects is a Solana-based NFT verification platform, built for the
          Meme Theft Auto ecosystem. It combines wallet authentication, user-submitted video and
          profile data, and admin approval flows to verify eligibility. Approved users receive a
          free access NFT, which unlocks their personal dashboard and MTA token rewards.
        </p>

        <p>
          I also built a comprehensive e-commerce REST API, designed for performance, reliability,
          and ease of integration. It includes a full-featured cart and checkout system with atomic
          stock locking, secure payment flows, and optional two-factor authentication. The backend
          is fully containerized and production-deployed with monitoring, background tasks, and a
          typed TypeScript SDK.
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
