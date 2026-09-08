'use client'

import { useState } from 'react'

export default function Home() {
  const [expandedRole, setExpandedRole] = useState(null)

  const roles = [
    {
      id: 'supervisor',
      title: 'Cybersecurity Supervisor',
      period: 'Mar 2024 – Present',
      bullets: [
        'Lead and develop a team of cybersecurity analysts and engineers, establishing standards for operational excellence',
        'Own enterprise security operations, including SIEM, EDR/XDR, IDS/IPS, PAM, cloud security across IT and OT/IoT',
        'Drive security governance by defining policies, standards, and procedures aligned with business objectives',
        'Oversee threat detection and incident response across enterprise and OT environments',
        'Built and led a new application security program, integrating security into development and DevOps',
        'Manage cloud identity and data security controls, including Entra ID and Microsoft Purview',
        'Manage security vendors and tooling strategy'
      ]
    },
    {
      id: 'engineer',
      title: 'Cybersecurity Engineer',
      period: 'Jan 2022 – Mar 2024',
      bullets: [
        'Managed and maintained core security infrastructure including SIEM, EDR, IDS/IPS, PAM across IT and OT/IoT',
        'Investigated and responded to security events and incidents',
        'Tuned detection logic and improved alert fidelity within SIEM/XDR platforms',
        'Supported vulnerability management across IT and OT assets',
        'Managed cloud identity and access controls'
      ]
    },
    {
      id: 'netadmin',
      title: 'Network Administrator',
      period: 'Apr 2020 – Jan 2022',
      bullets: [
        'Managed enterprise network infrastructure across multiple geographic locations',
        'Configured and maintained network security technologies including firewalls, IDS, NAC',
        'Deployed and supported wireless infrastructure',
        'Monitored network performance and availability'
      ]
    },
    {
      id: 'dod2',
      title: 'Network Administrator',
      period: 'May 2019 – Nov 2019',
      bullets: [
        'Maintained and troubleshot network infrastructure supporting mission operations',
        'Deployed LTE, 3G, and RF communication systems',
        'Installed and terminated fiber and structured cabling (Cat3/5/6)'
      ]
    },
    {
      id: 'dod1',
      title: 'Tactical Signal Support Specialist',
      period: 'May 2012 – Feb 2018',
      bullets: [
        'U.S. Army | 1st Battalion, 32nd Infantry Regiment, 10th Mountain Division',
        'Supported over 400 users across Active Directory and enterprise network environments',
        'Maintained secure communications systems with zero data loss incidents',
        'Supervised a team of 10, ensuring operational continuity and network reliability',
        'Managed VSAT and STT satellite communication systems',
        'Afghanistan combat deployment'
      ]
    }
  ]

  const skills = [
    { name: 'SIEM, EDR, XDR Solutions', icon: '🛡️' },
    { name: 'Incident Response', icon: '🔍' },
    { name: 'Cloud Security', icon: '☁️' },
    { name: 'OT/IoT Security', icon: '⚙️' },
    { name: 'Team Leadership', icon: '👥' },
    { name: 'Network Security', icon: '🌐' },
    { name: 'Vulnerability Management', icon: '⚠️' },
    { name: 'Identity & Access', icon: '🔐' },
    { name: 'Security Governance', icon: '📋' },
    { name: 'Threat Detection', icon: '🎯' }
  ]

  return (
    <div className="site-wrapper">
      {/* Header */}
      <header className="header" role="banner">
        <nav className="nav-container" role="navigation" aria-label="Main navigation">
          <div className="logo">Tyler Wood</div>
          <div className="nav-links">
            <a href="#about" aria-label="Navigate to about section">About</a>
            <a href="#experience" aria-label="Navigate to experience section">Experience</a>
            <a href="#contact" aria-label="Navigate to contact section">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero" role="main">
        <div className="hero-content">
          <h1>Cybersecurity Leader</h1>
          <p className="location">📍 Tulsa, Oklahoma</p>
          <p className="tagline">From military communications and network operations to enterprise security leadership. 10 years building scalable, resilient security operations that drive business impact. Veteran-driven approach to solving complex security challenges at scale.</p>
          <div className="hero-cta">
            <a href="#contact" className="cta-button">Download Resume</a>
            <a href="#experience" className="cta-secondary">View Experience</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-card">
              <p className="stat-number">Enterprise</p>
              <p className="stat-label">Security Leadership</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">Security Operations</p>
              <p className="stat-label">Risk Management</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">Enterprise & OT</p>
              <p className="stat-label">Infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="section-container">
          <h2>About</h2>
          <div className="about-grid">
            <div>
              <p>I'm a security leader with 10 years of experience progressing from U.S. Army Tactical Signal Support through DoD network operations to enterprise security leadership.</p>
              <p>I drive security operations, governance, and team development. My focus is on delivering scalable, risk-aligned security solutions that support organizational growth and operational resilience.</p>
              <p>I lead cross-functional security teams across enterprise, cloud, identity, and OT environments. Passionate about security operations excellence, developing talent, and translating complex security into business value.</p>
              <div className="education-box">
                <p className="edu-title">Education</p>
                <p className="edu-detail">M.S. Cybersecurity, University of Tulsa (Dec 2025)</p>
                <p className="edu-detail">B.S. Information Technology, Cybersecurity & Digital Forensics, Oklahoma State University Institute of Technology (2020)</p>
              </div>
            </div>
            <div className="about-image">
              <img src="/photo.jpg" alt="Tyler Wood - Enterprise Cybersecurity Leader from Tulsa, Oklahoma" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="experience">
        <div className="section-container">
          <h2>Experience</h2>
          {roles.map((role) => (
            <div key={role.id} className="experience-item">
              <div 
                className="experience-header"
                onClick={() => setExpandedRole(expandedRole === role.id ? null : role.id)}
              >
                <div>
                  <h3>{role.title}</h3>
                  <p className="period">{role.period}</p>
                </div>
                <span className="expand-icon">{expandedRole === role.id ? '−' : '+'}</span>
              </div>
              {expandedRole === role.id && (
                <div className="experience-details">
                  {role.bullets.map((bullet, idx) => (
                    <p key={idx}>{bullet}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="skills">
        <div className="section-container">
          <h2>Skills & Expertise</h2>
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-tag">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="section-container">
          <h2>Get In Touch</h2>
          <p className="contact-intro">Open to opportunities, consulting inquiries, and security conversations.</p>
          <div className="contact-methods">
            <a href="/TylerWood_Resume.pdf" download className="contact-link" aria-label="Download resume PDF">Download Resume</a>
            <a href="mailto:tylerwood_8@outlook.com" className="contact-link" aria-label="Send email to tylerwood_8@outlook.com">Email</a>
            <a href="tel:+19183515161" className="contact-link" aria-label="Call phone number">Phone</a>
            <a href="https://www.linkedin.com/in/tyler-wood-cyber" target="_blank" rel="noopener noreferrer" className="contact-link" aria-label="Visit LinkedIn profile">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <p>&copy; 2026 Tyler Wood. All rights reserved.</p>
      </footer>
    </div>
  )
}
