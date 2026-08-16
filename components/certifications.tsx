import { Award, Medal } from 'lucide-react'
import { SectionHeading } from './section-heading'

const ITEMS = [
  {
    icon: Award,
    title: 'Pursuing CIMA Certification',
    meta: 'In progress',
  },
  {
    icon: Medal,
    title: 'Rootcode Designathon Participant',
    meta: 'August 2024',
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Recognition"
          title="Certifications & Achievements"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {ITEMS.map(({ icon: Icon, title, meta }) => (
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
          ))}
        </div>
      </div>
    </section>
  )
}
