import { Link } from 'react-router-dom'
import { Folders, Mail } from 'lucide-react'

export default function Home() {
  return (
    <section className="py-6 space-y-6">
      <div className="card p-8 space-y-6">
        {/* Header block */}
        <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between">
          <h1 className="text-4xl font-extrabold tracking-tight mt-2 sm:mt-1 lg:mt-2">
            Joachim Tramper
          </h1>
          <span
            className="badge text-lg sm:text-sm font-semibold
    -mt-1 sm:mt-0 mb-2 sm:mb-0 self-end sm:self-auto
    sm:px-2 sm:py-0.5
    bg-amber-50 text-amber-700 border-amber-200
    dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-900/40"
          >
            Full-stack Developer
          </span>
        </div>
        <div className="text-zinc-600 dark:text-zinc-400 max-w-2xl space-y-4">
          <p>
            I’m a full-stack developer with a strong engineering mindset, focused on building
            reliable, production-ready software end to end. I work across frontend, backend, and
            infrastructure, with an emphasis on clear system boundaries, maintainable architectures,
            and predictable behavior in production.
          </p>

          <p>
            Most recently, I built Bamboo Comms, a real-time communication platform that explores
            the challenges of state coordination in chat systems, including messaging, presence,
            reactions, read state, and background automation via an embedded AI assistant.
          </p>

          <p>
            Before that, I built a Solana-based NFT verification platform for the Meme Theft Auto
            ecosystem, combining wallet authentication, user-submitted proof, and admin approval
            flows to control access without relying on third-party profile data. Approved users
            receive an access NFT that unlocks a personalized dashboard and on-chain rewards.
          </p>

          <p>
            I also developed a production-grade e-commerce REST API, designed around transactional
            integrity, atomic stock reservation, secure payment flows, and easy client integration
            via typed SDKs and OpenAPI documentation.
          </p>

          <p>
            Across projects, I’m driven by a long-term perspective on software quality, favoring
            systems that stay understandable, adaptable, and resilient as requirements evolve and
            real-world complexity accumulates.
          </p>
        </div>
        <div className="flex gap-3">
          <Link to="/projects" className="btn btn-accent flex items-center gap-2">
            <Folders size={16} />
            {/* short label mobile, long label on sm+ */}
            <span className="sm:hidden">Projects</span>
            <span className="hidden sm:inline">View Projects</span>
          </Link>

          <Link to="/contact" className="btn btn-accent flex items-center gap-2">
            <Mail size={16} />
            <span className="sm:hidden">Contact</span>
            <span className="hidden sm:inline">Get In Touch</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
