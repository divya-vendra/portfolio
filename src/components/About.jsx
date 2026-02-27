import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const STATS = [
  { value: '2+',  label: 'Years Experience'   },
  { value: '7+',  label: 'Projects Shipped'   },
  { value: '40+', label: 'Technologies Used'  },
  { value: '2',   label: 'Companies'          },
]

const STRENGTHS = [
  { emoji: '⚡', title: 'Performance Optimization',  desc: 'Code splitting, lazy loading, memoization, and debouncing for blazing-fast React apps.' },
  { emoji: '📊', title: 'Data Visualization',        desc: 'Complex datasets visualized with Chart.js, Recharts, ECharts, and D3.js.' },
  { emoji: '🔌', title: 'API & Systems Integration', desc: 'REST APIs, OpenAPI TypeScript clients, WebRTC, SIP.js, and LLM API integrations.' },
  { emoji: '🏗️', title: 'Scalable Architecture',    desc: 'Feature-modular frontends with Redux Toolkit, Zustand, TanStack Query, and custom hooks.' },
]

export default function About() {
  return (
    <SectionWrapper id="about">
      {/* Section heading */}
      <div className="text-center mb-14">
        <span className="section-tag">About Me</span>
        <h2 className="section-heading">
          Passionate about building{' '}
          <span className="gradient-text">great experiences</span>
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          A brief look at who I am, what I do, and what drives me.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Bio */}
        <div className="space-y-5">
          <p className="text-slate-300 leading-relaxed text-base">
            I'm <span className="text-white font-semibold">Vendra Divya Sree</span>, a Frontend Developer
            based in Bengaluru, Karnataka with a focus on building responsive, dynamic UIs using React.js
            and modern frameworks like Redux Toolkit and Ant Design.
          </p>
          <p className="text-slate-400 leading-relaxed text-base">
            I'm proficient in creating user-friendly interfaces, visualizing complex datasets, and
            integrating APIs seamlessly. I have hands-on experience implementing real-time communication
            systems (WebRTC / SIP.js) and enhancing performance through optimized code — from code
            splitting and lazy loading to custom hooks architecture.
          </p>
          <p className="text-slate-400 leading-relaxed text-base">
            Adept at testing, debugging, and ensuring reliability across projects. When I'm not coding,
            I explore new frontend libraries and keep up with the ever-evolving React ecosystem.
          </p>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary inline-flex"
            >
              Let's work together
            </a>
          </div>
        </div>

        {/* Stats + Strengths */}
        <div className="space-y-6">
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map(({ value, label }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.03 }}
                className="card p-5 text-center glow-sm hover:border-accent/20 transition-colors"
              >
                <p className="text-3xl font-bold gradient-text mb-1">{value}</p>
                <p className="text-slate-400 text-sm">{label}</p>
              </motion.div>
            ))}
          </div>

          {/* Key strengths */}
          <div className="space-y-3">
            {STRENGTHS.map(({ emoji, title, desc }) => (
              <motion.div
                key={title}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-start gap-4 card p-4 hover:border-accent/20 transition-colors"
              >
                <span className="text-xl mt-0.5">{emoji}</span>
                <div>
                  <p className="text-white font-medium text-sm">{title}</p>
                  <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
