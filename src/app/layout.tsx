import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ScrollProvider } from '@/context/ScrollContext';
import './globals.css';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'jamesdavidsaul.net',
  description: 'Web Developer, Photographer, Birder',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
