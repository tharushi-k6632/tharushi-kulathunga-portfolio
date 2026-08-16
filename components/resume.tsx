import Link from 'next/link'
import { Download } from 'lucide-react'
import { resume } from '@/lib/content'
import { getAssetUrl } from '@/lib/utils'

export function Resume() {
  return (
    <section id="resume" className="px-4 py-24 sm:px-6">
      <div className="relative mx-auto max-w-4xl overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-neon/20 to-neon-bright/10 blur-2xl"
        />
        <div className="glass rounded-3xl px-6 py-14 text-center glow-blue sm:px-12">
          <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
            {resume.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground text-pretty">
            {resume.body}
          </p>
          <Link
            href={getAssetUrl(resume.resumeFile)}
            download
            className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-neon to-neon-bright px-8 py-4 text-lg font-semibold text-background transition-all duration-300 hover:scale-105 hover:shadow-[0_0_36px_-2px_var(--neon)]"
          >
            <Download
              size={20}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
            {resume.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
