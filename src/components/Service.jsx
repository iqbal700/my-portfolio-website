// src/components/Services.jsx
'use client'

import { motion } from 'framer-motion'
import { Code, Layout, Smartphone, Zap } from 'lucide-react'

const serviceList = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'MERN Stack Development',
    desc: 'Building full-stack web applications using MongoDB, Express, React, and Node.js with clean architecture.'
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'Frontend Development',
    desc: 'Creating modern, responsive UI using React, Next.js, Tailwind CSS with smooth user experience.'
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Responsive Web Design',
    desc: 'Mobile-first design approach ensuring perfect layout across all devices and screen sizes.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Performance Optimization',
    desc: 'Improving speed, reducing load time, and optimizing React apps for better performance.'
  }
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-4 text-white"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-black">
          What I Offer
        </h2>

        <p className="text-gray-400 mt-2">
          MERN Stack Developer Services
        </p>

        <div className="h-1 w-16 bg-linear-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {serviceList.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              duration: 0.6
            }}

            animate={{
              y: index % 2 === 0
                ? [-8, 8, -8]
                : [8, -8, 8]
            }}

            style={{
              animationDelay: `${index * 0.3}s`
            }}

            className="relative group"
          >
            {/* Card */}
            <div
              className="
              h-full
              rounded-2xl
              p-6
              border
              border-white/10

              bg-linear-to-br
              from-cyan-500/10
              via-white/5
              to-purple-500/10

              backdrop-blur-xl

              shadow-[0_0_25px_rgba(34,211,238,.08)]
              hover:shadow-[0_0_60px_rgba(168,85,247,.20)]

              hover:border-cyan-400/30

              transition-all
              duration-500
              "
            >

              {/* Icon */}
              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.15
                }}
                transition={{
                  duration: 0.6
                }}
                className="
                inline-flex
                p-3
                rounded-xl
                mb-5

                text-cyan-400

                bg-linear-to-br
                from-cyan-400/20
                to-purple-500/20

                border
                border-cyan-400/20
                "
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-3 transition-colors duration-300 group-hover:text-cyan-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-7 text-gray-300">
                {service.desc}
              </p>
            </div>

            {/* Glow Border */}
            <div
              className="
              absolute
              inset-0
              rounded-2xl
              border
              border-cyan-400/0
              group-hover:border-cyan-400/30
              pointer-events-none
              transition-all
              duration-500
              "
            />
          </motion.div>
        ))}

      </div>
    </section>
  )
}