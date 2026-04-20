"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export function Hero() {
  const { scrollToSection } = useSmoothScroll()

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for Internship
            </div>

            {/* Main Headline */}
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6 text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Building{" "}
              <span className="text-primary">real solutions</span>
              <br />
              that solve problems
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed text-pretty">
              Developer and ICT student at Fontys University with real project experience - from parking start-ups to light festival installations.
            </p>

            {/* Internship Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-secondary border border-border text-sm mb-8">
              <span className="text-muted-foreground">Available:</span>
              <span className="text-foreground font-medium">31 Aug 2026 - 22 Jan 2027</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-primary font-medium">North Brabant, NL</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("about")}
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary px-8 py-6 text-base font-medium"
              >
                About Me
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Bartosz Kaszuba - Full Stack Developer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
