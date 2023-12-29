import {Montserrat} from 'next/font/google';
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export const metadata = {
  title: 'Appolinaire ADANDE',
  description: 'Portefolio',
} 

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${montserrat.variable} mont bg-light w-full min-h-`}>
      <body>{children}</body>
    </html>
  )
}