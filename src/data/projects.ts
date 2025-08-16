export type Project = {
  slug: string
  title: string
  status: 'Public' | 'Private'
  stack: string[]
  summary: string
  description: string
  demo?: string | null
  github?: string | null
  problem?: string
  analysis?: string
  solution?: string
  result?: string
  videos: { title: string; url: string }[]
  note: string
}

export const projects: Project[] = [
  {
    slug: 'verify-mta',
    title: 'Meme Theft Auto – Access Verification App',
    status: 'Private',
    stack: ['TypeScript', 'Node.js', 'Vite', 'React', 'Firebase Firestore', 'Tailwind CSS', 'Vercel', 'Railway'],
    summary: 'Web3 verification portal with wallet login, NFT ownership checks, and conditional user flows.',
    description:
      'A production-ready full-stack application used to verify Solana wallet ownership and NFT possession as part of the Meme Theft Auto ecosystem. '
      + 'The system enables users to request a unique code, place it in their Rockstar Social Club bio, and—after admin validation—unlock access to a personalized dashboard.',
    demo: 'https://verify.memetheftauto.io',
    github: null,
    problem: 'Ensure only users who minted and currently hold the correct NFT can access exclusive parts of the Meme Theft Auto ecosystem.',
    analysis: 'Mapped a hybrid flow combining on-chain verification with off-chain user validation. '
      + 'Because Rockstar offers no public API and explicitly disallows scraping, we introduced a manual code-based verification step. '
      + 'Admins review submitted Social Club profiles and assign points accordingly.',
    solution: 'Developed a React/Node.js application using Solana Wallet Adapter for authentication. '
      + 'Users generate a verification code, connect their wallet, and place the code in their Social Club bio. '
      + 'Admins manually confirm these profiles, assign points, and mark users as verified. '
      + 'Upon next login, users with a verified status and required NFT in their wallet are granted access to a custom dashboard.',
    result: 'Successful live deployment at verify.memetheftauto.io. The system ensures gated access while staying compliant with platform restrictions. '
      + 'Clear UX for both users and admins, with an extensible foundation for further ecosystem engagement features.',
    videos: [],
    note: ''
  },
  {
    slug: 'ecommerce-api',
    title: 'E-Commerce REST API (Backend-only)',
    status: 'Public',
    stack: [
      'Python', 'Django REST Framework', 'PostgreSQL', 'Redis',
      'Celery', 'Docker', 'Railway', 'SendGrid', 'Sentry', 'OpenAPI/Swagger', 'JWT'
    ],
    summary:
      'Production-ready backend API with atomic stock reservations, secure webhooks, CI/CD and typed SDK.',
    description:
      'Professional-grade backend service built to apply backend best practices from a dedicated program. '
      + 'Provides end-to-end order lifecycle handling (cart → checkout → payment) with Swagger UI for interactive docs '
      + 'and a generated TypeScript Axios SDK for seamless client integration.',
    demo: 'https://www.joachimtramper.dev',
    github: 'https://github.com/joachimtramper/E-Commerce-REST-API---Django-REST-Framework',
    videos: [
      {
        title: 'User Features Video',
        url: 'https://youtu.be/iGAfOA99M4M'
      },
      {
        title: 'Admin Features Video',
        url: 'https://youtu.be/qXba4KJ0Xi0'
      }
    ],
    note:
      'These demo videos show the main API flows. For full technical details — including CI/CD setup, '
      + 'architecture decisions, and advanced features — please check the README on GitHub.',
    problem:
      'Build a robust e-commerce backend that guarantees transactional integrity, security and clear developer UX.',
    analysis:
      'Defined the data model and order lifecycle; planned atomic stock holds and payment confirmation via webhooks; '
      + 'set up CI/CD with tests, linting and security scans.',
    solution:
      'Implemented DRF endpoints with JWT (+ optional TOTP 2FA), atomic stock reservation with a 10-minute hold, '
      + 'secure webhook processing (custom header), background jobs via Celery/Redis, '
      + 'typed OpenAPI docs + generated TS Axios client; Dockerized deployment on Railway.',
    result:
      'Reliable checkout flow; faster developer onboarding via Swagger UI and typed SDK; '
      + 'production-style deployments with monitoring and audit trails.',
  }
]
