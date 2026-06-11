import styles from './About.module.css'

const skills = [
  {
    icon: 'web',
    label: 'Frontend',
    color: 'primary',
    tags: ['React', 'Next.js', 'TSX', 'Tailwind'],
  },
  {
    icon: 'dns',
    label: 'Backend & DB',
    color: 'tertiary',
    tags: ['Node.js', 'FastAPI', 'Supabase'],
  },
  {
    icon: 'cloud',
    label: 'DevOps & Cloud',
    color: 'secondary',
    tags: ['Docker', 'Minikube', 'AWS Cloud'],
  },
  {
    icon: 'smart_toy',
    label: 'AI / ML',
    color: 'error',
    tags: ['OpenCV', 'MoviePy', 'OpenAI API'],
  },
]

const colorMap = {
  primary: {
    text: 'var(--color-primary)',
    border: 'rgba(208,188,255,0.2)',
    bg: 'rgba(208,188,255,0.05)',
  },
  tertiary: {
    text: 'var(--color-tertiary)',
    border: 'rgba(78,222,163,0.2)',
    bg: 'rgba(78,222,163,0.05)',
  },
  secondary: {
    text: 'var(--color-secondary)',
    border: 'rgba(173,198,255,0.2)',
    bg: 'rgba(173,198,255,0.05)',
  },
  error: {
    text: 'var(--color-error)',
    border: 'rgba(255,180,171,0.2)',
    bg: 'rgba(255,180,171,0.05)',
  },
}

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <h2 className={`${styles.sectionTitle} reveal-item`}>
        <span className={styles.titleLine} />
        About &amp; Skills
      </h2>

      <div className={styles.grid}>
        {/* Bio Card – spans 8 cols */}
        <div className={`${styles.bioCard} glass-panel glass-hover bento-card reveal-item delay-100`}>
          <div className={styles.bioBlur} />
          <h3 className={styles.cardTitle}>Background</h3>
          <p className={styles.bioText}>
            Engineering student and full-stack developer specializing in Next.js,
            TypeScript, and AI integrations. I build scalable applications with a
            focus on clean architecture and sophisticated user interfaces.
          </p>
        </div>

        {/* Skill Cards */}
        {skills.map((skill, i) => {
          const c = colorMap[skill.color]
          const delay = `delay-${(i + 2) * 100}`
          return (
            <div
              key={skill.label}
              className={`${styles.skillCard} glass-panel glass-hover bento-card reveal-item ${delay}`}
            >
              <div className={styles.skillHeader} style={{ color: c.text }}>
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  {skill.icon}
                </span>
                <h3 className={styles.skillLabel}>{skill.label}</h3>
              </div>
              <div className={styles.tagRow}>
                {skill.tags.map(tag => (
                  <span
                    key={tag}
                    className={styles.tag}
                    style={{ color: c.text, border: `1px solid ${c.border}`, background: c.bg }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
