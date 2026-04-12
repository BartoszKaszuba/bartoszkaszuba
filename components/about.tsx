"use client"

import { Target, Globe, Handshake, Zap } from "lucide-react"

const skills = [
  "Community Building",
  "Developer Advocacy",
  "Technical Writing",
  "Content Creation",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "SASS",
  "Git",
  "AI Tools",
]

const features = [
  {
    icon: Target,
    title: "Developer First",
    description: "I simplify complex developer tools with hands-on demos and practical content that developers can actually use.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "400K+ developers across LinkedIn, Instagram, YouTube, and more trust my content for learning and growth.",
  },
  {
    icon: Handshake,
    title: "Brand Collaborator",
    description: "Worked with leading tech companies to create developer-facing content and campaigns.",
  },
  {
    icon: Zap,
    title: "Builder Mindset",
    description: "I don&apos;t just talk about tech, I build with it. From open-source projects to client websites, I ship real code.",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
            Who I Am
          </p>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            About Me
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Developer Advocate who builds, teaches, and grows communities around the tools developers love.
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div className="space-y-6">
            <p className="text-foreground text-lg leading-relaxed">
              {"I'm a Developer Advocate & Frontend Developer passionate about making technology accessible. I create technical content, build real-world demos, and help developers navigate complex tools with confidence."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"I've collaborated with leading tech brands, creating content and demos that educate and engage developer communities worldwide. My work has been featured on some of the world's biggest tech sites."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"I'm passionate about dev education, community building, and bridging the gap between products and the developers who use them."}
            </p>
          </div>

          {/* Skills */}
          <div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border border-border hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
