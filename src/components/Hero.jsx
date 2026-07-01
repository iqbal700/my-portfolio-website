'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const stats = [
    { number: '1+', label: 'Years of\nexperience' },
    { number: '15+', label: 'Projects\ncompleted' },
    { number: '10+', label: 'Technologies\nmastered' },
    { number: '200+', label: 'Code\ncommits' },
  ]

  const socials = [
  {
    name: "GitHub",
    href: "https://github.com/iqbal700",
    icon: (
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/iqbal7k",
    icon: (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1AXWGqDKnF/",
    icon: (
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    ),
  },
]

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-12 overflow-hidden text-white font-sans bg-linear-to-br from-[#070B14] via-[#111827] to-[#1a1035]"
    >

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-105 w-105 rounded-full bg-cyan-500/15 blur-[150px]" />
      <div className="absolute top-1/2 -right-40 h-95 w-95 rounded-full bg-purple-500/15 blur-[150px]" />
      <div className="absolute bottom-0 left-1/2 h-80 w-[320px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[130px]" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left"
        >
          <span className="text-sm font-mono tracking-wider text-gray-300 uppercase">
            MERN stack Developer
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mt-3 mb-6 leading-none">
            Hello Its Me <br />
            <span className="bg-linear-to-r from-cyan-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
              IqBaL
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
            I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6">
            <a
              href="/Iqbal-Resume.pdf"
              download
              className="inline-flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-3.5 rounded-full font-mono font-bold uppercase tracking-wider hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Download CV

              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>

            {/* Social */}
            <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="cursor-pointer w-11 h-11 border border-cyan-400/60 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-110 active:scale-95"
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 1, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:max-w-sm aspect-square flex items-center justify-center">

            <div className="absolute inset-0 border-4 border-dashed border-cyan-400/70 rounded-full animate-rotate-dashed" />

            <div className="relative w-[84%] h-[84%] rounded-full overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(34,211,238,.25)]">
              <Image
                src="/HeroImg.jpeg"
                alt="Profile"
                fill
                className="object-cover brightness-90"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Stats */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-6xl w-full mt-24 lg:mt-32"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-4xl md:text-6xl font-bold font-mono text-white">
                {stat.number}
              </span>
              <p className="text-xs md:text-sm text-gray-400 uppercase leading-tight font-mono whitespace-pre-line">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.footer>

    </section>
  )
}