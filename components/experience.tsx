"use client"

const experiences = [
  {
    company: "Company A",
    type: "Contract · 3 Months",
    role: "Developer Advocate",
    description: "Built real apps showcasing product use cases. Demonstrated features through practical demos and helped developers understand key capabilities through engaging content.",
    tags: ["Developer Education", "Technical Demos", "Content Creation"],
  },
  {
    company: "Company B",
    type: "Contract · 3 Months",
    role: "Developer Advocate",
    description: "Showcased product capabilities through real project demos. Created short-form content highlighting developer workflows and best practices.",
    tags: ["Content Creation", "Web Development", "Technical Writing"],
  },
  {
    company: "Company C",
    type: "Contract",
    role: "Developer Advocate",
    description: "Created developer-focused content showcasing productivity and project management capabilities. Demonstrated practical use cases and workflows.",
    tags: ["Productivity", "Content Creation", "Developer Education"],
  },
  {
    company: "Company D",
    type: "Contract",
    role: "Developer Advocate",
    description: "Partnered to create content demonstrating AI-powered development platform. Built real projects and tutorials showing developers how to ship apps faster.",
    tags: ["AI Tools", "App Development", "Content Creation"],
  },
  {
    company: "Freelance",
    type: "Self-Employed · 2023 – Present",
    role: "Web Developer (Part Time)",
    description: "Building frontend of websites and web apps using modern technologies. Working directly with clients to design and develop user interfaces.",
    tags: ["React", "JavaScript", "CSS/SASS", "Client Work"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
            {"Where I've Worked"}
          </p>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Experience
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Partnered with top tech companies to create developer-focused content and drive product adoption.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 lg:p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 
                    className="text-foreground font-semibold text-lg"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {exp.company}
                  </h3>
                  <p className="text-muted-foreground text-sm">{exp.type}</p>
                </div>
                <span className="text-primary font-medium text-sm">{exp.role}</span>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
