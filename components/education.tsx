import { SectionHeading } from './section-heading'

const TIMELINE = [
  {
    school: 'University of Kelaniya',
    degree: 'BSc in Information Technology',
  },
  {
    school: 'University of Staffordshire (APIIT Sri Lanka)',
    degree: 'BSc (Hons) in International Business Management',
  },
  {
    school: 'Wisdom Business Academy',
    degree: 'CIMA Certification (Ongoing)',
  },
]

export function Education() {
  return (
    <section id="education" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="My Journey" title="Education" />
        <ol className="relative ml-3 border-l border-neon/25">
          {TIMELINE.map((item) => (
            <li key={item.school} className="mb-10 ml-8 last:mb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[9px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-neon shadow-[0_0_16px_2px_var(--neon)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-background" />
              </span>
              <div className="glass rounded-2xl p-6 transition-all duration-300 hover:glow-blue">
                <h3 className="font-display text-lg font-semibold">
                  {item.school}
                </h3>
                <p className="mt-1 text-muted-foreground">{item.degree}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
