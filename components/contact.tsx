"use client"

import { useState } from "react"
import { Send, Mail, Linkedin, Github, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#", username: "@yourname" },
  { icon: Instagram, label: "Instagram", href: "#", username: "@yourname" },
  { icon: Twitter, label: "X (Twitter)", href: "#", username: "@yourname" },
  { icon: Youtube, label: "YouTube", href: "#", username: "@yourname" },
  { icon: Github, label: "GitHub", href: "#", username: "@yourname" },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="text-center mb-20 p-12 lg:p-20 bg-gradient-to-b from-primary/10 to-transparent border border-border rounded-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Open to Opportunities
          </div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {"Let's build something"}
            <br />
            <span className="text-primary">great together.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["Developer Advocate", "Brand Partnerships", "Developer Relations", "Technical Evangelist", "Content Collaborations"].map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
            Get in Touch
          </p>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Contact
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a role, partnership, or collaboration in mind? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h3 
              className="text-2xl font-bold text-foreground mb-6 text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {"Let's connect and create"}
              <br />
              <span className="text-primary">something awesome.</span>
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {"Whether you're a brand looking for a developer advocate, a company in need of DevRel expertise, or just want to chat about tech, I'd love to hear from you."}
            </p>

            {/* Email */}
            <div className="flex items-center gap-4 mb-8 p-4 bg-card border border-border rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Email</p>
                <a href="mailto:yourname@email.com" className="text-foreground font-medium hover:text-primary transition-colors">
                  yourname@email.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {social.label}
                  </span>
                  <span className="ml-auto text-primary text-sm">{social.username}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-card border border-border rounded-2xl">
            <h3 
              className="text-xl font-semibold text-foreground mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary border-border focus:border-primary"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-secondary border-border focus:border-primary"
                  required
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-secondary border-border focus:border-primary"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-[150px] px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
