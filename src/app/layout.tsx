import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Providers from '@/components/providers'
import { Toaster } from 'react-hot-toast'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
           <Header />
        {children}
        <Toaster position='bottom-left'/>
        </Providers>
       
      </body>
    </html>
  )
}
