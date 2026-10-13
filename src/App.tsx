import { useEffect, useRef, useState } from 'react'
import type { FormEvent, KeyboardEvent } from 'react'
import { achievements, certifications, commands, education, experience, priorExperience, profile, projects, skills } from './data'

type TerminalLine = { command?: string; output: string; error?: boolean }

const navItems = [
  ['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'],
  ['Projects', '#projects'], ['AI journey', '#ai-journey'], ['Certifications', '#certifications'],
  ['Achievements', '#achievements'], ['Contact', '#contact'],
]

const resumeAvailable = profile.resumeUrl !== 'ADD_RESUME_URL_HERE' && profile.resumeUrl.trim().length > 0

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function App() {
  const [booted, setBooted] = useState(false)
  const [bootText, setBootText] = useState('')
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [lines, setLines] = useState<TerminalLine[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setBootText('Initializing portfolio... ready.')
      setBooted(true)
      return
    }
    const message = 'Initializing portfolio... ready.'
    let position = 0
    const timer = window.setInterval(() => {
      position += 1
      setBootText(message.slice(0, position))
      if (position >= message.length) {
        window.clearInterval(timer)
        setBooted(true)
      }
    }, 32)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const sections = Array.from(document.querySelectorAll('main > section'))
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' })
    sections.forEach((section) => {
      section.classList.add('section-reveal')
      observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  function execute(raw: string) {
    const normalized = raw.trim().toLowerCase().replace(/\s+/g, ' ')
    if (!normalized) return
    setHistory((previous) => [...previous, raw.trim()])
    setHistoryIndex(-1)
    if (normalized === 'clear') {
      setLines([])
      return
    }

    let output = ''
    let section: string | undefined
    let error = false
    if (normalized === 'help') output = `Available commands:\n${commands.map((command) => `  ${command}`).join('\n')}`
    else if (normalized === 'whoami') output = `${profile.name}\n${profile.headline}\n${profile.location} · ${profile.experience} experience`
    else if (normalized === 'about') { output = 'Full-stack engineering experience, with a growing focus on practical AI applications.'; section = 'about' }
    else if (normalized === 'skills') { output = `${skills.length} skill groups · Java, Quarkus and MySQL are highlighted strengths.`; section = 'skills' }
    else if (normalized === 'experience') { output = `${experience.role} · ${experience.duration} · ${experience.employer} · ${experience.dates}\n${priorExperience.map((item) => `${item.role} · ${item.organization} · ${item.duration}`).join('\n')}`; section = 'experience' }
    else if (normalized === 'projects') { output = projects.map((project) => `${project.number}  ${project.id}`).join('\n'); section = 'projects' }
    else if (normalized.startsWith('projects ')) {
      const projectQuery = normalized.slice('projects '.length)
      const project = projects.find((item) => item.id === projectQuery)
      if (project) {
        output = `${project.name}\n${project.description}`
        section = 'projects'
        const card = document.getElementById(project.id)
        const caseStudy = card?.querySelector('details')
        if (caseStudy) caseStudy.open = true
        window.setTimeout(() => card?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 80)
      }
      else { output = `Project not found: ${projectQuery}. Try: api-helper, kpms, devtrack.`; error = true }
    }
    else if (normalized === 'ai-journey' || normalized === 'ai') { output = 'From machine learning foundations toward full-stack AI applications.'; section = 'ai-journey' }
    else if (normalized === 'education') { output = education.map((item) => `${item.degree} · ${item.institution}`).join('\n'); section = 'education' }
    else if (normalized === 'certifications') { output = certifications.map((item) => item.name).join('\n'); section = 'certifications' }
    else if (normalized === 'achievements') { output = achievements.map((item) => item.title).join('\n'); section = 'achievements' }
    else if (normalized === 'resume') { output = resumeAvailable ? 'Resume link is configured.' : 'Resume coming soon. A verified PDF link has not been added yet.'; section = 'resume' }
    else if (normalized === 'contact') { output = `${profile.email}\nGitHub: ${profile.github}\nLinkedIn: ${profile.linkedin}`; section = 'contact' }
    else { output = `Command not recognized: ${raw.trim()}. Run "help" to see available commands.`; error = true }

    setLines((previous) => [...previous, { command: raw.trim(), output, error }])
    if (section) window.setTimeout(() => scrollToSection(section!), 60)
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = input
    setInput('')
    execute(value)
  }

  function navigateHistory(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      const nextIndex = Math.min(historyIndex + 1, history.length - 1)
      setHistoryIndex(nextIndex)
      setInput(history[history.length - 1 - nextIndex] ?? '')
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      const nextIndex = historyIndex - 1
      setHistoryIndex(nextIndex)
      setInput(nextIndex < 0 ? '' : history[history.length - 1 - nextIndex] ?? '')
    }
  }

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Mukul Pandey, back to top"><span className="wordmark-mark">MP</span><span>mukul<span className="wordmark-dot">.</span></span></a>
        <nav aria-label="Main navigation" className="main-nav">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="header-contact" href="#contact"><span className="status-dot" aria-hidden="true" /> Let&apos;s talk <span aria-hidden="true">↗</span></a>
      </header>

      <main id="top">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark">01 / PROFILE</span><span className="eyebrow-line" /> PUNE, INDIA</p>
            <h1 id="hero-title">Building useful<br /><span>things that scale.</span></h1>
            <p className="hero-name">I&apos;m <strong>Mukul Pandey</strong> <span className="hero-separator">/</span> Full Stack Developer</p>
            <p className="hero-description">{profile.headline}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore projects <span aria-hidden="true">↘</span></a>
              {resumeAvailable && <a className="button button-quiet" href={profile.resumeUrl} download="Mukul-Pandey-Resume.pdf">Download resume <span aria-hidden="true">↓</span></a>}
              <a className="button button-quiet" href="#contact">Contact me <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-meta"><span>02 years building</span><span className="meta-divider" /><span>Full-stack → AI</span><span className="meta-divider" /><span>Java · React · Quarkus</span></div>
          </div>

          <div className="terminal-window" aria-label="Interactive portfolio terminal">
            <div className="terminal-titlebar"><div className="window-controls" aria-hidden="true"><i /><i /><i /></div><span>mukul@portfolio: ~</span><span className="terminal-title-right">LOCAL UI <span className="tiny-square" /></span></div>
            <div className="terminal-body">
              <div className="boot-row"><span className="terminal-prompt">mukul@portfolio:~$</span> <span>{bootText}<span className="cursor" aria-hidden="true" /></span></div>
              {booted && <>
                <div className="terminal-intro"><p className="terminal-muted">// A little about me</p><p className="terminal-green">{profile.name}</p><p>Full Stack Developer <span className="terminal-muted">|</span> AI Enthusiast</p><p className="terminal-muted">Building scalable applications.<br />Exploring intelligent solutions.</p></div>
                <div className="terminal-output" aria-live="polite" aria-relevant="additions">
                  {lines.map((line, index) => <div className="terminal-result" key={`${line.command}-${index}`}><div><span className="terminal-prompt">mukul@portfolio:~$</span> {line.command}</div><pre className={line.error ? 'terminal-error' : ''}>{line.output}</pre></div>)}
                </div>
                <form className="terminal-form" onSubmit={submit}>
                  <label className="terminal-prompt" htmlFor="command-input">mukul@portfolio:~$</label>
                  <input ref={inputRef} id="command-input" aria-label="Enter a portfolio command" autoComplete="off" spellCheck="false" value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={navigateHistory} placeholder="type 'help' to explore" />
                  <button type="submit" className="terminal-submit" aria-label="Run command">↵</button>
                </form>
              </>}
              {!booted && <button type="button" className="skip-boot" onClick={() => { setBootText('Initializing portfolio... ready.'); setBooted(true) }}>Skip intro <span aria-hidden="true">↗</span></button>}
            </div>
          </div>
          <div className="hero-index" aria-hidden="true"><span>SCROLL TO EXPLORE</span><span className="index-line" /><span>01—11</span></div>
        </section>

        <section id="about" className="section shell section-about">
          <div className="section-heading"><p className="eyebrow"><span className="eyebrow-mark">02 / ABOUT</span><span className="eyebrow-line" /> THE PERSON BEHIND THE CODE</p><h2>Engineering with<br /><span>curiosity built in.</span></h2></div>
          <div className="about-content"><p className="about-lead">Full-stack by practice.<br /><span>AI-curious by nature.</span></p><p>{profile.intro}</p><div className="about-facts"><div><span className="fact-number">02</span><span>years of experience</span></div><div><span className="fact-number">01</span><span>connected stack, end to end</span></div><div><span className="fact-number">∞</span><span>things still worth learning</span></div></div></div>
        </section>

        <section id="skills" className="section shell skills-section">
          <div className="section-heading section-heading-row"><div><p className="eyebrow"><span className="eyebrow-mark">03 / TOOLKIT</span><span className="eyebrow-line" /> BUILT TO CONNECT</p><h2>A stack for<br /><span>the whole picture.</span></h2></div><p className="section-note">Technologies across frontend, backend, data, delivery, and machine learning exploration.</p></div>
          <div className="skills-grid">{skills.map((group, index) => <article className={`skill-group ${index === 4 ? 'skill-group-wide' : ''}`} key={group.title}><div className="skill-group-top"><span className="group-index">0{index + 1}</span><span className="skill-dot" aria-hidden="true" /></div><h3>{group.title}</h3><p className="skill-note">{group.note}</p><div className="skill-list">{group.items.map((item) => <span className={`skill-chip ${['Java', 'Quarkus', 'MySQL'].includes(item) ? 'skill-highlight' : ''}`} key={item}>{item}</span>)}</div></article>)}</div>
          <p className="skills-footnote"><span className="footnote-mark">*</span> Skills reflect technologies used or explored; no proficiency ratings implied. Hibernate ORM and JPA are persistence technologies, and JWT is a token standard.</p>
        </section>

        <section id="experience" className="section shell experience-section">
          <div className="section-heading"><p className="eyebrow"><span className="eyebrow-mark">04 / EXPERIENCE</span><span className="eyebrow-line" /> PRACTICAL ENGINEERING</p><h2>{experience.role}<span className="heading-period">.</span></h2></div>
          <div className="experience-layout"><div className="experience-summary"><span className="experience-duration">02 <small>YEARS</small></span><p>Full-stack Java development<br />with an eye on the details.</p><span className="experience-missing">{experience.employer}<br />{experience.dates}</span></div><ul className="contribution-list">{experience.contributions.map((item, index) => <li key={item}><span className="contribution-index">0{index + 1}</span><span>{item}</span><span className="contribution-arrow" aria-hidden="true">↗</span></li>)}</ul></div>
          <div className="prior-experience"><h3 className="subsection-title"><span>EARLIER EXPERIENCE</span><i aria-hidden="true" /></h3><ol className="timeline">{priorExperience.map((item) => <li className="timeline-item" key={`${item.organization}-${item.role}`}><span className="timeline-node" aria-hidden="true" /><div className="timeline-card"><h4>{item.role}</h4><p className="timeline-org">{item.organization}</p><p className="timeline-meta"><span>{item.duration}</span><span>{item.location}</span></p><a className="proof-link" href={item.certificateUrl} target="_blank" rel="noopener noreferrer" aria-label={`View certificate for ${item.role} at ${item.organization}`}>View Certificate ↗</a></div></li>)}</ol></div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="shell"><div className="section-heading section-heading-row"><div><p className="eyebrow"><span className="eyebrow-mark">05 / SELECTED WORK</span><span className="eyebrow-line" /> BUILT, LEARNED, IN PROGRESS</p><h2>Projects with<br /><span>purpose.</span></h2></div><div className="project-index-terminal"><span>mukul@portfolio:~/projects$ ls</span><span>01 api-helper</span><span>02 kpms-field-np-services</span><span>03 devtrack</span></div></div>
            <div className="project-list">{projects.map((project) => <article className="project-card" id={project.id} key={project.id}>
              <div className="project-card-head"><span className="project-number">{project.number}</span><span className="project-kind">{project.kind}</span><span className={`project-status ${project.status === 'In progress' ? 'status-progress' : ''}`}><i aria-hidden="true" />{project.status}</span></div>
              <div className="project-card-main"><div className="project-title-col"><h3>{project.name}</h3><p className="project-status-mobile">{project.status}</p></div><div className="project-detail-col"><p className="project-description">{project.description}</p>{project.links && <div className="project-links">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>)}</div>}<details className="case-study"><summary>Explore case study <span aria-hidden="true">＋</span></summary><div className="case-study-content"><div><h4>Overview</h4><p>{project.problem}</p></div><div><h4>Contribution & technical highlights</h4><ul>{project.contribution.map((item) => <li key={item}>{item}</li>)}</ul></div>{project.preview && <div><h4>Terminal preview</h4><pre className="project-preview">{project.preview.join('\n')}</pre></div>}<div><h4>Technology</h4><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div></div></details></div></div>
            </article>)}</div>
            <div className="project-confidential-note"><span className="note-marker">i</span> Internal project details are intentionally limited to the approved public summaries.</div>
          </div>
        </section>

        <section id="ai-journey" className="section shell ai-section">
          <div className="section-heading section-heading-row"><div><p className="eyebrow"><span className="eyebrow-mark">06 / AI JOURNEY</span><span className="eyebrow-line" /> LEARNING IN MOTION</p><h2>From ML foundations<br /><span>to useful AI.</span></h2></div><p className="section-note">Machine learning caught my attention as a new field to explore beyond conventional development. Now I want to use that curiosity to build practical solutions to real problems.</p></div>
          <div className="journey-track"><article className="journey-step"><span className="journey-node">01</span><span className="journey-label">EARLIER LEARNING</span><h3>Machine learning foundations</h3><p>Explored a plant disease detection project using leaf images and completed an ML bootcamp through TFUG.</p><div className="journey-tags"><span>Python</span><span>NumPy</span><span>pandas</span><span>scikit-learn</span><span>KNN · SVM · Logistic regression</span><span>Clustering · Random forests</span><span>Parameter tuning</span><span>Tensor concepts</span><span>EfficientNet-B0 & other models</span></div></article><article className="journey-step"><span className="journey-node">02</span><span className="journey-label">PRESENT PRACTICE</span><h3>Full-stack application engineering</h3><p>Building across user interfaces, backend services, APIs, and relational data with a practical engineering mindset.</p><div className="journey-tags"><span>Frontend</span><span>Backend</span><span>Databases</span><span>Integration</span></div></article><article className="journey-step journey-future"><span className="journey-node">03</span><span className="journey-label">NEXT DIRECTION</span><h3>Full-stack AI applications</h3><p>My goal is to combine application engineering with AI capabilities where they can help solve a real problem.</p><div className="future-idea"><span>FUTURE IDEA</span><p>Stock prediction & investment analysis, potentially including intraday analysis.</p><small>An idea to explore, not a completed or validated investment tool.</small></div></article></div>
          <p className="ai-footnote">Models and techniques listed here are areas explored, not claims of production deployment or measured model performance.</p>
        </section>

        <section id="education" className="section education-section"><div className="shell"><div className="section-heading"><p className="eyebrow"><span className="eyebrow-mark">07 / EDUCATION</span><span className="eyebrow-line" /> KEEP LEARNING</p><h2>Learning is part<br /><span>of the work.</span></h2></div><div className="education-grid">{education.map((item, index) => <article className="education-item" key={item.degree}><span className="education-index">0{index + 1} / EDUCATION</span><h3>{item.degree}</h3><p>{item.institution}</p><span className="education-detail">{item.detail}</span></article>)}</div></div></section>

        <section id="certifications" className="section shell credentials-section"><div className="credential-copy"><p className="eyebrow"><span className="eyebrow-mark">08 / CERTIFICATIONS</span><span className="eyebrow-line" /> CREDENTIALS</p><h2>Certifications<span className="heading-period">.</span></h2></div><div className="credential-content">{certifications.map((credential) => <article className="credential-card" key={credential.name}><span className="card-icon" aria-hidden="true">◈</span><h3>{credential.name}</h3>{credential.verificationUrl && <a className="proof-link" href={credential.verificationUrl} target="_blank" rel="noopener noreferrer" aria-label={`View certificate: ${credential.name}`}>View Certificate ↗</a>}</article>)}</div></section>

        <section id="achievements" className="section shell achievements-section"><div className="section-heading"><p className="eyebrow"><span className="eyebrow-mark">09 / ACHIEVEMENTS</span><span className="eyebrow-line" /> COMPETITIONS & MILESTONES</p><h2>Achievements<span className="heading-period">.</span></h2></div><div className="achievement-grid">{achievements.map((item, index) => <article className="achievement-card" key={item.title}><span className="achievement-index" aria-hidden="true">★ 0{index + 1}</span><h3>{item.title}</h3>{item.results && <ul className="achievement-results">{item.results.map((result) => <li key={result}>{result}</li>)}</ul>}<a className="proof-link" href={item.evidenceUrl} target="_blank" rel="noopener noreferrer" aria-label={`View evidence: ${item.title}`}>View Evidence ↗</a></article>)}</div></section>

        <section id="resume" className="section shell resume-section"><div><p className="eyebrow"><span className="eyebrow-mark">10 / RESUME</span><span className="eyebrow-line" /> A CLOSER LOOK</p><h2>Want the<br /><span>full story?</span></h2></div><div className="resume-callout"><span className="resume-icon" aria-hidden="true">↗</span><div><h3>{resumeAvailable ? 'Download my resume' : 'Resume coming soon'}</h3><p>{resumeAvailable ? 'A PDF resume is ready to view.' : 'The resume link will be added here when available.'}</p></div>{resumeAvailable ? <a className="button button-primary" href={profile.resumeUrl} download="Mukul-Pandey-Resume.pdf">Download resume <span aria-hidden="true">↓</span></a> : <span className="resume-disabled">NOT YET AVAILABLE</span>}</div></section>

        <section id="contact" className="contact-section"><div className="shell contact-inner"><div className="contact-copy"><p className="eyebrow"><span className="eyebrow-mark">11 / CONTACT</span><span className="eyebrow-line" /> OPEN TO WHAT&apos;S NEXT</p><h2>Let&apos;s build<br /><span>something useful.</span></h2><p>Reach out about full-stack engineering, AI opportunities, or a good technical conversation.</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a></div><div className="contact-links"><a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><span>github.com/mukulpandey2866 ↗</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><span>linkedin.com/in/mukul-pandey-274839210 ↗</span></a><a href={`mailto:${profile.email}`}><span>Email</span><span>{profile.email} ↗</span></a></div></div></section>
      </main>

      <footer className="site-footer shell"><a className="wordmark" href="#top"><span className="wordmark-mark">MP</span><span>mukul<span className="wordmark-dot">.</span></span></a><span>Designed and built with care · Pune, India</span><a href="#top">Back to top ↑</a></footer>
    </>
  )
}

export default App