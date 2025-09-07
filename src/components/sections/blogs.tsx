'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Clock, Heart } from 'lucide-react'
import { useState } from 'react'
import { personalInfo } from '@/lib/constants'

export function BlogsSection() {
  const [blogs] = useState([
    {
      id: 1,
      title: 'DevOps Best Practices for Modern Applications',
      description: 'Learn essential DevOps practices that can transform your development workflow and improve deployment reliability.',
      url: `https://dev.to/${personalInfo.devto}`,
      publishedAt: '2024-01-15',
      tags: ['devops', 'ci-cd', 'automation'],
      readingTime: 8,
      publicReactions: 42,
      coverImage: null
    },
    {
      id: 2,
      title: 'Kubernetes Security: A Comprehensive Guide',
      description: 'Explore security best practices for Kubernetes clusters, from RBAC to network policies and beyond.',
      url: `https://dev.to/${personalInfo.devto}`,
      publishedAt: '2024-01-10',
      tags: ['kubernetes', 'security', 'containers'],
      readingTime: 12,
      publicReactions: 38,
      coverImage: null
    }
  ])

  const formatDate = (dateString) => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          className="text-center mt-12"
        >
          <a
            href={`https://dev.to/${personalInfo.devto}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
          >
            <span>View All Posts</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}