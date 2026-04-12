import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { BrandCollaborations } from "@/components/brand-collaborations"
import { Testimonial } from "@/components/testimonial"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <BrandCollaborations />
      <Testimonial />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
