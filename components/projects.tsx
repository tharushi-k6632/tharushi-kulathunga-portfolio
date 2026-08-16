import { ExternalLink, FolderGit2 } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { GithubIcon } from './brand-icons'

const PROJECTS = [
  {
    title: 'hackX 2026',
    role: 'Project Manager',
    body: 'Coordinated partnerships with government science foundations and private tech solutions.',
  },
  {
    title: 'Exposition Project (DoIT System)',
    role: 'Project Manager',
    body: 'Managed task tracking and project delivery.',
  },
  {
    title: 'Rootcode Designathon',
    role: 'Designer',
    body: 'Developed and submitted design prototypes during an intensive hackathon challenge.',
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Selected Work" title="Projects" />
        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="glass group flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:glow-blue"
            >
              <div className="mb-5 inline-flex w-fit rounded-xl bg-neon/15 p-3 text-neon-bright ring-1 ring-neon/30">
                <FolderGit2 size={22} />
              </div>
              <h3 className="font-display text-xl font-semibold text-balance">
                {project.title}
              </h3>
              <span className="mt-2 inline-flex w-fit rounded-full bg-neon/10 px-3 py-1 font-mono text-xs tracking-wide text-neon-bright">
                {project.role}
              </span>
              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground text-pretty">
                {project.body}
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="https://github.com/tharushi-k6632"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-neon/40 px-3 py-2 text-sm text-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-neon/15 hover:shadow-[0_0_16px_-3px_var(--neon)]"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
                <a
                  href="https://github.com/tharushi-k6632"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-neon/40 px-3 py-2 text-sm text-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-neon/15 hover:shadow-[0_0_16px_-3px_var(--neon)]"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
