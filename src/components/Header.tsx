import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { MdOutlineFolderOpen } from 'react-icons/md'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative border-b border-zinc-200 dark:border-zinc-800">
      <nav className="container flex h-14 items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          title="Home"
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black text-black font-saira text-2xl"
          onClick={() => setOpen(false)}
        >
          JT
        </NavLink>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-4 text-sm sm:flex">
          <li>
            <NavLink to="/projects" className="flex items-center gap-1 hover:underline">
              <MdOutlineFolderOpen className="h-4 w-4" />
              Projects
            </NavLink>
          </li>
          <li>
            <a
              href="https://github.com/joachimtramper"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <SiGithub className="h-4 w-4" />
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/joachim-tramper"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <SiLinkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </li>
          <li>
            <NavLink to="/contact" className="flex items-center gap-1 hover:underline">
              <HiOutlineMail className="h-4 w-4" />
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          {open ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown panel */}
      {open && (
        <div
          id="mobile-menu"
          className="sm:hidden absolute right-2 top-14 z-50 w-fit rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
        >
          <div className="py-2">
            <NavLink
              to="/projects"
              onClick={() => setOpen(false)}
              className="block rounded-lg pl-3 pr-4 py-2 text-base hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              <span className="inline-flex items-center gap-1">
                <MdOutlineFolderOpen className="h-5 w-5" />
                Projects
              </span>
            </NavLink>

            <a
              href="https://github.com/joachimtramper"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-lg pl-3 pr-4 py-2 text-base hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              <span className="inline-flex items-center gap-1">
                <SiGithub className="h-5 w-5" />
                GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/joachim-tramper"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-lg pl-3 pr-4 py-2 text-base hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              <span className="inline-flex items-center gap-1">
                <SiLinkedin className="h-5 w-5" />
                LinkedIn
              </span>
            </a>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-lg pl-3 pr-4 py-2 text-base hover:bg-zinc-100 dark:hover:bg-zinc-900"
            >
              <span className="inline-flex items-center gap-1">
                <HiOutlineMail className="h-5 w-5" />
                Contact
              </span>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
