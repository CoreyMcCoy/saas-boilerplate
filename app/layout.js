import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './(components)/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SaaS Boilerplate',
  description: 'Created with love by Corey McCoy',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html data-theme="light" lang="en">
        <body className={inter.className}>
          <ClerkLoading>
            <h1 className="text-3xl mt-20 font-bold text-center mx-auto">
              Loading...
            </h1>
          </ClerkLoading>
          <ClerkLoaded>
            <Navbar />
            <main className="px-8 py-20 max-w-6xl text-center mx-auto">
              {children}
            </main>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
