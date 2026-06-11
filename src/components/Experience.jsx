import styles from './Experience.module.css'

const experiences = [
  {
    role: 'Software Engineer (Freelance)',
    period: 'Mar 2026 – May 2026',
    company: 'Sunshine Solar Company',
    description:
      'Developed a React platform (soldocs.in) to automate internal document workflows for solar installation agencies. Automated Word document generation via dynamic forms, eliminating repetitive manual paperwork and improving data accuracy. Integrated Supabase, Node.js and S3 Buckets to manage secure user authentication, database operations, and cloud document storage.',
    stack: ['React', 'Node.js', 'Supabase'],
  },
  {
    role: 'Full-Stack Developer Intern',
    period: 'Dec 2025 – Feb 2026',
    company: 'Aalore',
    description:
      'Architecting and developing core features for a scalable web platform. Focusing on building high-performance, responsive UIs and robust backend services.',
    stack: ['React', 'Next.js', 'Supabase'],
  },
  {
    role: 'Web Developer (Freelance)',
    period: 'Sep 2025 – Nov 2025',
    company: 'Sunshine Solar Company',
    description:
      'Designed and developed the official company website for a solar panel installation startup. Implemented dynamic backend using PHP & MySQL, integrated EmailJS for client inquiries. Improved customer engagement and streamlined communication, resulting in 30% faster client response time.',
    stack: ['PHP', 'MySQL', 'EmailJS'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <h2 className={`${styles.sectionTitle} reveal-item`}>
        <span className={styles.titleLine} />
        Experience
      </h2>

      <div className={styles.timeline}>
        {experiences.map((exp, i) => (
          <div key={i} className={`${styles.timelineItem} timeline-container reveal-item delay-${(i + 1) * 100}`}>
            {/* Node */}
            <div className={`${styles.timelineNode} timeline-node`} />

            {/* Card */}
            <div className={`${styles.card} glass-panel glass-hover`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardRole}>{exp.role}</h3>
                <span className={styles.period}>{exp.period}</span>
              </div>
              <h4 className={styles.company}>{exp.company}</h4>
              <p className={styles.description}>{exp.description}</p>
              <div className={styles.stackRow}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--color-on-surface-variant)' }}>build</span>
                <div className={styles.stackTags}>
                  {exp.stack.map((s, j) => (
                    <span key={s}>
                      <span className={styles.stackTag}>{s}</span>
                      {j < exp.stack.length - 1 && <span className={styles.dot}>•</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
