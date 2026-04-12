"use client"

import Link from "next/link"
import { Github, Linkedin, ArrowUp } from "lucide-react"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/bartosz-kaszuba", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/bartosz-kaszuba", label: "GitHub" },
]

const footerLinks = [
  { label: "About", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Education", href: "education" },
  { label: "Contact", href: "contact" },
]

export function Footer() {
  const { scrollToSection } = useSmoothScroll()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToSection(href)
  }

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Bartosz Kaszuba
            </Link>
            <p className="text-muted-foreground text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Footer Links */}
          <nav className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
            <button
              onClick={scrollToTop}
              className="ml-4 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
