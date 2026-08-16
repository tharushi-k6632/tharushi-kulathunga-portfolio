import { GraduationCap, Target, Sparkles } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { about } from '@/lib/content'

const ICONS = {
  graduation: GraduationCap,
  target: Target,
  sparkles: Sparkles,
} as const

export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Who I Am" title="About Me" />
        <div className="grid gap-6 md:grid-cols-3">
          {about.map(({ icon, title, body }) => {
            const Icon = ICONS[icon as keyof typeof ICONS]
            return (
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
