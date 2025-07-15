"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Star, GitFork, Eye } from "lucide-react"

export default function GitHub() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Github, label: "Repositories", value: "25+" },
    { icon: Star, label: "Stars", value: "150+" },
    { icon: GitFork, label: "Forks", value: "45+" },
    { icon: Eye, label: "Watchers", value: "30+" },
  ]

  return (
    <section id="github" className="py-20 bg-gray-800/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Open Source Contributions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our open-source projects and contributions to the AI community. All our work is available on GitHub
            for collaboration and learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-gray-900/50 p-6 rounded-xl border border-gray-700"
            >
              <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/aerhedai"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 border border-gray-600"
          >
            <Github className="w-6 h-6" />
            Visit GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
