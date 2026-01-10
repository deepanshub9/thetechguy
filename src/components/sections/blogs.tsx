'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, Calendar, Clock, Heart } from 'lucide-react'
import { useState } from 'react'
import { personalInfo } from '@/lib/constants'

export function BlogsSection() {
  const [blogs] = useState([
    {
      id: 1,
      title: 'Building a Production-Grade E-Commerce Platform on GCP: A Complete DevOps Journey',
      description: 'A comprehensive guide to building and deploying a complete e-commerce platform on Google Cloud Platform using modern DevOps practices including GKE, ArgoCD, Terraform, GitHub Actions, Datadog, and SonarQube.',
      url: 'https://dev.to/deepanshub09/building-a-production-grade-e-commerce-platform-on-gcp-a-complete-devops-journey-4lj4',
      publishedAt: '2026-01-09',
      tags: ['kubernetes', 'gcp', 'devops', 'microservices', 'gitops'],
      readingTime: 25,
      publicReactions: 6,
      coverImage: null
    },
    {
      id: 2,
      title: 'Building a Complete AWS VPC with Load Balancer: A Step-by-Step Journey',
      description: 'A comprehensive guide to building a full AWS Virtual Private Cloud (VPC) with an Application Load Balancer (ALB), EC2 instances, and more while sharing every stumble and how to fix them.',
      url: 'https://dev.to/deepanshub09/building-a-complete-aws-vpc-with-load-balancer-a-step-by-step-journey-2oj8',
      publishedAt: '2025-10-04',
      tags: ['devops', 'aws', 'cloud', 'networking'],
      readingTime: 15,
      publicReactions: 5,
      coverImage: null
    },
    {
      id: 3,
      title: 'The OSI Model Explained: Your Complete Guide to Network Communication',
      description: 'Ever wondered how your message travels from your phone to your friend\'s computer across the globe? Let\'s dive into the fascinating world of network communication through the OSI model!',
      url: 'https://dev.to/deepanshub09/the-osi-model-explained-your-complete-guide-to-network-communication-512a',
      publishedAt: '2025-09-23',
      tags: ['webdev', 'devops', 'cloud', 'networking'],
      readingTime: 10,
      publicReactions: 6,
      coverImage: null
    }
  ])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <section id="blogs" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing insights on DevOps, Cloud Infrastructure, and Software Engineering best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-background border border-border rounded-lg overflow-hidden hover:border-primary/20 transition-colors duration-200 group"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(blog.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{blog.readingTime} min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{blog.publicReactions}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-muted-foreground line-clamp-3">
                  {blog.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                >
                  <span>Read More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 space-x-4"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
          >
            <span>View All Blogs</span>
            <ExternalLink className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}