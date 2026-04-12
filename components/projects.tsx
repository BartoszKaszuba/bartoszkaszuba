"use client"

import { ArrowUpRight, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    number: "01",
    title: "SimplePark",
    subtitle: "Parking App Start-up · 2025",
    description: "Backend development & UX for a real parking management start-up product, delivered using agile methodology.",
    impact: "Delivered business functionality tailored towards SMEs, laying the ground work for accomodating B2B clients.",
    tags: ["Laravel", "UX", "Agile"],
    link: "https://deltafontysict.nl/projects/simplepark/",
    backgroundImage:"/images/simplepark.jpg", 
  },
  {
    number: "02",
    title: "GLOW – Echoes of Tomorrow",
    subtitle: "Light Festival Installation · 2025",
    description: "Designed power boxes for the LED arms of the installation. Built hardware architecture using ESP microcontrollers for light control.",
    tags: ["ESP", "Hardware Architecture", "UX"],
    link: "#",
    backgroundImage: "/images/glow.jpg",
  },
  {
    number: "03",
    title: "Long Covid Buddy",
    subtitle: "Health Companion App · Ongoing",
    description: "Web app helping long Covid patients track and manage their energy levels.",
    impact: "Beta tested with 15 users using integrated user behaviour analytics tools.",
    tags: ["Live", "React", "TypeScript", "JS", "Beta Testing"],
    link: "https://deltafontysict.nl/projects/long-covid-buddy/",
    isLive: true,
    backgroundImage: "/images/longcovid.png",
  },
  {
    number: "04",
    title: "Portflow",
    subtitle: "DRIEAM LMS Platform · Ongoing",
    description: "Adding annotation functionality to an existing LMS platform. Conducted UX research on implementation approach and built the feature end-to-end.",
    tags: ["Live", "React", "TypeScript", "UX Research"],
    link: "https://drieam.com/en/solutions/portflow/",
    isLive: true,
    backgroundImage: "/images/portflowdrieam.png", 
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
              className="group relative p-6 lg:p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 overflow-hidden"
              style={
                project.backgroundImage
                  ? {
                      backgroundImage: `url(${project.backgroundImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }
                  : {}
              }
            >
              {/* Background Overlay */}
              {project.backgroundImage && (
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-orange-900/70 to-orange-800/60 rounded-xl" />
              )}
              
              {/* Content Wrapper */}
              <div className="relative z-10">
              {/* Project Number */}
              <span 
                className={`absolute top-6 right-6 text-4xl font-bold ${
                  project.backgroundImage ? 'text-orange-100/40' : 'text-muted/30'
                }`}
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {project.number}
              </span>

              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 
                    className={`text-xl font-semibold ${
                      project.backgroundImage ? 'text-white group-hover:text-orange-100' : 'text-foreground group-hover:text-primary'
                    } transition-colors`}
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {project.title}
                  </h3>
                  <p className={`text-sm italic ${
                    project.backgroundImage ? 'text-orange-100' : 'text-primary'
                  }`}>{project.subtitle}</p>
                </div>
              </div>

              <p className={`mb-4 leading-relaxed ${
                project.backgroundImage ? 'text-orange-50' : 'text-muted-foreground'
              }`}>
                {project.description}
              </p>

              {project.impact && (
                <div className={`mb-4 p-3 border-l-2 rounded-r-lg ${
                  project.backgroundImage 
                    ? 'bg-orange-900/40 border-orange-100' 
                    : 'bg-secondary border-primary'
                }`}>
                  <p className={`text-sm ${
                    project.backgroundImage ? 'text-orange-50' : 'text-foreground'
                  }`}>{project.impact}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      tag === "Live" 
                        ? "bg-green-500/40 text-green-200 border border-green-400/50" 
                        : project.backgroundImage
                        ? "bg-orange-700/50 text-orange-50 border border-orange-400/30"
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center font-medium text-sm hover:underline ${
                    project.backgroundImage ? 'text-orange-100' : 'text-primary'
                  }`}
                >
                  View Project
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
                
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
