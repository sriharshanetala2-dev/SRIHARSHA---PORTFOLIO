import type { Metadata, Viewport } from 'next';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'SRI HARSHA | Full Stack & UI Developer Portfolio',
  description: 'Professional portfolio of Netala Sri Harsha, a B.Sc Computer Science graduate specializing in high-performance Full Stack Development, UI/UX Design, and AI Orchestration.',
  keywords: ['Software Developer', 'Full Stack Developer', 'UI Developer', 'B.Sc Computer Science', 'Netala Sri Harsha', 'React Developer', 'Next.js', 'Firebase', 'GenAI'],
  authors: [{ name: 'Netala Sri Harsha' }],
  openGraph: {
    title: 'SRI HARSHA | Software Developer Portfolio',
    description: 'B.Sc Computer Science graduate focused on high-performance Full Stack Development and AI.',
    url: 'https://sriharsha-dev.web.app',
    siteName: 'SRI HARSHA Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SRI HARSHA | Software Developer',
    description: 'Architecting digital symphonies with code and logic.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary/30 scroll-smooth">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <FirebaseClientProvider>
            {children}
          </FirebaseClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
