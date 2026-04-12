"use client"

import { Quote } from "lucide-react"

export function Testimonial() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
            What Others Say
          </p>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Testimonial
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 lg:p-12 bg-card border border-border rounded-2xl">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
            <div className="relative z-10">
              <p className="text-foreground text-lg lg:text-xl leading-relaxed mb-8 italic">
                {'"This person is a one-of-a-kind creator partner. They go above and beyond for their brand partners and have been involved in campaigns with leading tech brands. They truly care, and both our agency and the brands loved working with them on top of incredible performance. Would highly recommend anyone to partner with them."'}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">JD</span>
                </div>
                <div>
                  <h4 
                    className="text-foreground font-semibold"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    John Doe
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Founder, Creator Marketing Agency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
