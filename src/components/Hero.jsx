import { motion } from 'framer-motion'
import { HiArrowDown, HiDownload } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const TECH_STACK = ['React.js', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Tailwind CSS v4']

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center section-padding overflow-hidden"
    >
      {/* Background decorations */}
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]
                   rounded-full bg-accent/5 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full
                   bg-violet-500/5 blur-[80px] pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="container-max text-center relative z-10"
      >
        {/* Pre-headline */}
        <motion.p
          variants={itemVariants}
          className="font-mono text-accent text-sm sm:text-base mb-4 tracking-widest uppercase"
        >
          Hi there, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4"
        >
          <span className="gradient-text">Divya Sree</span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 mb-6"
        >
          Frontend Developer
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-8"
        >
          Building responsive, data-rich React applications with modern tooling.
          2+ years delivering everything from real-time dashboards and drag-and-drop
          builders to secure banking apps and AI-powered content suites.
        </motion.p>

        {/* Tech stack badges */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {TECH_STACK.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button onClick={scrollToProjects} className="btn-primary">
            View Projects
            <HiArrowDown className="animate-bounce" size={16} />
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Download Resume
            <HiDownload size={16} />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          {[
            { icon: FaGithub,   href: 'https://github.com/divya-vendra',                              label: 'GitHub'   },
            { icon: FaLinkedin, href: 'https://www.linkedin.com/in/vendra-divya-sree-6474a6281', label: 'LinkedIn' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-500 hover:text-accent transition-all duration-200
                         hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
            >
              <Icon size={22} />
            </a>
          ))}
        </motion.div>
      </motion.div>


      {/* Floating code snippet — decorative */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
        className="absolute right-8 top-1/3 hidden xl:block"
      >
        <div className="card p-4 font-mono text-xs text-slate-500 glow-sm w-56">
          <p><span className="text-violet-400">const</span> <span className="text-accent">dev</span> = {'{'}</p>
          <p className="pl-3"><span className="text-slate-300">name</span>: <span className="text-emerald-400">'Divya'</span>,</p>
          <p className="pl-3"><span className="text-slate-300">role</span>: <span className="text-emerald-400">'Frontend'</span>,</p>
          <p className="pl-3"><span className="text-slate-300">coffee</span>: <span className="text-orange-400">Infinity</span>,</p>
          <p className="pl-3"><span className="text-slate-300">bugs</span>: <span className="text-red-400">0</span>, <span className="text-slate-600">// 😅</span></p>
          <p>{'}'}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
        className="absolute left-8 top-2/3 hidden xl:block"
      >
        <div className="card p-4 font-mono text-xs text-slate-500 glow-sm w-52">
          <p><span className="text-cyan-400">{'<'}</span><span className="text-violet-400">ReactDeveloper</span></p>
          <p className="pl-3 text-slate-400">skills<span className="text-accent">=</span><span className="text-emerald-400">{"{'unlimited'}"}</span></p>
          <p className="pl-3 text-slate-400">passion<span className="text-accent">=</span><span className="text-emerald-400">{"{'high'}"}</span></p>
          <p><span className="text-cyan-400">{'/>'}</span></p>
        </div>
      </motion.div>
    </section>
  )
}
