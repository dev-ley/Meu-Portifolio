import Header from '../components/layout/Header'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contato from '@/components/sections/Contato'
import Footer from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contato/>
      <Footer/>
    </>
  )
}
