'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [expandedRole, setExpandedRole] = useState(null)

  const roles = [
    {
      id: 'supervisor',
      title: 'Cybersecurity Supervisor',
      company: 'AAON, Inc.',
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
      company: 'AAON, Inc.',
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
      company: 'AAON, Inc.',
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
      company: 'Department of Defense',
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
      company: 'U.S. Army (1st Battalion, 32nd Infantry Regiment, 10th Mountain Division)',
      period: 'May 2012 – Feb 2018',
      bullets: [
        'Supported over 400 users across Active Directory and enterprise network environments',
        'Maintained secure communications systems with zero data loss incidents',
        'Supervised a team of 10, ensuring operational continuity and network reliability',
        'Managed VSAT and STT satellite communication systems',
        'Afghanistan combat deployment'
      ]
    }
  ]

  const skills = [
    'Security Operations Leadership',
    'SIEM & EDR/XDR Platforms',
    'Incident Response & Threat Detection',
    'Security Governance & Risk Management',
    'Network Security (Firewalls, SD-WAN, NAC)',
    'Cloud & Identity Security (Azure, Entra ID)',
    'OT & IoT Security',
    'Cortex XDR/XSIAM',
    'Microsoft Security Stack',
    'Vulnerability Management',
    'Team Leadership',
    'Vendor Management'
  ]

  return (
    <div className="site-wrapper">
      {/* Header Navigation */}
      <header className="header">
        <nav className="nav-container">
          <div className="logo">Tyler Wood</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Cybersecurity Leader</h1>
          <p className="tagline">14+ years spanning U.S. Army Tactical Signal Support to enterprise security operations. Veteran-driven. Results-oriented. Building scalable security at AAON.</p>
          <div className="hero-cta">
            <a href="#contact" className="cta-button">Get in Touch</a>
            <a href="#experience" className="cta-secondary">View Experience</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <div className="about-grid">
            <div className="about-content">
              <h2>About</h2>
              <p>I'm a security leader with 14+ years of experience progressing from U.S. Army Tactical Signal Support through DoD network operations to enterprise security leadership at AAON.</p>
              <p>I drive security operations, governance, and team development. My focus is on delivering scalable, risk-aligned security solutions that support organizational growth and operational resilience.</p>
              <p>Currently Cybersecurity Supervisor at AAON, leading security teams across enterprise, cloud, identity, and OT environments. I'm passionate about building mature security operations, developing talent, and translating complex security into business value.</p>
              
              <div className="credentials">
                <div className="credential">
                  <strong>Education</strong>
                  <p>M.S. Cybersecurity (University of Tulsa, Dec 2025)<br />B.S. Information Technology, Cybersecurity & Digital Forensics (Oklahoma State University Institute of Technology, 2020)</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                {/* Placeholder for photo - will need to upload actual image */}
                <img src="/photo.jpg" alt="Tyler Wood" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="section-container">
          <h2>Experience</h2>
          <div className="experience-list">
            {roles.map((role) => (
              <div key={role.id} className="experience-item">
                <div 
                  className="experience-header"
                  onClick={() => setExpandedRole(expandedRole === role.id ? null : role.id)}
                >
                  <div>
                    <h3>{role.title}</h3>
                    <p className="company-info">{role.company} • {role.period}</p>
                  </div>
                  <span className="expand-icon">{expandedRole === role.id ? '−' : '+'}</span>
                </div>
                {expandedRole === role.id && (
                  <div className="experience-details">
                    <ul>
                      {role.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <div className="section-container">
          <h2>Skills & Expertise</h2>
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-tag">{skill}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <p>Open to opportunities, consulting inquiries, and security conversations.</p>
            <div className="contact-methods">
              <a href="mailto:tylerwood_8@outlook.com" className="contact-link">tylerwood_8@outlook.com</a>
              <a href="tel:+19183515161" className="contact-link">(918) 351-5161</a>
              <a href="https://www.linkedin.com/in/tyler-wood-cyber" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section-container">
          <p>&copy; 2026 Tyler Wood. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
