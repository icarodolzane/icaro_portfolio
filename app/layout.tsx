import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from './components/header'
import { ContactForm } from './components/contact-form'
import { Footer } from './components/footer'
import { BackToTop } from './components/back-to-top'
import { Toaster } from './components/toaster'
import AgentsProvider from "./Context/Provider";
import { ToggleBtn } from './components/toggle-btn';

export const metadata = {
  title: {
    default: 'Home | Icaro Dolzane',
    template: '%s | Icaro Dolzane',
  },
  icons: [
    {
      url:'/i.png', 
    }
  ]
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
    <AgentsProvider>        
        <BackToTop />
        <Header />
        <ToggleBtn />
        {children}
        <Toaster />
        <Footer />
    </AgentsProvider>        
      </body>
    </html>
  )
}
