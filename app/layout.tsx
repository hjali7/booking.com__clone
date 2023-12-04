import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import logo from '../public/images/logo.jpg'

export const metadata: Metadata = {
  title: 'booking.com __clone',
  description: 'travel and flight and hotel website clone by ali hajizadeh',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/logo.jpg',
        href: '/images/logo.jpg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/logo.jpg',
        href: '/images/logo.jpg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Head */}
        <Header />
        {children}
      </body>
    </html>
  )
}