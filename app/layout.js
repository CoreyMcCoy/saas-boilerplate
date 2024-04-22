import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './(components)/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'App Boilerplate',
  description: 'Created with love by Corey McCoy',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html data-theme="light" lang="en">
        <body className={inter.className}>
          <Header />
          <main className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center mt-20">
              {children}
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
