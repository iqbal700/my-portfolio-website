import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";

import Services from "@/components/Service";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-base-100">
      <Navbar />
      <Hero />
      <Skills/> 
      <Projects />
      <Services />
      <Resume/>
      <Contact />
    </main>
  )
}
