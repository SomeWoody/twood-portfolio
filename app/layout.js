import './globals.css'

export const metadata = {
  title: 'Tyler Wood | Cybersecurity Leader',
  description: 'Security operations leader with 14+ years of enterprise security and military IT experience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
