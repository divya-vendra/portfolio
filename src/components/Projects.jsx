import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { HiStar } from 'react-icons/hi'
import SectionWrapper from './SectionWrapper'
import { projects } from '../data/projects'

const FILTERS = ['All', 'Featured']

function ProjectCard({ project, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group card flex flex-col overflow-hidden
                 hover:border-accent/25 hover:shadow-xl hover:shadow-accent/5
                 transition-all duration-300"
    >
      {/* Placeholder image area */}
      <div className="relative h-44 bg-gradient-to-br from-dark-500 to-dark-600 overflow-hidden">
        {/* Decorative code pattern */}
        <div className="absolute inset-0 opacity-10 font-mono text-[10px] text-accent leading-4 p-3 overflow-hidden select-none">
          {`import React from 'react'\n\nfunction ${project.title.split(' ')[0]}() {\n  const [state, setState] =\n    useState(null)\n\n  useEffect(() => {\n    fetchData().then(setState)\n  }, [])\n\n  return <View data={state} />\n}`}
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-600 via-dark-600/50 to-transparent" />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1 text-xs px-2.5 py-1
                          bg-accent/15 text-accent border border-accent/30 rounded-full backdrop-blur-sm">
            <HiStar size={12} />
            Featured
          </div>
        )}

        {/* Hover overlay with links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4
                        bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`${project.title} GitHub`}
            className="p-3 rounded-xl bg-white/10 text-white hover:bg-accent hover:text-dark-900
                       transition-all duration-200 hover:scale-110"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`${project.title} live demo`}
            className="p-3 rounded-xl bg-white/10 text-white hover:bg-accent hover:text-dark-900
                       transition-all duration-200 hover:scale-110"
          >
            <FiExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-semibold text-white text-base mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-badge text-[11px]">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer links */}
        <div className="flex items-center gap-4 pt-3 border-t border-white/5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-500 hover:text-white text-xs
                       transition-colors"
          >
            <FiGithub size={13} />
            Source
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-500 hover:text-accent text-xs
                       transition-colors ml-auto"
          >
            Live Demo
            <FiExternalLink size={13} />
          </a>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'Featured'
    ? projects.filter((p) => p.featured)
    : projects

  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-10">
        <span className="section-tag">Projects</span>
        <h2 className="section-heading">
          Things I've <span className="gradient-text">built</span>
        </h2>
        <p className="text-muted max-w-2xl mx-auto mb-8">
          A selection of projects I'm proud of — each one a new challenge and a new lesson.
        </p>

        {/* Filter tabs */}
        <div className="inline-flex items-center gap-1 p-1 bg-dark-600 rounded-xl border border-white/5">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                filter === f ? 'text-dark-900' : 'text-slate-400 hover:text-white'
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 bg-accent rounded-lg"
                  transition={{ type: 'spring', duration: 0.4 }}
                />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-slate-500 text-sm mt-10"
      >
        View my work on{' '}
        <a
          href="https://github.com/divya-vendra"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          GitHub →
        </a>
      </motion.p>
    </SectionWrapper>
  )
}
