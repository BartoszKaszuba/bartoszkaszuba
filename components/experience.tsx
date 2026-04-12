"use client"

const workExperience = [
  {
    date: "2024–2026",
    title: "Freelance",
    company: "Hospitality",
    description: "Bar and kitchen support across various venues. Developed adaptability and customer service skills in fast-paced environments.",
    tags: ["Customer Service", "Adaptability", "Teamwork"],
  },
  {
    date: "2024",
    title: "Logistics Intern",
    company: "Cornelissen",
    description: "Applied structured process thinking to supply-chain operations and transport coordination. Built professional communication skills through client-facing administration in a logistics environment.",
    tags: ["Logistics", "Process Optimization", "Client Communication"],
  },
  {
    date: "2022–2023",
    title: "Logistics Intern",
    company: "Van Helderen",
    description: "Developed a process-oriented work ethic through warehouse operations and transport coordination. Gained hands-on experience in client communication and operational reliability.",
    tags: ["Warehouse Operations", "Transport", "Reliability"],
  },
]

const honorableMentions = [
  {
    date: "2025–Present",
    title: "Vice-Chair - Institute Participation Council",
    description: "Vice-Chair of an ICT participation council at Fontys. Developed an understanding of enterprise strategy and professional advisory skills.",
    tags: ["Leadership", "Strategy", "Advisory"],
  },
  {
    date: "2024–Present",
    title: "Activity Committee Member",
    description: "Member of activity committee of study association IERA, developed strong organizational skills.",
    tags: ["Organization", "Teamwork", "Events"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
            Professional Background
          </p>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Experience
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Building professional skills through diverse work experiences and team collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Work Experience */}
          <div>
            <h3 
              className="text-xl font-semibold text-foreground mb-8 flex items-center gap-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span className="w-8 h-0.5 bg-primary" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {workExperience.map((exp, index) => (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h4 
                        className="text-foreground font-semibold"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {exp.title}
                      </h4>
                      <p className="text-primary text-sm">{exp.company}</p>
                    </div>
                    <span className="text-muted-foreground text-sm whitespace-nowrap">{exp.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
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

          {/* Honorable Mentions */}
          <div>
            <h3 
              className="text-xl font-semibold text-foreground mb-8 flex items-center gap-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span className="w-8 h-0.5 bg-accent" />
              Honorable Mentions
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Skills and experiences that build professional and interpersonal capabilities beyond IT.
            </p>
            <div className="space-y-6">
              {honorableMentions.map((mention, index) => (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <h4 
                      className="text-foreground font-semibold"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {mention.title}
                    </h4>
                    <span className="text-muted-foreground text-sm whitespace-nowrap">{mention.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {mention.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {mention.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
