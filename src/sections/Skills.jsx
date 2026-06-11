import React from 'react'
import './Skills.css'

const skillGroups = [
  {
    label: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'C++', 'Java'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'DaisyUI', 'Framer Motion'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'Socket.io'],
  },
  {
    label: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'SQLite', 'Mongoose', 'SQLAlchemy'],
  },
  {
    label: 'State & Data',
    skills: ['Zustand', 'TanStack Query', 'Context API', 'JWT Auth'],
  },
  {
    label: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'GitHub', 'Render', 'Vercel', 'Railway', 'Postman'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="section-label">Capabilities</p>
        <h2 className="section-title">
          My stack &<br />
          <span style={{ color: 'var(--accent)' }}>toolbox.</span>
        </h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-group">
              <h3 className="skill-group-label">{group.label}</h3>
              <div className="skill-pills">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-bar-section">
          <h3 className="bar-section-title">Core proficiency</h3>
          <div className="skill-bars">
            {[
              { name: 'React / Frontend', level: 88 },
              { name: 'Node.js / Express', level: 82 },
              { name: 'MongoDB', level: 80 },
              { name: 'REST API Design', level: 85 },
              { name: 'Docker / DevOps', level: 65 },
            ].map((item) => (
              <div key={item.name} className="skill-bar-row">
                <div className="bar-meta">
                  <span className="bar-name">{item.name}</span>
                  <span className="bar-level">{item.level}%</span>
                </div>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{ '--bar-width': `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
