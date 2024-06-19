import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--title-font',
})
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--body-font',
})

export const metadata: Metadata = {
  title: 'YMP | Portfolio',
  description: 'My portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  )
}
