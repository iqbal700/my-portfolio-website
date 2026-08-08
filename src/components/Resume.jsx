'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const practicalExperience = [
  {
    role: 'Full-Stack MERN Developer',
    company: 'ZapShift (Parcel Delivery Platform)',
    year: '2025 - Present',
    desc: 'Engineered a full-stack logistics application featuring real-time package tracking, automated cost calculation, secure payment integration, and dynamic dashboard views.'
  },
  {
    role: 'Full-Stack Developer',
    company: 'RedHero (Blood Donation Network)',
    year: '2025',
    desc: 'Developed a community platform connecting donors with patients, featuring location-based search, blood group filtering, donor availability status, and request management.'
  },
  {
    role: 'Full-Stack Developer',
    company: 'PetCare (Pet Services & Adoption Platform)',
    year: '2024 - 2025',
    desc: 'Built a responsive web app for pet care scheduling and adoption services with user authentication, booking management, and reactive UI elements using DaisyUI.'
  }
]

const education = [
  { 
    degree: 'MERN Stack Development', 
    institution: 'Programming Hero', 
    year: '2025', 
    desc: 'Completed intensive full-stack web development training, mastering MongoDB, Express.js, React, and Node.js through production-grade project builds.' 
  },
  { 
    degree: 'English Language & Literature', 
    institution: 'International Islamic University Chittagong', 
    year: 'Ongoing', 
    desc: 'Developing strong analytical skills, critical thinking, structural writing, and effective professional communication.' 
  }
]

export default function Resume() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // Avoids SSR / Hydration mismatch errors in Next.js
  }

  return (
    <section id="resume" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-black mb-4">My Journey</h2>
        <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Practical Experience Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-primary w-6 h-6" />
            <h3 className="text-xl font-extrabold">Practical Experience</h3>
          </div>
          <div className="space-y-6 border-l border-base-300 pl-4 ml-3">
            {practicalExperience.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -10 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                className="relative"
              >
                <div className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-primary" />
                <span className="text-xs font-bold text-primary">{item.year}</span>
                <h4 className="text-lg font-bold text-base-content">{item.role}</h4>
                <p className="text-sm text-base-content/60 font-medium">{item.company}</p>
                <p className="text-sm text-base-content/70 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-primary w-6 h-6" />
            <h3 className="text-xl font-extrabold">Education & Training</h3>
          </div>
          <div className="space-y-6 border-l border-base-300 pl-4 ml-3">
            {education.map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -10 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                className="relative"
              >
                <div className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-primary" />
                <span className="text-xs font-bold text-primary">{item.year}</span>
                <h4 className="text-lg font-bold text-base-content">{item.degree}</h4>
                <p className="text-sm text-base-content/60 font-medium">{item.institution}</p>
                <p className="text-sm text-base-content/70 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}