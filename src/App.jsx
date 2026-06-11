import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    // Reveal animation observer
    const revealItems = document.querySelectorAll('.reveal-item')
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -100px 0px', threshold: 0.1 }
    )
    const observe = () => {
      const revealItems = document.querySelectorAll('.reveal-item:not(.is-visible)')
      revealItems.forEach(item => revealObserver.observe(item))
    }
    observe()
    // Re-scan after a short delay to catch elements rendered after initial paint
    const rescanTimer = setTimeout(observe, 300)

    // Timeline node observer
    const timelineContainers = document.querySelectorAll('.timeline-container')
    const timelineObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const node = entry.target.querySelector('.timeline-node')
          if (!node) return
          if (entry.isIntersecting) node.classList.add('active')
          else node.classList.remove('active')
        })
      },
      { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )
    timelineContainers.forEach(c => {
      if (c.querySelector('.timeline-node')) timelineObserver.observe(c)
    })

    // Magnetic button effect
    const magneticBtns = document.querySelectorAll('.magnetic-btn')
    magneticBtns.forEach(btn => {
      const onMove = e => {
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const strength = Number(btn.dataset.strength || 20)
        const deltaX = (x - rect.width / 2) / (rect.width / 2)
        const deltaY = (y - rect.height / 2) / (rect.height / 2)
        btn.style.transform = `translate(${deltaX * strength}px, ${deltaY * strength}px)`
        const glow = btn.querySelector('.magnetic-btn-glow')
        if (glow) { glow.style.left = `${x}px`; glow.style.top = `${y}px` }
      }
      const onLeave = () => { btn.style.transform = 'translate(0,0)' }
      btn.addEventListener('mousemove', onMove)
      btn.addEventListener('mouseleave', onLeave)
    })

    // 3D Tilt effect for project cards
    const tiltCards = document.querySelectorAll('.tilt-card')
    tiltCards.forEach(card => {
      const onMove = e => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const maxRot = 10
        const rotX = -((y - rect.height / 2) / (rect.height / 2)) * maxRot
        const rotY = ((x - rect.width / 2) / (rect.width / 2)) * maxRot
        card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`
      }
      const onLeave = () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
        card.style.transition = 'transform 0.5s ease'
        setTimeout(() => { card.style.transition = '' }, 500)
      }
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
    })

    // Parallax icons
    const onMouseMove = e => {
      const icons = document.querySelectorAll('.parallax-icon')
      const mouseX = e.clientX / window.innerWidth - 0.5
      const mouseY = e.clientY / window.innerHeight - 0.5
      icons.forEach(icon => {
        const speed = parseFloat(icon.dataset.speed || 0.05)
        icon.style.transform = `translate(${mouseX * speed * 1000}px, ${mouseY * speed * 1000}px)`
      })
    }
    document.addEventListener('mousemove', onMouseMove)

    return () => {
      clearTimeout(rescanTimer)
      revealObserver.disconnect()
      timelineObserver.disconnect()
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main style={{ position: 'relative' }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
