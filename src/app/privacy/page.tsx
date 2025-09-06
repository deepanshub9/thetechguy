'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Deepanshu Bhardwaj's DevOps Portfolio. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-foreground mb-3">Contact Form Data</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Your full name</li>
                <li>Email address</li>
                <li>Message content</li>
                <li>IP address (for security)</li>
                <li>Timestamp of submission</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3">Analytics Data</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Browser type and version</li>
                <li>Pages visited</li>
                <li>Time spent on site</li>
                <li>Device information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>To respond to your inquiries</li>
                <li>To improve website performance</li>
                <li>To analyze usage patterns</li>
                <li>To prevent fraud and enhance security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Vercel Analytics:</strong> Website performance monitoring</li>
                <li><strong>Web3Forms:</strong> Contact form email delivery</li>
                <li><strong>Dev.to API:</strong> Blog posts display</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact</h2>
              <div className="bg-muted/30 border border-border rounded-lg p-4">
                <p className="text-foreground font-medium">Deepanshu Bhardwaj</p>
                <p className="text-muted-foreground">Email: deepanshub.8010@gmail.com</p>
                <p className="text-muted-foreground">Location: Waterford, Ireland</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}