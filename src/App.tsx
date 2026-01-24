import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
import ResumePage from './pages/ResumePage'

export default function App() {
  return (
    <div className="relative h-dvh flex flex-col min-h-0 overflow-x-hidden bg-white dark:bg-zinc-950">
      {/* Background logo */}
      <div
        className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <img
          src="/assets/background.png"
          alt="Background logo"
          className="w-2/3 max-w-3xl opacity-5"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-0 h-full">
        <Header />

        <main className="min-h-0 grow overflow-y-auto overscroll-contain">
          <div className="container py-2 sm:py-10">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/docs/joachimtramper-2025-resume-b18f" element={<ResumePage />} />
            </Routes>
          </div>
        </main>

        <footer className="border-t border-zinc-200 py-8 text-sm text-zinc-500 dark:border-zinc-800 text-center">
          <div className="container">© {new Date().getFullYear()} Joachim Tramper</div>
        </footer>
      </div>
    </div>
  )
}
