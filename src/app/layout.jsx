import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/tailwind.css'
import StoreProvider from './StoreProvider'
import { ToastContainer } from './nexttoast'
import 'react-toastify/dist/ReactToastify.css'
export const metadata = {
  title: {
    template: '%s - SkillsMarathon',
    default: 'SkillsMarathon - Build Your Future in Data Science, AI & ML',
  },
  description:
    'Gain essential real-world skills through our comprehensive courses that prepare you for a dynamic tech landscape.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        <StoreProvider>
          {children}
          <Analytics />
        </StoreProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
