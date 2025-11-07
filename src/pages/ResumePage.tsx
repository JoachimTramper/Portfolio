import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function ResumePage() {
  const [pdfLoaded, setPdfLoaded] = useState(true)

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Helmet>
        <title>CV – Joachim Tramper</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="rounded-xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 mb-8">
        <embed
          src="/assets/cv.pdf"
          type="application/pdf"
          width="100%"
          height="1000px"
          onError={() => setPdfLoaded(false)}
        />
      </div>

      {!pdfLoaded && (
        <div className="text-center space-y-2">
          <p className="text-zinc-600">Failed to load PDF. Download it here:</p>
          <a
            href="/assets/cv.pdf"
            download
            className="inline-block rounded-lg px-5 py-3 bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            📄 Download CV
          </a>
        </div>
      )}
    </main>
  )
}
