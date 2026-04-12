"use client"

import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Project One",
    description: "A successful Open-Source portfolio template featured on major tech sites and used by thousands of developers globally.",
    tags: ["HTML", "CSS", "JavaScript", "Open Source"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Two",
    description: "A multiservice company website built from scratch using modern frontend technologies.",
    tags: ["HTML", "CSS", "JavaScript", "Client Work"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Three",
    description: "A frontend recreation of a beautiful web app, built as a learning project inspired by modern UI design.",
    tags: ["HTML", "CSS", "React", "Responsive Design"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Four",
    description: "A web template targeting a specific industry, designed so anyone can present their business online.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
            Hand-Coded Work
          </p>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Projects
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real projects I built from scratch, line by line. Just HTML, CSS, JavaScript, and React.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 lg:p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 
                  className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  <Link
                    href={project.github}
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href={project.link}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title} project`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                className="inline-flex items-center text-primary font-medium text-sm hover:underline"
              >
                View Project
                <ArrowUpRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
