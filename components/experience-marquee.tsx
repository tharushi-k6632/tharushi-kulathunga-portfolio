'use client'

import Image from 'next/image'
import { experienceGallery } from '@/lib/content'

export function ExperienceMarquee() {
  // Duplicate array to ensure seamless infinite looping marquee
  const doubleGallery = [...experienceGallery, ...experienceGallery]

  return (
    <div className="mt-16 overflow-hidden rounded-3xl border border-neon/20 bg-neon/5 py-6 backdrop-blur-md">
      <div className="relative flex w-full overflow-hidden">
        {/* Gradient edge masks for smooth fade in/out */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent" />

        <div className="animate-marquee flex gap-6 px-4">
          {doubleGallery.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className="glass group relative h-80 w-60 flex-shrink-0 overflow-hidden rounded-2xl border border-neon/30 transition-all duration-300 hover:scale-[1.03] hover:glow-blue"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="240px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
