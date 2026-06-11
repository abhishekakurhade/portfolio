import styles from './Projects.module.css'

const projects = [
  {
    title: 'Seekhowithhai',
    description:
      'An AI-powered educational platform designed to personalize learning paths and enhance student engagement through intelligent tutoring systems.',
    icon: 'school',
    category: 'AI / EdTech',
    color: 'primary',
    link: 'https://test.seekhowithai.com/',
  },
  {
    title: 'SolDocs',
    description:
      'A comprehensive document management system tailored specifically for solar energy companies to streamline installation workflows and compliance.',
    icon: 'solar_power',
    category: 'SaaS / Enterprise',
    color: 'secondary',
    link: 'https://soldocs.in',
  },
  {
    title: 'HealthAI Chatbot',
    description:
      'An AI-powered healthcare assistant capable of answering real-time medical queries and providing conversational support to users. Deployed via a CI/CD pipeline on AWS EC2 using Jenkins for automated testing and containerization.',
    icon: 'health_and_safety',
    category: 'OpenAI API / Python / Streamlit',
    color: 'tertiary',
    link: 'https://healthai-bot-abhishekakurhade.streamlit.app/',
    badges: ['OpenAI API', 'Python', 'Streamlit', 'Jenkins', 'AWS EC2'],
  },
]

const colorMap = {
  primary: {
    bg: 'rgba(208,188,255,0.2)',
    icon: 'rgba(208,188,255,0.5)',
    dot: 'var(--color-primary)',
    text: 'var(--color-primary)',
  },
  secondary: {
    bg: 'rgba(173,198,255,0.2)',
    icon: 'rgba(173,198,255,0.5)',
    dot: 'var(--color-secondary)',
    text: 'var(--color-secondary)',
  },
  tertiary: {
    bg: 'rgba(78,222,163,0.2)',
    icon: 'rgba(78,222,163,0.5)',
    dot: 'var(--color-tertiary)',
    text: 'var(--color-tertiary)',
  },
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <h2 className={`${styles.sectionTitle} reveal-item`}>
        <span className={styles.titleLine} />
        Featured Projects
      </h2>

      <div className={styles.grid}>
        {projects.map((project, i) => {
          const c = colorMap[project.color]
          const delay = `delay-${(i + 1) * 100}`
          return (
            <div
              key={project.title}
              className={`${styles.tiltWrapper} tilt-card reveal-item ${delay}`}
            >
              <div className={`${styles.card} glass-panel glass-hover`}>
                {/* Thumbnail */}
                <div
                  className={styles.thumb}
                  style={{ background: 'var(--color-surface-container)' }}
                >
                  <div
                    className={styles.thumbOverlay}
                    style={{
                      background: `linear-gradient(135deg, ${c.bg} 0%, transparent 100%)`,
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: '48px', color: c.icon, transition: 'transform 0.5s' }}
                    >
                      {project.icon}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className={styles.body}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>

                  {/* Tech badges (only if present) */}
                  {project.badges && (
                    <div className={styles.badges}>
                      {project.badges.map(b => (
                        <span key={b} className={styles.badge} style={{ borderColor: c.dot, color: c.text }}>
                          {b}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className={styles.footer}>
                    <div className={styles.category}>
                      <span
                        className={styles.dot}
                        style={{ background: c.dot }}
                      />
                      <span className={styles.categoryLabel}>{project.category}</span>
                    </div>
                    <a
                      href={project.link}
                      aria-label={`View ${project.title}`}
                      className={styles.arrowLink}
                      style={{ color: c.text }}
                      target={project.link !== '#' ? '_blank' : undefined}
                      rel="noreferrer"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                        arrow_outward
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* GitHub CTA */}
      <div className={styles.githubCta}>
        <p className={styles.githubCtaText}>Want to see more of my work?</p>
        <a
          href="https://github.com/abhishekakurhade"
          target="_blank"
          rel="noreferrer"
          className={`${styles.githubBtn} magnetic-btn`}
          data-strength="15"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>code</span>
          <span>View More on GitHub</span>
          <div className="magnetic-btn-glow" />
        </a>
      </div>
    </section>
  )
}
