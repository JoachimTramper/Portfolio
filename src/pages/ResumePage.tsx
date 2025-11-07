import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function ResumePage() {
  const pdfUrl = '/assets/cv.pdf'
  const [hasPdf, setHasPdf] = useState<boolean | null>(null) // null = checking

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch(pdfUrl, { method: 'HEAD', cache: 'no-store' })
        const ct = (res.headers.get('content-type') || '').toLowerCase()
        if (!cancelled) setHasPdf(res.ok && ct.includes('application/pdf'))
      } catch {
        if (!cancelled) setHasPdf(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [pdfUrl])

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Helmet>
        <title>CV – Joachim Tramper</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      {/* Loading state (briefly visible) */}
      {hasPdf === null && <div className="text-center text-zinc-600">Loading…</div>}

      {/* PDF found → show inline viewer */}
      {hasPdf === true && (
        <div className="rounded-xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 mb-8">
          {/* iframe works just as well as embed here */}
          <iframe src={pdfUrl} title="CV" width="100%" height="1000px" style={{ border: 'none' }} />
        </div>
      )}

      {/* PDF not found or wrong content-type → fallback */}
      {hasPdf === false && (
        <div className="text-center space-y-2">
          <p className="text-zinc-600">
            PDF failed to load —{' '}
            <a href={pdfUrl} download className="underline text-blue-600 hover:text-blue-800">
              download here
            </a>
            .
          </p>
        </div>
      )}
    </main>
  )
}
