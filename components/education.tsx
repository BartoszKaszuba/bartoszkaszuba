"use client"

import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Bachelor ICT (HBO)",
    institution: "Fontys University of Applied Sciences, Eindhoven",
    date: "2024 – Present",
    description: "Software development track with active project work for real clients and start-ups. Focus on full stack engineering and agile delivery.",
    isCurrent: true,
  },
  {
    degree: "MBO Level 4 – Transport & Logistics Management",
    institution: "Completed 2024",
    date: "Completed 2024",
    description: "Highest vocational qualification level. Developed strong analytical thinking, planning skills and professional communication.",
    isCurrent: false,
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
            Academic Background
          </p>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Education
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Building a strong foundation in software development and business management.
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 lg:p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 
                        className="text-foreground font-semibold text-lg"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {edu.degree}
                      </h3>
                      <p className="text-primary text-sm">{edu.institution}</p>
                    </div>
                    <span 
                      className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                        edu.isCurrent 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {edu.date}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
