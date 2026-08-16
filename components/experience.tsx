import { Users, Mic, Calendar } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { experience as ITEMS } from '@/lib/content'
import { ExperienceMarquee } from './experience-marquee'

export function Experience() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Leadership & Volunteering"
          title="Experience"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {ITEMS.map((item) => {
            // Requirement: Industrial Management timeline UI (without "Association Roles Timeline" label)
            if (item.isTimeline && item.timeline) {
              return (
                <article
                  key={item.org}
                  className="glass group flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-blue md:col-span-2 lg:col-span-1"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="inline-flex h-fit rounded-xl bg-neon/15 p-3 text-neon-bright ring-1 ring-neon/30">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-balance">
                          {item.org}
                        </h3>
                      </div>
                    </div>

                    {/* Timeline visualization */}
                    <div className="relative ml-4 mt-6 border-l-2 border-neon/30 pl-6 space-y-6">
                      {item.timeline.map((step) => (
                        <div key={step.year} className="relative">
                          {/* Timeline dot */}
                          <div className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-neon shadow-[0_0_12px_var(--neon)] ring-4 ring-background">
                            <span className="h-1.5 w-1.5 rounded-full bg-background" />
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-md border border-neon/40 bg-neon/15 px-2.5 py-0.5 font-mono text-xs font-semibold text-neon-bright">
                              {step.year}
                            </span>
                            <span className="font-display text-sm font-semibold text-foreground">
                              {step.role}
                            </span>
                          </div>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              )
            }

            // Requirement: Compere card (removed key focus, official event host & master of ceremonies)
            if (item.isCompere && item.events) {
              return (
                <article
                  key={item.org}
                  className="glass group flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-blue md:col-span-2 lg:col-span-1 border-neon/30 bg-neon/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-fit rounded-xl bg-gradient-to-tr from-neon/30 to-neon-bright/30 p-3 text-neon-bright ring-1 ring-neon/50">
                      <Mic size={22} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {item.org}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>

                  <div className="mt-5">
                    <div className="flex flex-wrap gap-2">
                      {item.events.map((evt) => (
                        <span
                          key={evt}
                          className="inline-flex items-center rounded-lg border border-neon/30 bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground transition-all duration-300 hover:border-neon hover:bg-neon/20 hover:text-neon-bright hover:shadow-[0_0_12px_-2px_var(--neon)]"
                        >
                          {evt}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              )
            }

            // Standard Experience Card
            return (
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
                  {item.role && (
                    <span className="mt-1 inline-block font-mono text-xs text-neon-bright">
                      {item.role}
                    </span>
                  )}
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {item.body}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        {/* Moving pictures gallery marquee */}
        <ExperienceMarquee />
      </div>
    </section>
  )
}
