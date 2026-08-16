import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './brand-icons'

const CONTACTS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'tharushi@gmail.com',
    href: 'mailto:tharushi@gmail.com',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'tharushi-kulathunga',
    href: 'https://www.linkedin.com/in/tharushi-kulathunga-4402622b8/',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'tharushi-k6632',
    href: 'https://github.com/tharushi-k6632',
  },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="px-4 pt-12 pb-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="glass rounded-3xl p-8 sm:p-12">
          <div className="text-center">
            <p className="font-mono text-sm font-medium tracking-[0.2em] text-neon uppercase">
              Get in touch
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-balance sm:text-4xl">
              Let&apos;s connect
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            {CONTACTS.map(({ icon: Icon, label, value, href }) => {
              const external = href.startsWith('http')
              return (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-neon/20 bg-white/5 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-neon hover:shadow-[0_0_24px_-4px_var(--neon)]"
                >
                  <span className="inline-flex rounded-xl bg-neon/15 p-3 text-neon-bright ring-1 ring-neon/30 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </span>
                  <span className="text-xs tracking-wide text-muted-foreground uppercase">
                    {label}
                  </span>
                  <span className="break-all text-sm font-medium text-foreground transition-colors group-hover:text-neon-bright">
                    {value}
                  </span>
                </a>
              )
            })}
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tharushi Kulathunga. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
