import { SectionHeading } from './section-heading'

const GROUPS = [
  {
    title: 'Core Focus',
    items: ['Project Management', 'Business Analysis', 'Data Analysis'],
  },
  {
    title: 'Tools & Platforms',
    items: ['GitHub', 'DoIT', 'TaskHub', 'PickMe', 'Uber', 'Zoom', 'Google Meet'],
  },
  {
    title: 'Management & Methodologies',
    items: ['Agile Project Management', 'Event Coordination', 'Business Strategy'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="What I Bring" title="Skills" />
        <div className="grid gap-6 md:grid-cols-3">
          {GROUPS.map((group) => (
            <div key={group.title} className="glass rounded-2xl p-7">
              <h3 className="font-display text-lg font-semibold text-neon-bright">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="inline-flex rounded-full border border-neon/30 bg-neon/10 px-4 py-1.5 text-sm text-foreground transition-all duration-300 hover:scale-105 hover:border-neon hover:bg-neon/20 hover:shadow-[0_0_16px_-2px_var(--neon)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
