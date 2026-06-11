import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      // Update active section
      const sections = ['home', 'about', 'experience', 'projects', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      id="navbar"
      className={styles.nav}
      style={{
        background: scrolled
          ? 'rgba(19,19,19,0.85)'
          : 'rgba(19,19,19,0.7)',
        boxShadow: scrolled
          ? '0 4px 30px rgba(208,188,255,0.05)'
          : 'none',
      }}
    >
      <div className={styles.inner}>
        {/* Brand */}
        <a href="#home" className={styles.brand}>
          AK<span className={styles.brandDot}>.</span>
        </a>

        {/* Desktop Links */}
        <div className={styles.links}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.link} ${active === link.href.slice(1) ? styles.linkActive : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <a href="https://bnybmwjzgkhkjjramglt.supabase.co/storage/v1/object/sign/Resume/Abhishek-Kurhade.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wODdkYTYzZi03Njk1LTRkMGUtOWUwNC1mNDlhMjMwYjE5NjAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJSZXN1bWUvQWJoaXNoZWstS3VyaGFkZS5wZGYiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgxMTk4NDQ2LCJleHAiOjE4NzU4MDY0NDZ9.LacsJiMyXTqy9QmQnnphMGDGC3QU6el8xwsk_5nS0zA" className={styles.resumeBtn} target="_blank" rel="noreferrer">
            <span>Resume</span>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
