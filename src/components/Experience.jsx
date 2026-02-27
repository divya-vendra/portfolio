import { motion } from 'framer-motion'
import { HiLocationMarker, HiCalendar, HiBriefcase } from 'react-icons/hi'
import SectionWrapper from './SectionWrapper'
import { experiences } from '../data/experience'

function ExperienceCard({ exp, index }) {
  const isLeft = index % 2 === 0

  return (
    <div className={`relative flex gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-start`}>
      {/* Timeline dot */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0" style={{ width: 0 }}>
        <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-accent/20 ring-offset-2 ring-offset-dark-900 z-10" />
      </div>

      {/* Card */}
      <motion.article
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="card p-6 flex-1 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5
                   transition-all duration-300 group"
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="font-bold text-white text-lg group-hover:text-accent transition-colors">
              {exp.role}
            </h3>
            <a
              href={exp.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-medium text-sm hover:underline"
            >
              {exp.company}
            </a>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 flex-shrink-0">
            {exp.type}
          </span>
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 mb-4">
          <span className="flex items-center gap-1">
            <HiCalendar size={12} />
            {exp.period}
            <span className="text-slate-600 ml-1">({exp.duration})</span>
          </span>
          <span className="flex items-center gap-1">
            <HiLocationMarker size={12} />
            {exp.location}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

        {/* Achievements */}
        <ul className="space-y-2 mb-5">
          {exp.achievements.map((ach, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="text-accent mt-1 flex-shrink-0">▸</span>
              {ach}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
          {exp.tags.map((tag) => (
            <span key={tag} className="tech-badge text-[11px]">
              {tag}
            </span>
          ))}
        </div>
      </motion.article>
    </div>
  )
}

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-dark-800/30">
      <div className="text-center mb-14">
        <span className="section-tag">Experience</span>
        <h2 className="section-heading">
          My professional <span className="gradient-text">journey</span>
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          Roles that shaped my skills and perspective as a developer.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line — desktop */}
        <div
          aria-hidden
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b
                     from-transparent via-accent/30 to-transparent -translate-x-1/2"
        />

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, i) => (
            <div key={exp.id} className="md:grid md:grid-cols-[1fr_32px_1fr] md:gap-0 items-start">
              {/* Left side */}
              {i % 2 === 0 ? (
                <>
                  <motion.article
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="card p-6 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5
                               transition-all duration-300 group md:col-start-1"
                  >
                    <ExperienceContent exp={exp} />
                  </motion.article>
                  {/* Center dot */}
                  <div className="hidden md:flex justify-center items-start pt-6">
                    <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-accent/20 ring-offset-2 ring-offset-dark-900 z-10" />
                  </div>
                  {/* Empty right */}
                  <div className="hidden md:block" />
                </>
              ) : (
                <>
                  {/* Empty left */}
                  <div className="hidden md:block" />
                  {/* Center dot */}
                  <div className="hidden md:flex justify-center items-start pt-6">
                    <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-accent/20 ring-offset-2 ring-offset-dark-900 z-10" />
                  </div>
                  <motion.article
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="card p-6 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5
                               transition-all duration-300 group md:col-start-3"
                  >
                    <ExperienceContent exp={exp} />
                  </motion.article>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

function ExperienceContent({ exp }) {
  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="font-bold text-white text-base group-hover:text-accent transition-colors">
            {exp.role}
          </h3>
          <a
            href={exp.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-medium text-sm hover:underline"
          >
            {exp.company}
          </a>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 flex-shrink-0">
          {exp.type}
        </span>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 mb-4">
        <span className="flex items-center gap-1">
          <HiCalendar size={12} />
          {exp.period}
          <span className="text-slate-600 ml-1">({exp.duration})</span>
        </span>
        <span className="flex items-center gap-1">
          <HiLocationMarker size={12} />
          {exp.location}
        </span>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

      <ul className="space-y-2 mb-5">
        {exp.achievements.map((ach, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
            <span className="text-accent mt-1 flex-shrink-0">▸</span>
            {ach}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
        {exp.tags.map((tag) => (
          <span key={tag} className="tech-badge text-[11px]">
            {tag}
          </span>
        ))}
      </div>
    </>
  )
}
