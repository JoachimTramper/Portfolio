export type Project = {
  slug: string
  title: string
  date: string
  status: 'Public' | 'Private'
  stack: string[]
  summary: string
  description: string
  demo?: string | null
  demoLabel?: string
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
    date: 'August 2025',
    status: 'Private',
    stack: [
      'TypeScript',
      'Node.js',
      'Vite',
      'React',
      'Firebase Firestore',
      'Tailwind CSS',
      'Vercel',
      'Railway',
    ],
    summary:
      'Web3 verification portal with wallet login, NFT ownership checks, and conditional user flows.',
    description:
      'A production-ready full-stack application used to verify Solana wallet ownership and NFT possession as part of the Meme Theft Auto ecosystem. ' +
      'The system enables users to submit their Social Club username, wallet address, and a short profile video, after which they are assigned to a Rockstar Crew. An admin manually verifies the user’s earned online cash and, once approved, assigns them a corresponding amount of MTA tokens. The user can then mint a free access NFT, which grants entry to a personalized dashboard.',
    demo: 'https://verify.memetheftauto.io',
    demoLabel: 'Live App',
    github: null,
    problem:
      'Ensure that only legitimate users can mint the access NFT and enter restricted parts of the Meme Theft Auto ecosystem, without violating Rockstar’s strict policy on obtaining third-party profile information.',
    analysis:
      'Designed a hybrid verification flow that combines off-chain identity validation with on-chain access control. ' +
      'Because Rockstar strictly prohibits access to third-party Social Club profiles, we introduced a manual video-based verification step. ' +
      'Users upload a screen recording of their own profile, after which an admin verifies identity within a shared crew and assigns an amount based on the user’s in-game earnings. ' +
      'Once eligible, the user mints an access NFT via an external flow. NFT ownership is then validated on-chain to grant access to a personalized dashboard — where the assigned amount is converted into MTA tokens.',
    solution:
      'Built a React/Node.js application powered by Firebase Firestore and deployed via Vercel and Railway. ' +
      'Authentication is handled through Solana Wallet Adapter, allowing users to connect their wallet before submitting a verification request. ' +
      'The app supports video uploads (profile walkthrough), wallet address capture, and crew assignment. ' +
      'Admins review each submission within a custom admin panel, verify identity based on the shared crew and video proof, and assign an earned amount. ' +
      'After minting the access NFT via an external flow, users gain entry to a gated dashboard — where the admin-assigned amount is converted into MTA tokens.',
    result:
      'Successful live deployment at verify.memetheftauto.io, enabling secure, gated access to the Meme Theft Auto ecosystem without violating Rockstar’s third-party data policy. ' +
      'The system offers a clear user journey — from wallet connection and video verification to dashboard access and MTA token distribution — supported by a clean UI for both users and admins. ' +
      'Built with scalability in mind, the platform lays a solid foundation for expanding the ecosystem — with potential for features like leaderboards, token-gated experiences, or on-chain rewards.',
    videos: [
      {
        title: 'User (Mobile)',
        url: 'https://www.youtube.com/watch?v=G6R77x1RaMI',
      },
      {
        title: 'User (Desktop)',
        url: 'https://www.youtube.com/watch?v=Iooi4OERE2Q',
      },
      {
        title: 'Admin Panel',
        url: 'https://www.youtube.com/watch?v=hqYGYx-wSuY',
      },
    ],
    note: 'Both user demo videos exclude the admin-side verification. Refer to the admin video for that part.',
  },
  {
    slug: 'ecommerce-api',
    title: 'E-Commerce REST API (Backend-only)',
    date: 'June 2025',
    status: 'Public',
    stack: [
      'Python',
      'Django REST Framework',
      'PostgreSQL',
      'Redis',
      'Celery',
      'Docker',
      'Railway',
      'SendGrid',
      'Sentry',
      'OpenAPI/Swagger',
      'JWT',
    ],
    summary:
      'Production-ready backend API with atomic stock reservations, secure webhooks, CI/CD and typed SDK.',
    description:
      'Professional-grade backend service built to apply backend best practices from a dedicated program. ' +
      'Provides end-to-end order lifecycle handling (cart → checkout → payment) with Swagger UI for interactive docs ' +
      'and a generated TypeScript Axios SDK for seamless client integration.',
    demo: 'https://api.joachimtramper.dev',
    demoLabel: 'Live Demo',
    github: 'https://github.com/joachimtramper/E-Commerce-REST-API---Django-REST-Framework',
    videos: [
      {
        title: 'User Features',
        url: 'https://youtu.be/iGAfOA99M4M',
      },
      {
        title: 'Admin Features',
        url: 'https://youtu.be/qXba4KJ0Xi0',
      },
    ],
    note:
      'These demo videos show the main API flows. For full technical details — including CI/CD setup, ' +
      'architecture decisions, and advanced features — please check the README on GitHub.',
    problem:
      'Build a robust e-commerce backend that guarantees transactional integrity, security and clear developer UX.',
    analysis:
      'Defined the data model and order lifecycle; planned atomic stock holds and payment confirmation via webhooks; ' +
      'set up CI/CD with tests, linting and security scans.',
    solution:
      'Implemented DRF endpoints with JWT (+ optional TOTP 2FA), atomic stock reservation with a 10-minute hold, ' +
      'secure webhook processing (custom header), background jobs via Celery/Redis, ' +
      'typed OpenAPI docs + generated TS Axios client; Dockerized deployment on Railway.',
    result:
      'Reliable checkout flow; faster developer onboarding via Swagger UI and typed SDK; ' +
      'production-style deployments with monitoring and audit trails.',
  },
]
