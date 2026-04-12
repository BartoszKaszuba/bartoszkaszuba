import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});
const sora = Sora({ 
  subsets: ["latin"],
  variable: '--font-sora'
});

export const metadata: Metadata = {
  title: 'Bartosz Kaszuba | Full Stack Developer',
  description: 'Full Stack Developer & ICT student at Fontys University. Building web applications with React, TypeScript, Laravel, and modern technologies.',
  icons: {
    icon: '/images/nextjs-icon-md.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
