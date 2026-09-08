import './globals.css'

export const metadata = {
  title: 'Tyler Wood | Enterprise Cybersecurity Leader | Tulsa, Oklahoma',
  description: 'Enterprise cybersecurity leader with 14+ years building and scaling security operations from military communications and network operations to enterprise-wide security programs. Expertise spans security operations, threat detection, incident response, security governance, team leadership, and strategic risk management across enterprise, cloud, and OT environments.',
  keywords: 'cybersecurity leader, enterprise security, security operations, SIEM, EDR, XDR, Cortex, Palo Alto, firewalls, CyberArk, PAM, EPM, cloud security, Azure, incident response, threat detection, OT security, IoT security, penetration testing, security audit, vulnerability management, security governance, team leadership, Tulsa',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyler Wood | Enterprise Cybersecurity Leader',
    description: 'Building resilient, scalable security operations that drive business impact. 14+ years enterprise leadership.',
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
