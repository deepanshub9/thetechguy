'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Calendar, Clock, Heart, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import { personalInfo } from '@/lib/constants'

export default function BlogsPage() {
  const [blogs] = useState([
    {
      id: 1,
      title: 'DevOps Best Practices for Modern Applications',
      description: 'Learn essential DevOps practices that can transform your development workflow and improve deployment reliability. This comprehensive guide covers CI/CD pipelines, infrastructure as code, and monitoring strategies.',
      url: `https://dev.to/${personalInfo.devto}`,
      publishedAt: '2024-01-15',
      tags: ['devops', 'ci-cd', 'automation', 'best-practices'],
      readingTime: 8,
      publicReactions: 42,
      coverImage: null,
      featured: true
    },
    {
      id: 2,
      title: 'Kubernetes Security: A Comprehensive Guide',
      description: 'Explore security best practices for Kubernetes clusters, from RBAC to network policies and beyond. Learn how to secure your containerized applications in production environments.',
      url: `https://dev.to/${personalInfo.devto}`,
      publishedAt: '2024-01-10',
      tags: ['kubernetes', 'security', 'containers', 'rbac'],
      readingTime: 12,
      publicReactions: 38,
      coverImage: null,
      featured: true
    },
    {
      id: 3,
      title: 'Infrastructure as Code with Terraform: Advanced Patterns',
      description: 'Deep dive into advanced Terraform patterns for managing complex infrastructure. Learn about modules, state management, and multi-environment deployments.',
      url: `https://dev.to/${personalInfo.devto}`,
      publishedAt: '2024-01-05',
      tags: ['terraform', 'iac', 'aws', 'infrastructure'],
      readingTime: 10,
      publicReactions: 35,
      coverImage: null,
      featured: true
    },
    {
      id: 4,
      title: 'Monitoring and Observability in Cloud-Native Applications',
      description: 'Complete guide to implementing monitoring and observability in cloud-native applications using Prometheus, Grafana, and distributed tracing.',
      url: `https://dev.to/${personalInfo.devto}`,
      publishedAt: '2024-01-01',
      tags: ['monitoring', 'observability', 'prometheus', 'grafana'],
      readingTime: 9,
      publicReactions: 28,
      coverImage: null,
      featured: false
    },
    {
      id: 5,
      title: 'GitOps: The Future of Continuous Deployment',
      description: 'Understanding GitOps principles and implementing GitOps workflows with ArgoCD and Flux. Learn how to achieve declarative deployments.',
      url: `https://dev.to/${personalInfo.devto}`,
      publishedAt: '2023-12-28',
      tags: ['gitops', 'argocd', 'deployment', 'kubernetes'],
      readingTime: 7,
      publicReactions: 31,
      coverImage: null,
      featured: false
    },
    {
      id: 6,
      title: 'Docker Best Practices for Production',
      description: 'Essential Docker best practices for building secure, efficient, and maintainable container images for production environments.',
      url: `https://dev.to/${personalInfo.devto}`,
      publishedAt: '2023-12-25',
      tags: ['docker', 'containers', 'security', 'production'],
      readingTime: 6,
      publicReactions: 25,
      coverImage: null,
      featured: false
    }
  ])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const featuredBlogs = blogs.filter(blog => blog.featured)
  const popularBlogs = blogs.filter(blog => !blog.featured).sort((a, b) => b.publicReactions - a.publicReactions)

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">All Blog Posts</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In-depth articles on DevOps, Cloud Infrastructure, and Software Engineering best practices.
            </p>
          </div>

          {/* Featured Blogs */}
          <section className="mb-16">
            <div className="flex items-center space-x-2 mb-8">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Featured Articles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBlogs.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="bg-muted/30 border border-border rounded-lg overflow-hidden hover:border-primary/20 transition-colors duration-200 group"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        Featured
                      </span>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{blog.publicReactions}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-muted-foreground line-clamp-3 text-sm">
                      {blog.description}
                    </p>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(blog.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{blog.readingTime} min read</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {blog.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-background text-muted-foreground text-xs rounded-full border border-border"
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
          </section>

          {/* Popular Blogs */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-8">Popular Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {popularBlogs.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 3) * 0.1, duration: 0.8 }}
                  className="bg-muted/30 border border-border rounded-lg overflow-hidden hover:border-primary/20 transition-colors duration-200 group"
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
                      {blog.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-background text-muted-foreground text-xs rounded-full border border-border"
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
          </section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16"
          >
            <a
              href={`https://dev.to/${personalInfo.devto}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
            >
              <span>View All on Dev.to</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}