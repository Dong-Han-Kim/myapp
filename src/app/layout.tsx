import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './_component/Nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DH',
  description: 'Kim Dong Han Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>
        <Nav />
        <h1>Root Layout</h1>
        {children}
        </body>
    </html>
  )
}
