"use client"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
import GitHub from "../components/github"
import Contact from "../components/contact"
import Navigation from "../components/navigation"

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <GitHub />
      <Contact />
    </div>
  )
}
