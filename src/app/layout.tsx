import type { Metadata } from 'next';
import { Montserrat as FontMontserrat } from 'next/font/google';
import { cn } from '@/common/lib/utils';
import '@/common/styles/globals.css';
import { Toaster } from 'react-hot-toast';
import ActiveSectionContextProvider from '@/common/stores/active-section';
import { ThemeProvider } from '@/common/theme/theme-provider';
import Header from '@/common/components/shared/header';
import Footer from '@/common/components/shared/footer';
import { ModeToggle } from '@/common/theme/mode-toggler';
import { ScrollProgress } from '@/common/components/shared/scroll-progress';
import ParallaxBackground from '@/common/components/shared/parallax-background';

export const metadata: Metadata = {
  title: 'Priyansh Khajuria | Full Stack Software Engineer',
  description:
    'Portfolio of Priyansh Khajuria, a Full Stack Software Engineer specializing in React, Next.js, React Native, and Backend Development.',
  keywords: ['Priyansh Khajuria', 'Full Stack Developer', 'Software Engineer', 'React', 'Next.js', 'Portfolio'],
  openGraph: {
    title: 'Priyansh Khajuria | Full Stack Software Engineer',
    description:
      'Portfolio of Priyansh Khajuria, a Full Stack Software Engineer specializing in React, Next.js, React Native, and Backend Development.',
    url: 'https://priyanshkhajuria.vercel.app/',
    siteName: 'Priyansh Khajuria Portfolio',
    images: [
      {
        url: '/images/photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Priyansh Khajuria | Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priyansh Khajuria | Full Stack Software Engineer',
    description:
      'Portfolio of Priyansh Khajuria, a Full Stack Software Engineer specializing in React, Next.js, React Native, and Backend Development.',
    images: ['/images/photo.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const fontMontserrat = FontMontserrat({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          'relative flex items-center justify-center',
          fontMontserrat.className,
        )}
      >
        <div className="flex min-h-screen w-full flex-col">
          <ScrollProgress />
          <ActiveSectionContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <ParallaxBackground />
              <Header />
              {children}
              <Footer />
              <div className="fixed bottom-5 right-5 z-[99] sm:bottom-6 sm:left-6 sm:right-auto sm:top-auto">
                <ModeToggle />
              </div>
              <Toaster position="top-right" />
            </ThemeProvider>
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}
