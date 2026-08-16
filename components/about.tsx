import { GraduationCap, Target, Sparkles } from 'lucide-react'
import { SectionHeading } from './section-heading'

const CARDS = [
  {
    icon: GraduationCap,
    title: 'Background',
    body: 'Currently pursuing a BSc in Information Technology at the University of Kelaniya and a BSc (Hons) in International Business Management at the University of Staffordshire (APIIT Sri Lanka).',
  },
  {
    icon: Target,
    title: 'Career Goals',
    body: 'Aspiring to leverage management frameworks, technical tools, and data-driven insights to lead impactful tech and business initiatives.',
  },
  {
    icon: Sparkles,
    title: 'Technical Interests',
    body: 'Project Management, Business Analysis, and Data Analysis.',
  },
]

export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Who I Am" title="About Me" />
        <div className="grid gap-6 md:grid-cols-3">
          {CARDS.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="glass group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:glow-blue"
            >
              <div className="mb-5 inline-flex rounded-xl bg-neon/15 p-3 text-neon-bright ring-1 ring-neon/30 transition-all duration-300 group-hover:shadow-[0_0_20px_-2px_var(--neon)]">
                <Icon size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
