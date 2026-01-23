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
    slug: 'bamboo-comms',
    title: 'Bamboo Comms – Real-time Messaging Platform',
    date: 'January 2026',
    status: 'Public',
    stack: [
      'TypeScript',
      'Node.js',
      'React',
      'Next.js',
      'NestJS',
      'PostgreSQL',
      'Tailwind CSS',
      'Prisma',
      'JWT',
      'Socket.IO',
      'Vercel',
      'Railway',
    ],
    summary:
      'Real-time messaging platform with channels, direct messages, live presence, reactions, and an embedded AI assistant for in-channel assistance and automation.',
    description:
      'A full-stack real-time communication platform designed to explore the core challenges of building modern chat systems. ' +
      'The application supports public channels and direct messages, threaded conversations, reactions, attachments, read state, and real-time presence. ' +
      'Its architecture is designed to be extensible, allowing features such as in-channel automation and AI-assisted interactions to be integrated naturally.',

    demo: 'https://bamboo-comms.joachimtramper.dev',
    demoLabel: 'Live App',
    github: 'https://github.com/JoachimTramper/bamboo-comms',
    problem:
      'Designing a real-time communication system involves non-trivial challenges such as state consistency, presence tracking, read/unread behavior, and safe integration of background automation. ' +
      'The goal of this project was to explore and demonstrate how these concerns can be handled in a production-style architecture.',
    analysis:
      'Real-time communication is primarily a state coordination problem: messages, reactions, mentions, read state, and presence must remain consistent across clients, reconnects, and partial UI context. ' +
      'The system was designed around clear separation of concerns, with the database acting as the source of truth and WebSocket events used strictly for real-time propagation. ' +
      'Client behavior is driven by explicit state transitions, allowing the UI to remain declarative and predictable across devices.',
    solution:
      'Built a full-stack real-time communication platform using a Next.js frontend with Tailwind CSS and a NestJS backend powered by Prisma and PostgreSQL. ' +
      'Authentication is handled via JWT-based access tokens with silent refresh using secure HttpOnly cookies, enabling long-lived sessions without disrupting the user experience. ' +
      'The messaging system was designed around clear separation of concerns between transport, persistence, and presentation, ensuring predictable behavior across reconnects and devices. ' +
      'The architecture supports real-time updates, message reactions, attachments, and read state while remaining resilient to partial failures and network interruptions.',
    result:
      'The platform is running reliably in production and demonstrates stable real-time behavior under normal usage. ' +
      'Core messaging features such as channels, direct messages, reactions, attachments, and read state work consistently across devices. ' +
      'The application serves as a solid foundation for team communication or community chat, with an architecture that is easy to extend with features such as moderation tools, integrations, or advanced automation.',
    videos: [],
    note: '',
  },
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
      'The system enables users to submit their Social Club username, wallet address, and a short profile video, after which they are assigned to a Rockstar Crew. ' +
      'An admin manually verifies the user’s earned online cash and approves them with a corresponding point score. ' +
      'Once approved, the user can mint a free access NFT, which unlocks their personalized dashboard, where the assigned score is automatically converted into MTA tokens.',
    demo: 'https://verify.memetheftauto.io',
    demoLabel: 'Live App',
    github: null,
    problem:
      'Ensure that only legitimate users can mint the access NFT and enter restricted parts of the Meme Theft Auto ecosystem, without violating Rockstar’s strict policy on obtaining third-party profile information.',
    analysis:
      'Designed a hybrid verification flow that combines off-chain identity validation with on-chain access control. ' +
      'Because Rockstar prohibits access to third-party Social Club profiles, we introduced a manual video-based verification step. ' +
      'Users upload a screen recording of their own profile. An admin then verifies the identity based on the shared crew and the video proof, and assigns an amount based on the user’s in-game earnings. ' +
      'Once approved, the user mints an access NFT via an external flow. NFT ownership is then validated on-chain to unlock the personalized dashboard, where the assigned amount is converted into MTA tokens.',
    solution:
      'Built a React/Node.js application powered by Firebase Firestore, deployed via Vercel and Railway. ' +
      'Authentication runs through the Solana Wallet Adapter, letting users connect their wallet before submitting a request. ' +
      'The app supports video uploads, wallet address capture, and crew assignment. ' +
      'Admins verify each submission in a custom admin panel, reviewing the shared crew and video proof before assigning an amount. ' +
      'Once the user completes the external NFT minting flow, access to the dashboard is granted. The admin-assigned amount is automatically converted into MTA tokens.',
    result:
      'The platform is live at verify.memetheftauto.io and enables secure access to the Meme Theft Auto ecosystem, without violating Rockstar’s third-party data policy. ' +
      'The user flow is clear, from wallet connection and video upload to dashboard access and token distribution. ' +
      'The UI is clean and intuitive for both users and admins. The platform is built for scale and opens the door to future features like leaderboards, token-gated experiences, or on-chain rewards.',
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
      'Production-grade e-commerce backend API with atomic stock locking, secure webhooks, CI/CD pipeline, and a fully typed SDK.',
    description:
      'Professional-grade backend service, developed independently to apply and showcase advanced backend best practices. ' +
      'Covers the full order lifecycle, from cart creation and stock reservation to secure payment confirmation and automated invoicing. ' +
      'Swagger UI provides interactive documentation, and a generated TypeScript Axios SDK enables smooth integration with any frontend.',
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
    note: 'These demo videos show the main API flows. For full technical details, including CI/CD setup, architecture decisions, and advanced features, please check the README on GitHub.',
    problem:
      'Build a robust, well-documented e-commerce API that guarantees transactional integrity, security, and easy client integration.',
    analysis:
      'Defined the data model and order lifecycle, including atomic stock holds and webhook-based payment confirmation. Set up CI/CD with tests, linting and security scans.',
    solution:
      'Developed DRF endpoints with JWT authentication and optional TOTP 2FA for enhanced account security. ' +
      'Implemented atomic stock reservation with a 10-minute hold and secure webhook processing via a custom header. ' +
      'Background tasks run through Celery and Redis. The project includes typed OpenAPI documentation and an auto-generated TypeScript-Axios client. Deployment is fully Dockerized and hosted on Railway.',
    result:
      'Delivered a reliable and secure checkout flow that supports smooth developer onboarding. ' +
      'The system includes monitoring via Sentry, audit trails with Django Simple History, interactive Swagger UI, and a fully typed TypeScript SDK.',
  },
]
