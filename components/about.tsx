"use client"

import { Code, Cpu, Layers, Users } from "lucide-react"

const skills = {
  frontend: ["React", "TypeScript", "JavaScript", "HTML/CSS"],
  backend: ["Laravel", "PHP", "REST APIs"],
  hardware: ["ESP32", "Microcontrollers"],
  methods: ["Agile / Scrum", "UX Research", "Git", "Beta Testing"],
}

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Polish", level: "Fluent" },
  { name: "Dutch", level: "Fluent" },
]

const features = [
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Building complete web applications from frontend interfaces to backend APIs using modern technologies.",
  },
  {
    icon: Cpu,
    title: "Hardware & IoT",
    description: "Experience with ESP32 microcontrollers and building hardware architecture for real-world installations.",
  },
  {
    icon: Layers,
    title: "UX Research",
    description: "Conducting user research and beta testing to ensure applications solve real user problems effectively.",
  },
  {
    icon: Users,
    title: "Agile Delivery",
    description: "Working in agile teams using Scrum methodology to deliver functional software iteratively.",
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
            Developer and ICT student at Fontys University with hands-on project experience, building applications that solve real problems.
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div className="space-y-6">
            <p className="text-foreground text-lg leading-relaxed">
              {"I'm a ICT student at Fontys University of Applied Sciences in Eindhoven. I build applications that solve real user problems — from parking management systems to health companion apps."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"My experience spans from working on start-up products to creating hardware installations for light festivals. I'm passionate, curious, and ready to contribute from day one."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {"I thrive in agile environments and enjoy the full development cycle — from conducting UX research to shipping production-ready code."}
            </p>

            {/* Languages */}
            <div className="pt-4">
              <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {lang.name} — {lang.level}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="text-sm font-medium text-foreground uppercase tracking-wider mb-3 capitalize">
                  {category === "methods" ? "Methods & Tools" : category === "hardware" ? "Hardware & IoT" : category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border border-border hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
