import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { Toaster } from 'react-hot-toast'
import { Analytics } from '@vercel/analytics/react'
import { ClientWrapper } from '@/components/client-wrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Your Name | DevOps Engineer',
    template: '%s | Your Name'
  },
  description: 'DevOps Engineer specializing in cloud infrastructure, CI/CD automation, and containerization. Building scalable, reliable systems.',
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
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourname.dev',
    title: 'Your Name | DevOps Engineer',
    description: 'DevOps Engineer specializing in cloud infrastructure, CI/CD automation, and containerization.',
    siteName: 'Your Name Portfolio',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name | DevOps Engineer',
    description: 'DevOps Engineer specializing in cloud infrastructure, CI/CD automation, and containerization.',
    images: ['/og-image.jpg'],
    creator: '@yourusername',
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
  name: 'Your Name',
  jobTitle: 'DevOps Engineer',
  description: 'DevOps Engineer specializing in cloud infrastructure, CI/CD automation, and containerization.',
  url: 'https://yourname.dev',
  sameAs: [
    'https://github.com/yourusername',
    'https://linkedin.com/in/yourusername',
    'https://twitter.com/yourusername',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Your Company',
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-background antialiased`} suppressHydrationWarning={true}>
        <ClientWrapper>
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
        </ClientWrapper>
      </body>
    </html>
  );
}