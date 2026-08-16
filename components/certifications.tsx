import { Award, Medal, ExternalLink } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { certifications as ITEMS, certificationsLink } from '@/lib/content'

const ICONS = {
  award: Award,
  medal: Medal,
} as const

export function Certifications() {
  return (
    <section id="certifications" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Recognition"
          title="Certifications & Achievements"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {ITEMS.map(({ icon, title, meta }) => {
            const Icon = ICONS[icon as keyof typeof ICONS]
            return (
            <article
              key={title}
              className="glass flex items-center gap-4 rounded-2xl p-6 transition-all duration-300 hover:glow-blue"
            >
              <div className="inline-flex rounded-xl bg-neon/15 p-3 text-neon-bright ring-1 ring-neon/30">
                <Icon size={24} />
              </div>
              <div>
                <h3 className="font-medium text-balance">{title}</h3>
                <p className="mt-1 font-mono text-xs tracking-wide text-neon-bright">
                  {meta}
                </p>
              </div>
            </article>
            )
          })}
        </div>
        {certificationsLink.href && (
          <div className="mt-8 flex justify-center">
            <a
              href={certificationsLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-neon/40 px-5 py-2.5 text-sm text-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-neon/15 hover:shadow-[0_0_16px_-3px_var(--neon)]"
            >
              {certificationsLink.label}
              <ExternalLink size={16} />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
