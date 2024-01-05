import type { Metadata } from 'next'
import { Inter, Urbanist, Karla } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
// const urbanist = Urbanist({ subsets: ['latin'] })
// const karla = Karla({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZDA Works - Abstract Media Hub',
  description: 'A hub for the ZDA Works abstract media links',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <body className={urbanist.className}>{children}</body> */}
      {/* <body className={karla.className}>{children}</body> */}
    </html>
  )
}
