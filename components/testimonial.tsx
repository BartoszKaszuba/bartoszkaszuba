"use client"

import { Quote } from "lucide-react"

export function Testimonial() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-8 lg:p-12 bg-card border border-border rounded-2xl">
          {/* Quote Icon */}
          <div className="absolute -top-4 left-8 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Quote className="w-4 h-4 text-primary-foreground" />
          </div>

          <blockquote className="text-foreground text-lg lg:text-xl leading-relaxed mb-6 text-pretty">
            {'"I build applications that solve real user problems. From parking start-ups to light festival installations, I\'m passionate about creating technology that makes a difference. Ready to contribute from day one."'}
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>BK</span>
            </div>
            <div>
              <p className="text-foreground font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
                Bartosz Kaszuba
              </p>
              <p className="text-muted-foreground text-sm">Full Stack Developer · ICT Student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
