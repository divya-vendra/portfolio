import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail, HiHeart } from 'react-icons/hi'

const LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
]

const SOCIALS = [
  { icon: FaGithub,   href: 'https://github.com/divya-vendra',                              label: 'GitHub'   },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/vendra-divya-sree-6474a6281', label: 'LinkedIn' },
  { icon: HiMail,     href: 'mailto:divyasreevendra@gmail.com',                        label: 'Email'    },
]

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative z-10 border-t border-white/5 bg-dark-800/40">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="font-mono text-xl font-bold mb-3">
              <span className="text-accent">&lt;</span>
              <span className="text-white">DS</span>
              <span className="text-accent">/&gt;</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Frontend Developer based in Bengaluru, Karnataka.
              Building responsive, data-rich React applications with modern tooling.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2">
              {LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href.replace('#', ''))}
                    className="text-slate-500 hover:text-accent text-sm transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / social */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Connect</h4>
            <div className="flex gap-4 mb-4">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-accent
                             hover:bg-accent/10 border border-white/5 hover:border-accent/30
                             transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="text-slate-500 text-xs">
              <a href="mailto:divyasreevendra@gmail.com" className="hover:text-accent transition-colors">
                divyasreevendra@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} Vendra Divya Sree. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Built with React &amp; Tailwind CSS{' '}
            <HiHeart className="text-red-500/70" size={12} />
          </p>
        </div>
      </div>
    </footer>
  )
}
