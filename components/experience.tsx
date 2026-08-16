import { Users } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { experience as ITEMS } from '@/lib/content'

export function Experience() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Leadership & Volunteering"
          title="Experience"
        />
        <div className="grid gap-6 md:grid-cols-2">
          {ITEMS.map((item) => (
            <article
              key={item.org}
              className="glass group flex gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-blue"
            >
              <div className="inline-flex h-fit rounded-xl bg-neon/15 p-3 text-neon-bright ring-1 ring-neon/30">
                <Users size={20} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-balance">
                  {item.org}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
