import MainNav from '@/components/navigation/MainNav'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500", "700", "900"] })

export const metadata: Metadata = {
  title: 'Zukanye Makapela',
  description: "Hi there, welcome to my e-portfolio website where you can easily access information on why you should hire me.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main>
          <MainNav />
          {children}
        </main>
      </body>
    </html>
  )
}
