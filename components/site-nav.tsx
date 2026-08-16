'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '@/lib/content'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Primary"
        className={`glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-shadow duration-300 sm:px-6 ${
          scrolled ? 'glow-blue' : ''
        }`}
      >
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-foreground transition-colors hover:text-neon-bright"
        >
          {profile.initials}<span className="text-neon">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all hover:text-neon-bright hover:[text-shadow:0_0_16px_var(--neon)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="rounded-lg p-2 text-foreground transition-colors hover:text-neon-bright lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-2 lg:hidden"
        >
          <ul className="grid grid-cols-2 gap-1">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-neon-bright"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
