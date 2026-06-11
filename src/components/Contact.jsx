import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [result, setResult] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.id]: e.target.value })

  const onSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    setResult('')

    const formData = new FormData(event.target)
    formData.append("access_key", "87dbc2c8-c6a9-4cf4-8f97-02cb09d042ff")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()
      if (data.success) {
        setResult("Success!")
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setResult("Error")
        setStatus('error')
      }
    } catch (error) {
      setResult("Error")
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={`${styles.section} reveal-item`}>
      <div className={`${styles.container} glass-panel`}>
        {/* Decorative blob */}
        <div className={styles.blob} />

        <div className={styles.grid}>
          {/* Left: Info */}
          <div className={styles.info}>
            <h2 className={styles.title}>Let's Connect</h2>
            <p className={styles.subtitle}>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className={styles.linkList}>
              <a
                href="mailto:abhishekakurhade@gmail.com"
                className={styles.contactLink}
              >
                <div className={styles.iconWrap}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>mail</span>
                </div>
                <span className={styles.contactLabel}>Email Me</span>
              </a>
              <a
                href="https://github.com/abhishekakurhade"
                className={styles.contactLink}
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.iconWrap}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>code</span>
                </div>
                <span className={styles.contactLabel}>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/abhishek-kurhade"
                className={styles.contactLink}
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.iconWrap}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>link</span>
                </div>
                <span className={styles.contactLabel}>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={`${styles.field} ${styles.fieldLast}`}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your message here..."
                value={form.message}
                onChange={handleChange}
                className={styles.textarea}
                required
              />
            </div>
            <button
              type="submit"
              className={`${styles.submitBtn} magnetic-btn`}
              data-strength="15"
              disabled={status === 'sending'}
            >
              <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {status === 'sent' ? 'Message Sent!' : status === 'sending' ? 'Sending…' : 'Send Message'}
                {status !== 'sent' && status !== 'sending' && (
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>
                )}
                {status === 'sent' && (
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>check_circle</span>
                )}
              </span>
              <div className="magnetic-btn-glow" />
            </button>
            {result && (
              <p className={`${styles.resultMessage} ${result === 'Success!' ? styles.successMessage : styles.errorMessage}`}>
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
