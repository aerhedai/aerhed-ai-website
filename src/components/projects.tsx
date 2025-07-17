"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  name: string
  description: string
  html_url: string
  homepage?: string
  language: string
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://api.github.com/orgs/aerhedai/repos", {
          headers: {
          },
        })

        if (!res.ok) throw new Error("Failed to fetch repositories")
        const data = await res.json()

        // Optional: Filter/fix descriptions
        const filtered = data
          .filter((repo: any) => !repo.fork) // Skip forks
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description || "No description provided.",
            html_url: repo.html_url,
            homepage: repo.homepage,
            language: repo.language,
          }))

        setProjects(filtered)
      } catch (err) {
        console.error("Error fetching projects:", err)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of real GitHub repositories under our organization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt={project.name}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.language && (
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {project.language}
                    </span>
                  )}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </motion.a>
                  {project.homepage && (
                    <motion.a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
