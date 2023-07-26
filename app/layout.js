import Header from '@/components/Header'
import './globals.css'

import { Open_Sans } from 'next/font/google'

const opensans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Influencer Gear',
  description: 'Starts Your Journey as Influencer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={opensans.className}>
      <Header/>
        {children}
       
        </body>
    </html>
  )
}
