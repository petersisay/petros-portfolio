import { useState, useEffect } from 'react'
import { useTheme } from './hooks/useTheme'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import { useScrollSpy } from './hooks/useScrollSpy'
import SideNav from './components/layout/SideNav'
import MobileNav from './components/layout/MobileNav'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import MouseGlow from './components/common/MouseGlow'
import styles from './App.module.css'

export default function App() {
  const { theme, toggle } = useTheme()
  const activeSection = useScrollSpy(['hero', 'about', 'experience', 'projects', 'skills', 'contact'])
  useScrollAnimation()

  return (
    <div className={styles.app}>
      <MouseGlow />
      <SideNav active={activeSection} theme={theme} toggleTheme={toggle} />
      <MobileNav active={activeSection} theme={theme} toggleTheme={toggle} />
      <main className={styles.main}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
