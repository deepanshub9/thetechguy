import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Toaster } from 'react-hot-toast'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Deepanshu Bhardwaj | DevOps Engineer',
    template: '%s | Deepanshu Bhardwaj'
  },
  description: 'DevOps Engineer specializing in cloud infrastructure, CI/CD automation, and containerization. Building scalable, reliable systems.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
  metadataBase: new URL('https://deepanshub-portfolio.vercel.app'),
  keywords: [
    'DevOps Engineer',
    'Cloud Infrastructure',
    'CI/CD',
    'Kubernetes',
    'Docker',
    'AWS',
    'Terraform',
    'Infrastructure as Code'
  ],
  authors: [{ name: 'Deepanshu Bhardwaj' }],
  creator: 'Deepanshu Bhardwaj',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deepanshub-portfolio.vercel.app',
    title: 'Deepanshu Bhardwaj | DevOps Engineer',
    description: 'DevOps Engineer specializing in cloud infrastructure, CI/CD automation, and containerization.',
    siteName: 'Deepanshu Bhardwaj Portfolio',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deepanshu Bhardwaj | DevOps Engineer',
    description: 'DevOps Engineer specializing in cloud infrastructure, CI/CD automation, and containerization.',
    images: ['/og-image.jpg'],
    creator: '@deepanshub',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Deepanshu Bhardwaj',
  jobTitle: 'DevOps Engineer',
  description: 'DevOps Engineer specializing in cloud infrastructure, CI/CD automation, and containerization.',
  url: 'https://deepanshub-portfolio.vercel.app',
  sameAs: [
    'https://github.com/deepanshub9',
    'https://linkedin.com/in/deepanshub',
    'https://twitter.com/deepanshub',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  knowsAbout: [
    'DevOps',
    'Cloud Computing',
    'Kubernetes',
    'Docker',
    'CI/CD',
    'Infrastructure as Code',
    'AWS',
    'Terraform',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              className: 'dark:bg-gray-800 dark:text-white',
            }}
          />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
