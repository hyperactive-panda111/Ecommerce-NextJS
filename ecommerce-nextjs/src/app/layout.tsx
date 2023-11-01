import { Montserrat, Poppins } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'
import Header from '@/components/Header/Header';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight:  ['400', '500', '700'],
  style:   ['italic', 'normal'],
  variable: '--font-montserrat',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight:  ['400', '500', '700'],
  style:   ['italic', 'normal'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'E-Commerce Website in Next.js',
  description: 'This is an online gaming shop',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ poppins.variable} ${ montserrat.variable }`}>
      <body>
        <Header />
        <main className='bg-primary-gradient min-h-screen'>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
