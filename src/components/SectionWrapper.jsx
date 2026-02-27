import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.6, ease: 'easeOut' } },
}

/**
 * Wraps a section with a standard fade-up entrance animation.
 * Usage: <SectionWrapper id="about"> ... </SectionWrapper>
 */
export default function SectionWrapper({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className={`section-padding relative z-10 ${className}`}
    >
      <div className="container-max">
        {children}
      </div>
    </motion.section>
  )
}
