import './globals.css'

export const metadata = {
  title: 'Tyler Wood | Cybersecurity Leader | Tulsa, Oklahoma',
  description: 'Enterprise cybersecurity leader with 14+ years specializing in SIEM/EDR/XDR, cloud security, and OT/IoT. Based in Tulsa, Oklahoma.',
  keywords: 'cybersecurity, security leader, SIEM, EDR, XDR, cloud security, OT security, incident response, Tulsa',
  authors: [{ name: 'Tyler Wood' }],
  creator: 'Tyler Wood',
  metadataBase: new URL('https://twood.org'),
  openGraph: {
    title: 'Tyler Wood | Cybersecurity Leader',
    description: 'Enterprise security expert specializing in SIEM/EDR/XDR, cloud security, and OT/IoT operations. Tulsa, OK.',
    url: 'https://twood.org',
    siteName: 'Tyler Wood Cybersecurity',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tyler Wood | Cybersecurity Leader',
    description: 'Enterprise security expert with 14+ years experience.',
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
