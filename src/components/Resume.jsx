// src/components/Resume.jsx
'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const experience = [
  { role: 'Frontend Engineer', company: 'Tech Studio', year: '2024 - Present', desc: 'Engineered web components and complex interactive client application layouts.' },
  { role: 'Web Intern', company: 'Digital Agency', year: '2023 - 2024', desc: 'Optimized internal operational interfaces and developed responsive layouts.' }
]

const education = [
  { degree: 'English Language & Literature', institution: 'University Program', year: 'Ongoing', desc: 'Deepening analytical research, structural writing, and communications proficiency.' },
  { degree: 'Full Stack Academy Certification', institution: 'Web Dev Track', year: '2023', desc: 'Completed intense theoretical architecture and hands-on modular stack engineering courses.' }
]

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-black mb-4">My Journey</h2>
        <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-primary w-6 h-6" />
            <h3 className="text-xl font-extrabold">Work Experience</h3>
          </div>
          <div className="space-y-6 border-l border-base-300 pl-4 ml-3">
            {experience.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-primary" />
                <span className="text-xs font-bold text-primary">{item.year}</span>
                <h4 className="text-lg font-bold text-base-content">{item.role}</h4>
                <p className="text-sm text-base-content/60 font-medium">{item.company}</p>
                <p className="text-sm text-base-content/70 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-primary w-6 h-6" />
            <h3 className="text-xl font-extrabold">Education</h3>
          </div>
          <div className="space-y-6 border-l border-base-300 pl-4 ml-3">
            {education.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-primary" />
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