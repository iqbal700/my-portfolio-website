"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
} from "react-icons/si";

const outerSkills = [
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
];

const innerSkills = [
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#070B14] py-24"
    >
      {/* Glow */}
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold text-white mb-4"
        >
          My Skills
        </motion.h2>

        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Technologies I use to build modern web applications
        </p>

        {/* ORBIT WRAPPER (NEW FIX) */}
        <div className="relative mx-auto flex items-center justify-center h-105 w-105 sm:h-125 sm:w-125">

          {/* OUTER ORBIT */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute h-105 w-105 rounded-full border border-cyan-400/10"
          >
            {outerSkills.map((skill, index) => {
              const Icon = skill.icon;
              const angle = (360 / outerSkills.length) * index;

              return (
                <div
                  key={skill.name}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-180px)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg"
                  >
                    <Icon size={26} style={{ color: skill.color }} />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* INNER ORBIT */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute h-67.5 w-67.5 rounded-full border border-purple-400/10"
          >
            {innerSkills.map((skill, index) => {
              const Icon = skill.icon;
              const angle = (360 / innerSkills.length) * index;

              return (
                <div
                  key={skill.name}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-115px)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10"
                  >
                    <Icon size={20} style={{ color: skill.color }} />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* CENTER CORE */}
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white/5 backdrop-blur-xl border border-cyan-400/20 shadow-[0_0_40px_rgba(34,211,238,.25)]"
          >
            <SiReact size={45} className="text-cyan-400" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}