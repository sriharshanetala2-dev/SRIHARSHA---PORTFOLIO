import type { Metadata, Viewport } from 'next';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'SRI HARSHA | Full Stack Developer & Software Engineer',
  description: 'Professional portfolio of Netala Sri Harsha, a B.Sc Computer Science graduate specializing in high-performance Full Stack Development, Java Systems, and AI Integration.',
  keywords: ['Software Developer', 'Full Stack Developer', 'Java Engineer', 'Spring Boot', 'React Developer', 'Next.js', 'Firebase', 'GenAI'],
  authors: [{ name: 'Netala Sri Harsha' }],
  metadataBase: new URL('https://sriharsha-dev.web.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SRI HARSHA | Full Stack Developer',
    description: 'B.Sc Computer Science graduate focused on enterprise-grade Full Stack Development and High-Performance UI Logic.',
    url: '/',
    siteName: 'SRI HARSHA Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SRI HARSHA | Software Developer',
    description: 'Engineering digital ecosystems with code, logic, and precision.',
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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-primary/30">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <FirebaseClientProvider>
            {children}
          </FirebaseClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
