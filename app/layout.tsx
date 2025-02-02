import type { Metadata } from 'next';
import Header from '@/components/Header';
import './globals.css';
import localFont from 'next/font/local';
import PageTransition from '@/components/PageTransition';
import SlideTransition from '@/components/SlideTransition';

export const metadata: Metadata = {
  title: 'Angry Seal',
  description: 'Angry Seal personal site',
};

const myFont = localFont({
  src: '../public/fonts/JetBrainsMono-Regular.woff2',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Header />
        <SlideTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
