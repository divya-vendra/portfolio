import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { HiMail, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi'
import emailjs from '@emailjs/browser'
import SectionWrapper from './SectionWrapper'

const EMAILJS_SERVICE_ID  = 'service_72ina4n'
const EMAILJS_TEMPLATE_ID = 'template_dlci0un'
const EMAILJS_PUBLIC_KEY  = 'p_jvViD3I7S48VujA'

const SOCIALS = [
  {
    icon:  FaGithub,
    label: 'GitHub',
    handle: '@divya-vendra',
    href:  'https://github.com/divya-vendra',
    color: 'hover:text-white hover:border-white/30',
  },
  {
    icon:  FaLinkedin,
    label: 'LinkedIn',
    handle: 'Vendra Divya Sree',
    href:  'https://www.linkedin.com/in/vendra-divya-sree-6474a6281',
    color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/50',
  },
  {
    icon:  SiLeetcode,
    label: 'LeetCode',
    handle: '@divya-sree-vendra',
    href:  'https://leetcode.com/u/divya-sree-vendra/',
    color: 'hover:text-[#FFA116] hover:border-[#FFA116]/50',
  },
  {
    icon:  HiMail,
    label: 'Email',
    handle: 'divyasreevendra@gmail.com',
    href:  'mailto:divyasreevendra@gmail.com',
    color: 'hover:text-accent hover:border-accent/50',
  },
]

const INITIAL_FORM = { name: '', email: '', message: '' }

function validate(fields) {
  const errors = {}
  if (!fields.name.trim())                            errors.name    = 'Name is required.'
  if (!fields.email.trim())                           errors.email   = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = 'Enter a valid email.'
  if (!fields.message.trim())                         errors.message = 'Message is required.'
  else if (fields.message.trim().length < 20)         errors.message = 'Message must be at least 20 characters.'
  return errors
}

export default function Contact() {
  const [form,    setForm]    = useState(INITIAL_FORM)
  const [errors,  setErrors]  = useState({})
  const [status,  setStatus]  = useState('idle') // idle | loading | success | error
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear error on change once touched
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const fieldErrors = validate(form)
    if (fieldErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const allTouched = { name: true, email: true, message: true }
    setTouched(allTouched)

    const fieldErrors = validate(form)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }

    setStatus('loading')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          message:      form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm(INITIAL_FORM)
      setTouched({})
      setErrors({})
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (field) =>
    `w-full bg-dark-700 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600
     outline-none transition-all duration-200
     focus:border-accent focus:ring-2 focus:ring-accent/20
     ${errors[field] ? 'border-red-500/60' : 'border-white/8 hover:border-white/15'}`

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-14">
        <span className="section-tag">Contact</span>
        <h2 className="section-heading">
          Let's <span className="gradient-text">get in touch</span>
        </h2>
        <p className="text-muted max-w-xl mx-auto">
          Have a project in mind or want to chat? I'm always open to new opportunities
          and interesting conversations.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Left — social cards */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-white font-semibold mb-2">Find me on</h3>
          {SOCIALS.map(({ icon: Icon, label, handle, href, color }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`flex items-center gap-3 card p-3 text-slate-400 border border-white/5
                         transition-colors duration-200 group ${color}`}
            >
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                <Icon size={16} />
              </div>
              <div>
                <p className="text-white text-sm font-medium">{label}</p>
                <p className="text-slate-500 text-xs">{handle}</p>
              </div>
            </motion.a>
          ))}

          <div className="card p-3 border border-white/5 mt-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-white font-medium">Available for work</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Open to full-time roles.
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card p-10 text-center h-full flex flex-col items-center justify-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-400/15 flex items-center justify-center">
                  <HiCheckCircle size={36} className="text-emerald-400" />
                </div>
                <h3 className="text-white font-bold text-xl">Message sent!</h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Thanks for reaching out. I'll get back to you within 24–48 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-outline text-sm mt-2"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                noValidate
                className="card p-6 space-y-5"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm text-slate-300 mb-1.5 font-medium">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    autoComplete="name"
                    className={inputClass('name')}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <HiExclamationCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm text-slate-300 mb-1.5 font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="john@example.com"
                    autoComplete="email"
                    className={inputClass('email')}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <HiExclamationCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm text-slate-300 mb-1.5 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell me about your project or what you'd like to discuss..."
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <HiExclamationCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                {status === 'error' && (
                  <p className="text-red-400 text-sm flex items-center gap-2">
                    <HiExclamationCircle size={16} />
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  )
}
