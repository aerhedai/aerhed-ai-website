"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Zap, Target } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Brain,
      title: "AI Innovation",
      description:
        "Developing cutting-edge artificial intelligence solutions that push the boundaries of what's possible.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building high-performance applications optimized for speed, efficiency, and scalability.",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Delivering precise, targeted solutions that meet specific business needs and objectives.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-800/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Aerhed AI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At Aerhed AI, we specialize in creating innovative artificial intelligence solutions that transform ideas
            into reality. Our focus is on developing cutting-edge projects that showcase the power and potential of
            modern AI technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
