export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-12 text-center">
      <p className="font-mono text-sm font-medium tracking-[0.2em] text-neon uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold text-balance sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-neon to-transparent" />
    </div>
  )
}
