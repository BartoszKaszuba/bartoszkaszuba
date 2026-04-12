"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

const navLinks = [
  { href: "about", label: "About" },
  { href: "projects", label: "Projects" },
  { href: "experience", label: "Experience" },
  { href: "education", label: "Education" },
  { href: "contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollToSection } = useSmoothScroll()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToSection(href)
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="flex items-center gap-3 text-xl font-bold text-foreground hover:text-primary transition-colors"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
              <Image
                src="/images/profile.jpg"
                alt="Bartosz Kaszuba"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            Bartosz Kaszuba
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get in Touch
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <Button 
                onClick={() => {
                  scrollToSection("contact")
                  setIsMobileMenuOpen(false)
                }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
              >
                Get in Touch
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
