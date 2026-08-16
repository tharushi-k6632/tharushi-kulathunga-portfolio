import Image from 'next/image'
import { ArrowDown, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 pb-16 sm:px-6"
    >
      {/* ambient neon glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-neon/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -right-24 h-96 w-96 rounded-full bg-neon-bright/15 blur-[120px]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-neon-bright">
            <span className="h-2 w-2 rounded-full bg-neon shadow-[0_0_10px_var(--neon)]" />
            Available for opportunities
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-neon to-neon-bright bg-clip-text text-transparent text-glow">
              Tharushi Kulathunga.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            An undergraduate bridging the gap between Technology, Management, and
            Data Analysis.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon to-neon-bright px-6 py-3 font-medium text-background transition-all duration-300 hover:scale-105 hover:shadow-[0_0_28px_-2px_var(--neon)]"
            >
              View My Work
              <ArrowDown
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-foreground transition-all duration-300 hover:scale-105 hover:text-neon-bright hover:glow-blue"
            >
              <Mail size={18} />
              Get in Touch
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-neon/40 to-neon-bright/30 blur-2xl"
            />
            <div className="glass relative overflow-hidden rounded-[2rem] p-2 glow-blue">
              <div className="overflow-hidden rounded-[1.6rem] ring-1 ring-neon/40">
                <Image
                  src="/tharushi-portrait.png"
                  alt="Portrait of Tharushi Kulathunga"
                  width={420}
                  height={520}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
