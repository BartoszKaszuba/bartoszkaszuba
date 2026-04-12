"use client"

import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    number: "01",
    title: "SimplePark",
    subtitle: "Parking App Start-up · 2025",
    description: "Backend development & UX for a real parking management start-up product, delivered using agile methodology.",
    impact: "Delivered business functionality tailored towards SMEs, enabling real-world deployment for the client.",
    tags: ["Laravel", "UX", "Agile"],
    link: "#",
    github: "#",
  },
  {
    number: "02",
    title: "GLOW – Echoes of Tomorrow",
    subtitle: "Light Festival Installation · 2025",
    description: "Designed power boxes for the LED arms of the installation. Built hardware architecture using ESP microcontrollers for light control.",
    tags: ["ESP", "Hardware Architecture", "UX"],
    link: "#",
    github: "#",
  },
  {
    number: "03",
    title: "Long Covid Buddy",
    subtitle: "Health Companion App · Ongoing",
    description: "Web app helping long Covid patients track and manage their energy levels.",
    impact: "Beta tested with 15 users using integrated user behaviour analytics tools.",
    tags: ["Live", "React", "TypeScript", "JS", "Beta Testing"],
    link: "#",
    github: "#",
    isLive: true,
  },
  {
    number: "04",
    title: "Portflow",
    subtitle: "DRIEAM LMS Platform · Ongoing",
    description: "Adding annotation functionality to an existing LMS platform. Conducted UX research on implementation approach and built the feature end-to-end.",
    tags: ["Live", "React", "TypeScript", "UX Research"],
    link: "#",
    github: "#",
    isLive: true,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
            IT Projects
          </p>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Projects
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real projects built for start-ups, clients, and open source — from web apps to hardware installations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 lg:p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Number */}
              <span 
                className="absolute top-6 right-6 text-4xl font-bold text-muted/30"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {project.number}
              </span>

              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 
                    className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-primary text-sm italic">{project.subtitle}</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {project.impact && (
                <div className="mb-4 p-3 bg-secondary border-l-2 border-primary rounded-r-lg">
                  <p className="text-sm text-foreground">{project.impact}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      tag === "Live" 
                        ? "bg-green-500/10 text-green-700 border border-green-500/20" 
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {tag === "Live" && (
                      <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse" />
                    )}
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href={project.link}
                  className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                >
                  View Project
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
                <Link
                  href={project.github}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
