import React from 'react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">
          <span style={{ color: 'var(--accent)' }}>&lt;</span>
          Saqib
          <span style={{ color: 'var(--accent)' }}>/&gt;</span>
        </span>
        <span className="footer-copy">
          © {year} Mohd Saqib. Built with React + Vite.
        </span>
        <div className="footer-links">
          <a href="https://github.com/saqib7903" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/mohd-saqib-950a78244/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:saqib08011@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
