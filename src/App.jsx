import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-900">
      {/* Subtle grid overlay */}
      <div className="fixed inset-0 bg-grid pointer-events-none" aria-hidden />
      {/* Radial glow at top */}
      <div className="fixed inset-0 bg-radial-glow pointer-events-none" aria-hidden />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
