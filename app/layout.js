import { Inter } from 'next/font/google'
import './globals.css'
import  Header from'./components/layout/header'
import * as React from 'react';
import Providers from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RaeXFlix',
  description: 'Watch Movies at Request',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={inter.className}><Header/><Providers>{children}</Providers></body>
    </html>
  )
}
