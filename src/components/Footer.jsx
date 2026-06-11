import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Logo */}
        <div className={styles.logo}>AK</div>

        {/* Credits */}
        <p className={styles.credit}>
          © {year} Abhishek Kurhade. Built with precision.
        </p>

        {/* Social Icons */}
        <div className={styles.socials}>
          <a
            href="https://github.com/abhishekakurhade"
            className={styles.socialIcon}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>code</span>
          </a>
          <a
            href="https://linkedin.com/in/abhishek-kurhade"
            className={styles.socialIcon}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>link</span>
          </a>

        </div>
      </div>
    </footer>
  )
}
