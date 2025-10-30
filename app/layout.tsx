import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LoanHub - Manage Your Loans',
  description: 'View loan approvals, chat with agents, and submit closing documents',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  themeColor: '#0A0E1A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
