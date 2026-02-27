import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { skillCategories } from '../data/skills'

const COLOR_MAP = {
  cyan:    { badge: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20',  dot: 'bg-cyan-400',    bar: 'from-cyan-500 to-cyan-400'    },
  violet:  { badge: 'bg-violet-400/10 text-violet-400 border-violet-400/20', dot: 'bg-violet-400', bar: 'from-violet-500 to-violet-400' },
  emerald: { badge: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20', dot: 'bg-emerald-400', bar: 'from-emerald-500 to-emerald-400' },
  amber:   { badge: 'bg-amber-400/10 text-amber-400 border-amber-400/20', dot: 'bg-amber-400',   bar: 'from-amber-500 to-amber-400'   },
}

function SkillBar({ name, icon: Icon, level, color }) {
  const c = COLOR_MAP[color]
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-2 text-slate-300 font-medium">
          {Icon && <Icon className={`text-base ${c.badge.split(' ')[1]}`} />}
          {!Icon && <span className="w-4 h-4 rounded-sm bg-white/10 inline-block" />}
          {name}
        </span>
        <span className="text-slate-500 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${c.bar}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
        />
      </div>
    </div>
  )
}

function SkillCard({ category }) {
  const c = COLOR_MAP[category.color]
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="card p-6 hover:border-white/10 transition-colors"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className={`w-2 h-2 rounded-full ${c.dot}`} />
        <h3 className="font-semibold text-white">{category.label}</h3>
        <span className={`ml-auto text-xs px-2 py-0.5 rounded-full border ${c.badge}`}>
          {category.skills.length} skills
        </span>
      </div>
      <div className="space-y-3">
        {category.skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} color={category.color} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-dark-800/30">
      <div className="text-center mb-14">
        <span className="section-tag">Skills</span>
        <h2 className="section-heading">
          My <span className="gradient-text">technical toolkit</span>
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          Technologies I work with daily and tools that power my workflow.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {skillCategories.map((cat) => (
          <SkillCard key={cat.id} category={cat} />
        ))}
      </div>

      {/* Quick badge cloud */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 flex flex-wrap justify-center gap-2"
      >
        {skillCategories.flatMap((cat) => cat.skills).map((s) => (
          <span
            key={s.name}
            className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-slate-400 border border-white/5
                       hover:border-accent/30 hover:text-accent transition-colors cursor-default"
          >
            {s.name}
          </span>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
