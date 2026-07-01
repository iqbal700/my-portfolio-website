'use client'

import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)

  const lastScrollY = useRef(0)

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Resume', href: '#resume', id: 'resume' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  // ACTIVE SECTION TRACK
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )

    navLinks.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // ✅ MOBILE ONLY SCROLL HIDE
  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768
      if (!isMobile) return 

      const currentY = window.scrollY

      if (currentY > lastScrollY.current && currentY > 80) {
        setShowNavbar(false) // scroll down
      } else {
        setShowNavbar(true) // scroll up
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-16px)] max-w-4xl transition-all duration-300 ${
        showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6 md:opacity-100 md:translate-y-0'
      }`}
    >
      <div className="bg-[#1c1b22]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
        <div className="flex items-center justify-between px-4 sm:px-5 md:px-6 py-2.5">

          {/* LEFT */}
          <div className="flex items-center gap-2">

            {/* MOBILE MENU */}
            <div className="md:hidden relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="btn btn-ghost btn-circle btn-sm text-white"
              >
                ☰
              </button>

              {isMenuOpen && (
                <div className="absolute top-12 left-0 w-56 bg-[#1c1b22] border border-white/10 rounded-xl shadow-2xl p-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 rounded-lg text-white hover:bg-white/10"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* LOGO */}
            <a href="#home" className="text-lg font-bold text-white">
              iqBaL<span className="text-[#00ffb9]">.</span>
            </a>
          </div>

          {/* DESKTOP NAV (UNCHANGED ALWAYS VISIBLE) */}
          <nav className="hidden md:flex gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`relative transition ${
                  activeSection === link.id
                    ? 'text-[#00ffb9]'
                    : 'text-white/70 hover:text-[#00ffb9]'
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-[#00ffb9] transition-all ${
                    activeSection === link.id ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="bg-[#00ffb9] text-[#1c1b22] font-bold px-4 sm:px-6 py-2 rounded-full hover:scale-105 transition"
          >
            Hire Me
          </a>

        </div>
      </div>
    </header>
  )
}