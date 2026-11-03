import { useScrollAnimation } from './hooks/useScrollAnimation';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Journey from './components/sections/Journey';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
