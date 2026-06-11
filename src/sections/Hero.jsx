import React, { useEffect, useRef } from 'react'
import './Hero.css'

const roles = ['Full Stack Developer', 'MERN Stack Dev', 'React Engineer', 'Problem Solver']

export default function Hero() {
  const roleRef = useRef(null)
  const indexRef = useRef(0)
  const charRef = useRef(0)
  const deletingRef = useRef(false)

  useEffect(() => {
    let timeout

    const type = () => {
      const current = roles[indexRef.current]

      if (!deletingRef.current) {
        if (charRef.current <= current.length) {
          if (roleRef.current) roleRef.current.textContent = current.slice(0, charRef.current)
          charRef.current++
          timeout = setTimeout(type, 60)
        } else {
          timeout = setTimeout(() => {
            deletingRef.current = true
            type()
          }, 2000)
        }
      } else {
        if (charRef.current > 0) {
          charRef.current--
          if (roleRef.current) roleRef.current.textContent = current.slice(0, charRef.current)
          timeout = setTimeout(type, 30)
        } else {
          deletingRef.current = false
          indexRef.current = (indexRef.current + 1) % roles.length
          timeout = setTimeout(type, 300)
        }
      }
    }

    type()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="grid-line" />
        ))}
      </div>

      <div className="container hero-content">
        <div className="hero-tag">
          <span className="tag-dot" />
          Available for work
        </div>

        <h1 className="hero-name">
          Mohd<br />
          <span className="name-accent">Saqib</span>
        </h1>

        <div className="hero-role">
          <span className="role-prefix">I'm a </span>
          <span ref={roleRef} className="role-typed" />
          <span className="cursor-blink">|</span>
        </div>

        <p className="hero-desc">
          Full-stack developer crafting production-ready web apps with the MERN stack.
          From real-time chat systems to AI-powered tools — I ship things that work.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View Projects →</a>
          <a href="#contact" className="btn-outline">Get in touch</a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">3+</span>
            <span className="stat-label">Live Projects</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">MERN</span>
            <span className="stat-label">Core Stack</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">B.Tech</span>
            <span className="stat-label">CS, 2026</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}