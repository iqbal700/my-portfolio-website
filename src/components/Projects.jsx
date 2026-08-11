// src/components/Projects.jsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const projectList = [
    { 
    title: 'RedHero', 
    tags: ['React', 'Node.js', 'MongoDB', 'Express'], 
    desc: 'RedHero is a blood donation management platform designed to connect donors with urgent requests in real time. Features quick donor searching, blood request management, and custom dashboards for donors, volunteers, and admins.',
    liveLink: 'https://redhero321.netlify.app',
    githubLink: 'https://github.com/iqbal700/b12a11-backend.git',
    image: '/PP1.png' 
    },
  { 
    title: 'Zap shift', 
    tags: ['Next.js', 'Tailwind', 'daisyUI', 'MongoDB'], 
    desc: 'A full-stack product delivery web app featuring real-time parcel tracking, interactive booking workflows, live delivery status updates, and role-based admin controls.',
    liveLink: 'https://zap-shift-client-ten.vercel.app/',
    githubLink: 'https://github.com/iqbal700/zap-shift-client.git',
    image: '/pp2.png' 
  },

  { 
    title: 'PetCare', 
    tags: ['React', 'Node.js', 'MongoDB', 'Express'], 
    desc: 'PetCare is a comprehensive pet management platform designed to connect pet owners with essential veterinary and care services. Features streamlined appointment scheduling,and customized dashboards for owners, vets, and service providers.',
    liveLink: 'https://mypetcare123.netlify.app',
    githubLink: 'https://github.com/iqbal700/B12A10.git',
    image: '/pp3.png' 
  }
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) 

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectList.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectList.length) % projectList.length)
  }

  // Auto-slider effect for mobile view
  useEffect(() => {
    // Check if window is defined (SSR safety) and if screen is mobile (< 1024px)
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024

    if (!isMobile) return

    // Set auto slide interval (e.g., 5000ms = 5 seconds)
    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    // Clear interval when the component unmounts or index changes to avoid memory leaks/double-firing
    return () => clearInterval(interval)
  }, [currentIndex]) // Dependencies ensure interval resets properly if user manually taps a nav arrow

  const currentProject = projectList[currentIndex]

  const textVariants = {
    initial: (dir) => ({ opacity: 0, x: dir > 0 ? -30 : 30 }),
    animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? 30 : -30, transition: { duration: 0.25 } })
  }

  const imageVariants = {
    initial: (dir) => ({ opacity: 0, x: dir > 0 ? 30 : -30, scale: 0.98 }),
    animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -30 : 30, scale: 0.98, transition: { duration: 0.25 } })
  }

  return (
    <section
      id="projects"
      className="py-14 px-6 max-w-5xl mx-auto text-white font-sans relative overflow-hidden rounded-2xl"
    >
      {/* Glass + Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-[#1a1921]/60 to-purple-500/10 backdrop-blur-2xl -z-10" />

      {/* Glow blobs */}
      <div className="absolute -top-20 -left-20 h-60 w-60 bg-cyan-400/20 blur-[120px] rounded-full" />
      <div className="absolute -bottom-20 -right-20 h-60 w-60 bg-purple-500/20 blur-[120px] rounded-full" />

      {/* Header */}
      <div className="flex flex-col mb-10 text-center lg:text-left relative z-10">
        <span className="text-xs font-mono tracking-wider text-gray-400 uppercase">
          My Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-1 text-white">
          Featured Projects<span className="text-cyan-300">.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

        {/* LEFT */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full order-2 lg:order-1">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-4"
            >
              <span className="text-5xl font-extrabold font-mono text-transparent bg-clip-text bg-linear-to-b from-white/20 to-transparent block">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-white hover:text-cyan-300 transition-colors">
                {currentProject.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-md">
                {currentProject.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {currentProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-[11px] font-mono text-cyan-300 bg-cyan-400/10 border border-cyan-300/20 px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* FIXED ACTION BUTTONS */}
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">

                {/* LIVE */}
                <a
                  href={currentProject.liveLink}
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-2 rounded-full border border-cyan-300/30 text-cyan-300 hover:bg-cyan-300 hover:text-black transition-all text-xs font-mono"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  Live
                </a>

                {/* GITHUB */}
                <a
                  href={currentProject.githubLink}
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/20 text-white hover:border-cyan-300 hover:text-cyan-300 transition-all text-xs font-mono"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.41-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.17 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.28-1.55 3.28-1.23 3.28-1.23.65 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.42.36.81 1.1.81 2.22v3.29c0 .32.22.69.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/>
                  </svg>
                  GitHub
                </a>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:col-span-7 flex justify-center order-1 lg:order-2 w-full">
          <div className="relative w-full aspect-16/10 max-w-xl mx-auto flex items-center justify-center rounded-xl border border-white/10 overflow-hidden backdrop-blur-xl bg-white/5">

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative w-full h-full"
              >
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#070B14]/40 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* NAV */}
      <div className="flex justify-center lg:justify-start items-center gap-3 mt-8 pt-4 border-t border-white/10 relative z-10">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300 hover:bg-cyan-300 hover:text-black transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300 hover:bg-cyan-300 hover:text-black transition-all"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  )
}