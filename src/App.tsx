import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'
import Header from './components/Header'

export default function App() {
  return (
    <div className="h-dvh flex flex-col min-h-0 overflow-x-hidden">
      <Header />

      <main className="min-h-0 grow overflow-y-auto overscroll-contain">
        <div className="container py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>

      <footer className="border-t border-zinc-200 py-8 text-sm text-zinc-500 dark:border-zinc-800 text-center">
        <div className="container">© {new Date().getFullYear()} Joachim Tramper</div>
      </footer>
    </div>
  )
}
