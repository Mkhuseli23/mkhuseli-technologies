import {
  Code2,
  Monitor,
  Layers,
  Server,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Globe,
  Database,
  ShieldCheck,
  Smartphone,
  Settings,
  Send
} from 'lucide-react'

import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const form = useRef(null)
  const [sending, setSending] = useState(false)
  const [formMessage, setFormMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      setFormMessage('Email sending is not configured. Please try again later.')
      return
    }

    setSending(true)
    setFormMessage('')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setFormMessage('Thank you! Your message has been sent successfully.')
      form.current.reset()
    } catch (error) {
      const status = error instanceof emailjs.EmailJSResponseStatus
        ? error.status
        : undefined
      const details = error instanceof emailjs.EmailJSResponseStatus
        ? error.text
        : error instanceof Error
          ? error.message
          : String(error)

      console.error(
        `Email sending failed${status ? ` (HTTP ${status})` : ''}: ${details}`
      )
      setFormMessage(
        status === 412
          ? 'EmailJS rejected this website origin. Add the current website domain to Allowed Origins in your EmailJS account, then try again. You can also contact us directly using the email link.'
          : 'Sorry, your message could not be sent. Please try again or contact us directly using the email link.'
      )
    } finally {
      setSending(false)
    }
  }

  const services = [
    {
      icon: <Monitor />,
      number: '01',
      title: 'Website Development',
      description:
        'We design and develop modern, responsive websites that establish your online presence and help your business attract customers.',
      features: [
        'Corporate and business websites',
        'E-commerce websites',
        'Portfolio websites',
        'Website redesign and maintenance'
      ]
    },

    {
      icon: <Layers />,
      number: '02',
      title: 'Web Application Development',
      description:
        'We build custom web applications that automate business operations, simplify processes and improve productivity.',
      features: [
        'Business management systems',
        'Booking and registration systems',
        'Database-driven applications',
        'API and payment integrations'
      ]
    },
    {
      icon: <Server />,
      number: '03',
      title: 'Server Setup & Infrastructure',
      description:
        'We configure and deploy reliable server environments to support your websites, applications and business systems.',
      features: [
        'Server installation and configuration',
        'Domain and hosting setup',
        'Application deployment',
        'Database configuration and maintenance'
      ]
    }
  ]

  const process = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We understand your business, requirements and objectives.'
    },
    {
      number: '02',
      title: 'Planning & Design',
      description: 'We plan the solution and create a suitable design.'
    },
    {
      number: '03',
      title: 'Development',
      description: 'We develop, configure and test your solution.'
    },
    {
      number: '04',
      title: 'Deployment',
      description: 'We launch your solution and provide technical support.'
    }
  ]

  const projects = [
    {
      name: 'Business Websites',
      category: 'Website Development',
      description: 'Professional digital platforms designed to help businesses establish their online presence.',
      icon: <Globe />
    },
    {
      name: 'Custom Business Systems',
      category: 'Web Applications',
      description: 'Purpose-built systems that streamline registrations, management and business operations.',
      icon: <Database />
    },
    {
      name: 'IT Infrastructure',
      category: 'Server Solutions',
      description: 'Configured hosting environments, application deployment and database infrastructure.',
      icon: <Server />
    }
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="header">
        <nav className="navbar container">
          <a href="#home" className="brand" onClick={closeMenu}>
            <img
              src={`${import.meta.env.BASE_URL}mmt-logo.png`}
              alt="Mkhuseli Mditshwa Technologies"
              className="brand-logo-image"
            />
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#projects" onClick={closeMenu}>Our Work</a>
            <a href="#contact" className="nav-contact" onClick={closeMenu}>
              Get In Touch <ArrowRight size={15} />
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-glow"></div>

          <div className="container hero-content">
            <div className="hero-text">
              <div className="eyebrow">
                <span></span> DIGITAL SOLUTIONS FOR MODERN BUSINESSES
              </div>

              <h1>
                Building Digital
                <span> Solutions That</span>
                <span className="gold-text"> Drive Growth.</span>
              </h1>

              <p className="hero-description">
                We transform ideas into powerful digital experiences.
                From professional websites and custom web applications
                to reliable server infrastructure, we help businesses
                move forward through technology.
              </p>

              <div className="hero-buttons">
                <a href="#contact" className="btn btn-gold">
                  Start Your Project <ArrowRight size={18} />
                </a>

                <a href="#services" className="btn btn-outline">
                  Explore Services
                </a>
              </div>

              <div className="hero-trust">
                <span><CheckCircle2 /> Tailored Solutions</span>
                <span><CheckCircle2 /> Business Focused</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-card main-visual">
                <div className="visual-top">
                  <span className="window-dots">● ● ●</span>
                  <span>digital_solution.js</span>
                </div>

                <div className="code-content">
                  <p><span className="code-purple">const</span> business = {'{'}</p>
                  <p className="indent"><span className="code-blue">website</span>: <span className="code-green">'Modern'</span>,</p>
                  <p className="indent"><span className="code-blue">applications</span>: <span className="code-green">'Powerful'</span>,</p>
                  <p className="indent"><span className="code-blue">infrastructure</span>: <span className="code-green">'Reliable'</span></p>
                  <p>{'}'}</p>
                  <br />
                  <p><span className="code-purple">return</span> <span className="code-gold">business.growth</span></p>
                </div>

                <div className="visual-bottom">
                  <div><Code2 /><span>Development</span></div>
                  <div><Database /><span>Systems</span></div>
                  <div><Server /><span>Infrastructure</span></div>
                </div>
              </div>

              <div className="floating-card floating-one">
                <ShieldCheck />
                <div>
                  <strong>Built with purpose</strong>
                  <small>Solutions that work</small>
                </div>
              </div>

              <div className="floating-card floating-two">
                <Globe />
                <div>
                  <strong>Digital presence</strong>
                  <small>Beyond boundaries</small>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-bottom container">
            <span>OUR EXPERTISE</span>
            <div>WEB DEVELOPMENT</div>
            <div>APPLICATIONS</div>
            <div>SERVER SOLUTIONS</div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-heading">
              <div className="section-label">ABOUT OUR COMPANY</div>
              <h2>
                Technology should
                <span className="gold-text"> work for you.</span>
              </h2>
            </div>

            <div className="about-content">
              <p>
                Mkhuseli Mditshwa Technologies is a technology-focused
                business committed to helping organisations establish,
                improve and manage their digital environments.
              </p>

              <p>
                We combine web development, software engineering and
                IT infrastructure solutions to turn business challenges
                into practical digital solutions.
              </p>

              <p>
                Whether you are starting a business, improving existing
                operations or building a new digital platform, we aim
                to deliver solutions aligned with your goals.
              </p>

              <a href="#contact" className="text-link">
                Let's discuss your project <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">WHAT WE DO</div>
              <h2>Our Core <span className="gold-text">Services</span></h2>
              <p>
                Practical technology solutions designed around
                your business needs.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-top">
                    <div className="service-icon">{service.icon}</div>
                    <span>{service.number}</span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="card-link">
                    Enquire about this service <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="section process-section">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">HOW WE WORK</div>
              <h2>From Idea to <span className="gold-text">Implementation</span></h2>
              <p>A clear process to take your project from concept to reality.</p>
            </div>

            <div className="process-grid">
              {process.map((step) => (
                <div className="process-card" key={step.number}>
                  <span className="process-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">OUR CAPABILITIES</div>
              <h2>Solutions We <span className="gold-text">Deliver</span></h2>
              <p>
                Examples of the digital solutions we can develop
                and implement for your business.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className="project-icon">{project.icon}</div>
                  <span className="project-category">{project.category}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a href="#contact" className="card-link">
                    Discuss a project <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGY SECTION */}
        <section className="technology-section">
          <div className="container technology-content">
            <div>
              <div className="section-label">OUR APPROACH</div>
              <h2>Technology with a <span className="gold-text">purpose.</span></h2>
              <p>
                We focus on usability, functionality, security
                and solutions that support real business needs.
              </p>
            </div>

            <div className="technology-points">
              <div><Smartphone /><span>Responsive experiences</span></div>
              <div><ShieldCheck /><span>Security-conscious development</span></div>
              <div><Settings /><span>Reliable configurations</span></div>
              <div><Database /><span>Structured data management</span></div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-info">
              <div className="section-label">LET'S WORK TOGETHER</div>
              <h2>
                Have a project
                <span className="gold-text"> in mind?</span>
              </h2>

              <p>
                Tell us what you are looking to build. Let's
                discuss how technology can help your business.
              </p>

              <div className="contact-detail">
                <Mail />
                <div>
                  <small>Email us</small>
                  <a href="mailto:mkhuselimditshwa23@gmail.com">
                    mkhuselimditshwa23@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <Phone />
                <div>
                  <small>Call or WhatsApp</small>
                  <span>0626051149</span>
                </div>
              </div>

              <div className="contact-detail">
                <MapPin />
                <div>
                  <small>Location</small>
                  <span>South Africa</span>
                </div>
              </div>
            </div>

            
<form
  ref={form}
  className="contact-form"
  onSubmit={handleSubmit}
>
  <h3>Send us an enquiry</h3>
  <p>Complete the form and tell us about your project.</p>

  <label htmlFor="name">Your name</label>
  <input
    id="name"
    name="from_name"
    type="text"
    placeholder="Enter your name"
    required
  />

  <label htmlFor="email">Email address</label>
  <input
    id="email"
    name="from_email"
    type="email"
    placeholder="Enter your email"
    required
  />

  <label htmlFor="service">Service required</label>
  <select
    id="service"
    name="service"
    required
    defaultValue=""
  >
    <option value="" disabled>Select a service</option>
    <option>Website Development</option>
    <option>Web Application Development</option>
    <option>Server Setup & Infrastructure</option>
    <option>Other IT Services</option>
  </select>

  <label htmlFor="message">Tell us about your project</label>
  <textarea
    id="message"
    name="message"
    rows="5"
    placeholder="Describe your project..."
    required
  />

  <button
    type="submit"
    className="btn btn-gold submit-btn"
    disabled={sending}
  >
    {sending ? 'Sending...' : 'Send Enquiry'}
    <Send size={17} />
  </button>

  {formMessage && (
    <small className="form-note" role="status">
      {formMessage}
    </small>
  )}
</form>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container footer-main">
            <a href="#home" className="brand">
              <span className="brand-icon"><Code2 /></span>
              <span className="brand-text">
                <strong>MKHUSELI MDITSHWA</strong>
                <small>TECHNOLOGIES</small>
              </span>
            </a>

            <p>Building digital solutions for a better-connected business world.</p>

            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="container footer-bottom">
            <span>© {new Date().getFullYear()} Mkhuseli Mditshwa Technologies. All rights reserved.</span>
            <span>Designed with purpose. Built with technology.</span>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
