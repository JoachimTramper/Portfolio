export default function Contact() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Contact</h1>

      <ul className="space-y-2">
        <li>
          <span className="font-medium">Mail:</span>{' '}
          <a
            href="mailto:info@joachimtramper.dev"
            className="underline decoration-zinc-400 hover:decoration-zinc-600 dark:decoration-zinc-500 dark:hover:decoration-zinc-300"
          >
            info@joachimtramper.dev
          </a>
        </li>
        <li>
          <span className="font-medium">LinkedIn:</span>{' '}
          <a
            href="https://www.linkedin.com/in/joachim-tramper"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-zinc-400 hover:decoration-zinc-600 dark:decoration-zinc-500 dark:hover:decoration-zinc-300"
          >
            /in/joachim-tramper
          </a>
        </li>
      </ul>
    </section>
  )
}
