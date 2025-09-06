'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
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

          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Deepanshu Bhardwaj's DevOps Portfolio website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for commercial purposes or public display</li>
                <li>Attempt to reverse engineer any software on the website</li>
                <li>Remove any copyright or proprietary notations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Portfolio Content</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This website showcases Deepanshu Bhardwaj's professional work and projects in DevOps and cloud infrastructure. The content includes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Project descriptions and technical implementations</li>
                <li>Blog posts and technical articles</li>
                <li>Professional experience and skills</li>
                <li>Contact information for business inquiries</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Form Usage</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The contact form is provided for legitimate business inquiries and professional communication. By using the contact form, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate and truthful information</li>
                <li>Use the form for professional purposes only</li>
                <li>Not send spam, promotional, or irrelevant content</li>
                <li>Respect response times and communication preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The content, design, and code of this website are the intellectual property of Deepanshu Bhardwaj. Project code and implementations may be subject to their respective licenses as indicated in the project repositories.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">External Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website contains links to external sites including GitHub repositories, LinkedIn profile, and blog posts. We are not responsible for the content or privacy practices of these external sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information on this website is provided on an 'as is' basis. To the fullest extent permitted by law, we exclude all representations, warranties, and conditions relating to our website and the use of this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Professional Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website serves as a professional portfolio. Any discussions about potential work, consulting, or collaboration are subject to separate agreements and terms that will be established for specific engagements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about these Terms of Service, please contact:
              </p>
              <div className="bg-muted/30 border border-border rounded-lg p-4">
                <p className="text-foreground font-medium">Deepanshu Bhardwaj</p>
                <p className="text-muted-foreground">Email: deepanshub.8010@gmail.com</p>
                <p className="text-muted-foreground">Location: Waterford, Ireland</p>
                <p className="text-muted-foreground">GitHub: github.com/deepanshub9</p>
                <p className="text-muted-foreground">LinkedIn: linkedin.com/in/deepanshub</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the current version of these terms of service.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}