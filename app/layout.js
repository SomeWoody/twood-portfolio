import './globals.css'

export const metadata = {
  title: 'Tyler Wood | Enterprise Cybersecurity Leader | Tulsa, Oklahoma',
  description: 'Enterprise cybersecurity leader with 10 years building and scaling security operations from military communications and network operations to enterprise-wide security programs. Expertise spans security operations, threat detection, incident response, security governance, team leadership, and strategic risk management across enterprise, cloud, and OT environments.',
  keywords: 'cybersecurity leader, enterprise security, security operations, SIEM, EDR, XDR, Cortex, Palo Alto, firewalls, CyberArk, PAM, EPM, cloud security, Azure, AWS, incident response, threat detection, OT security, IoT security, penetration testing, security audit, vulnerability management, security governance, team leadership, remote cybersecurity, nationwide, Tulsa, Dallas, Austin, Houston, Denver, Chicago, Phoenix, Atlanta, New York, San Francisco, Los Angeles, Seattle, Boston, Charlotte, Miami, Minneapolis, Kansas City, Oklahoma City, security architect, CISO, information security, cybersecurity specialist, security consultant, security director, network security, application security, zero trust, defense in depth, security architecture, ISO 27001, NIST, CIS Controls, PCI DSS, HIPAA, SOC 2, compliance, threat intelligence, malware analysis, forensics, security training, SANS, CISSP, CEH, GCP, Kubernetes, Docker, terraform, Jenkins, CI/CD, infrastructure security, identity and access management, IAM, multi-factor authentication, MFA, encryption, data protection, security strategy, risk management, security policy, security awareness, incident management, business continuity, disaster recovery, security consulting, managed security services, MSS, security operations center, SOC, SOAR, automation, security analytics, behavioral analytics, user behavior, endpoint security, mobile security, wireless security, API security, web application security, OWASP, secure coding, DevSecOps, agile security, security metrics, security audit, security assessment, penetration tester, red team, blue team, purple team, threat modeling, attack surface, vulnerability scanner, patch management, configuration management, asset management, vendor management, third-party risk, supply chain security, cybersecurity jobs, security careers, hiring, security opportunities, security consulting services, cybersecurity training, security awareness training',
  authors: [{ name: 'Tyler Wood' }],
  creator: 'Tyler Wood',
  metadataBase: new URL('https://twood.org'),
  openGraph: {
    title: 'Tyler Wood | Enterprise Cybersecurity Leader',
    description: 'Enterprise cybersecurity leader building scalable security operations and driving strategic security initiatives across enterprise, cloud, and OT environments.',
    url: 'https://twood.org',
    siteName: 'Tyler Wood Cybersecurity',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://twood.org/photo.jpg',
        width: 300,
        height: 300,
        alt: 'Tyler Wood - Enterprise Cybersecurity Leader',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyler Wood | Enterprise Cybersecurity Leader',
    description: 'Building resilient, scalable security operations that drive business impact. 10 years enterprise leadership.',
  },
  robots: 'index, follow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://twood.org" />
      </head>
      <body>{children}</body>
    </html>
  )
}
