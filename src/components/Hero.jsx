import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background effects */}
      <div className={styles.bgLayer}>
        <div className={`${styles.grid} bg-grid-pattern`} />
        {/* Floating parallax icons */}
        <div
          className={`${styles.floatIcon} ${styles.floatIcon1} parallax-icon`}
          data-speed="0.05"
        >
          <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>code</span>
        </div>
        <div
          className={`${styles.floatIcon} ${styles.floatIcon2} parallax-icon`}
          data-speed="-0.03"
        >
          <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)' }}>database</span>
        </div>
        <div
          className={`${styles.floatIcon} ${styles.floatIcon3} parallax-icon`}
          data-speed="0.04"
        >
          <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)' }}>smart_toy</span>
        </div>
        {/* Radial gradient blobs */}
        <div className={styles.blob1} />
        <div className={styles.blob2} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Available badge */}
        <div className={`${styles.badge} glass-panel reveal-item delay-100`}>
          <span className={styles.badgeDot} />
          Available for new opportunities
        </div>

        {/* Heading */}
        <h1 className={`${styles.heading} reveal-item delay-200`}>
          Hi, I'm{' '}
          <span className={`gradient-text neon-text-primary`}>Abhishek Kurhade.</span>
        </h1>

        {/* Subheading */}
        <p className={`${styles.subheading} reveal-item delay-300`}>
          Full-Stack Developer &amp; AI Enthusiast building high-performance digital experiences.
        </p>

        {/* CTAs */}
        <div className={`${styles.ctas} reveal-item delay-400`}>
          <a
            href="#projects"
            className={`${styles.btnPrimary} magnetic-btn`}
            data-strength="20"
          >
            <span style={{ position: 'relative', zIndex: 1 }}>View Projects</span>
            <div className={styles.btnOverlay} />
            <div className="magnetic-btn-glow" />
          </a>
          <a
            href="#contact"
            className={`${styles.btnSecondary} magnetic-btn`}
            data-strength="15"
          >
            Contact Me
            <div className="magnetic-btn-glow" style={{ background: 'rgba(208,188,255,0.2)' }} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className={`${styles.scrollIndicator} reveal-item delay-500`}>
          <span className="material-symbols-outlined" style={{ fontSize: '20px', color: 'var(--color-on-surface-variant)' }}>
            keyboard_arrow_down
          </span>
        </div>
      </div>
    </section>
  )
}
