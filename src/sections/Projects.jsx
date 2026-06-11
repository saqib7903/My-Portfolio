import React, { useState } from 'react'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Nexus Stock',
    subtitle: 'Inventory & Order Management System',
    description: 'Production-ready full-stack CRM built with React + Vite and FastAPI + PostgreSQL. Features real-time SVG analytics dashboard, auto-migration engine, Docker Compose deployment, and automatic DB fallback for local dev.',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'Vite'],
    live: 'https://invetory-system-mu.vercel.app/',
    github: 'https://github.com/saqib7903/Invetory-system',
    accent: '#00ff87',
    number: '01',
  },
  {
    id: 2,
    title: 'Yappr',
    subtitle: 'Language Exchange & Video Chat App',
    description: 'MERN-based language exchange platform with real-time messaging and WebRTC video calls via Stream SDK. Features JWT cookie auth, friend request system, user discovery, onboarding flow, and 32 DaisyUI themes.',
    tags: ['MERN', 'Stream SDK', 'Zustand', 'TanStack Query', 'JWT'],
    live: 'https://yappr-video-calls1-1.onrender.com/login',
    github: 'https://github.com/saqib7903/Yappr-video-calls1',
    accent: '#a78bfa',
    number: '02',
  },
  {
    id: 3,
    title: 'Resumind',
    subtitle: 'AI Resume Analyzer',
    description: 'AI-powered resume analysis tool using the STAR framework. NLP model detects action verbs, quantifiable results, and context in resume bullets. Provides real-time scoring, feedback, and rewrite suggestions.',
    tags: ['MERN', 'NLP', 'TF-IDF', 'pdf-parse', 'Node.js'],
    live: null,
    github: 'https://github.com/saqib7903',
    accent: '#f97316',
    number: '03',
  },
]

export default function Projects() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="section-label">Selected work</p>
        <h2 className="section-title">
          Things I've built<br />
          <span style={{ color: 'var(--accent)' }}>& shipped.</span>
        </h2>

        <div className="projects-list">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${hovered === project.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ '--proj-accent': project.accent }}
            >
              <div className="project-number">{project.number}</div>

              <div className="project-body">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                  <div className="project-actions">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-btn proj-live">
                        Live ↗
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-btn proj-gh">
                      GitHub
                    </a>
                  </div>
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <a href="https://github.com/saqib7903" target="_blank" rel="noopener noreferrer" className="btn-outline">
            View all on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}
