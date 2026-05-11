import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

const STATS = [
  { value: '2+',  label: 'Years Experience'   },
  { value: '7+',  label: 'Projects Shipped'   },
  { value: '40+', label: 'Technologies Used'  },
  { value: '2',   label: 'Companies'          },
]

const STRENGTHS = [
  { emoji: '🔧', title: 'Backend & Microservices',   desc: 'Java 17 / Spring Boot 3 microservices with Spring Security, MongoDB, Kubernetes, and AWS.' },
  { emoji: '⚡', title: 'Performance Optimization',  desc: 'Code splitting, lazy loading, memoization, and debouncing for blazing-fast React apps.' },
  { emoji: '📊', title: 'Data Visualization',        desc: 'Complex datasets visualized with Chart.js, Recharts, ApexCharts, ECharts, and D3.js.' },
  { emoji: '🔌', title: 'API & Systems Integration', desc: 'OpenAPI TypeScript clients, REST APIs, WebRTC/SIP.js, and AI streaming integrations.' },
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
            I'm <span className="text-white font-semibold">Vendra Divya Sree</span>, a Full Stack Developer
            based in Bengaluru, Karnataka with 2+ years of experience delivering production-grade,
            end-to-end features for enterprise platforms.
          </p>
          <p className="text-slate-400 leading-relaxed text-base">
            I build scalable React.js applications and Java/Spring Boot microservices spanning
            AI-powered interfaces, real-time dashboards, rule compilation engines, and multi-cloud
            REST APIs. Adept at deploying and integrating systems with MongoDB, Redis, Kafka, and
            Kubernetes on AWS.
          </p>
          <p className="text-slate-400 leading-relaxed text-base">
            When I'm not coding, I explore new libraries and keep up with the ever-evolving
            full-stack ecosystem — from frontend performance patterns to distributed systems design.
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
