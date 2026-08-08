'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, Github, TrendingUp } from 'lucide-react'


export function ProjectsSection() {
  const featuredProjects = [
    {
      title: 'Azure Secure Infrastructure',
      description: 'Azure-focused cloud foundation with private networking, secure workload placement, and delivery patterns that fit regulated enterprise environments.',
      problem: 'Designing a secure Azure landing zone that supports private-by-default application delivery and controlled access boundaries',
      solution: 'Used Terraform, Azure networking constructs, private endpoints, and governance-oriented infrastructure patterns to create a secure base',
      impact: 'Improved platform consistency, security posture, and delivery readiness for Azure workloads',
      tech: ['Azure', 'Terraform', 'Private Endpoint', 'Networking', 'Governance', 'Security', 'Infrastructure as Code'],
      githubUrl: 'https://github.com/deepanshub9/Azure-Secure-Infrastructure',
      featured: true
    },
    {
      title: 'FinOps Azure Infrastructure',
      description: 'A cloud cost management and optimization initiative focused on Azure visibility, governance, and practical FinOps workflows.',
      problem: 'Helping teams understand cloud spend and act on cost optimisation opportunities without slowing delivery',
      solution: 'Built a Python-based Azure cost visibility workflow with clear reporting and operational guardrails',
      impact: 'Improved cost awareness and created a foundation for better Azure spend decisions',
      tech: ['Azure', 'Python', 'FinOps', 'Governance', 'Reporting', 'Automation'],
      githubUrl: 'https://github.com/deepanshub9/FinOps-Azure-Infrastructure',
      featured: true
    },
    {
      title: 'Secure Bank Platform',
      description: 'Enterprise-style Azure platform engineering work aligned with banking expectations and secure delivery practices.',
      problem: 'Creating a bank-friendly cloud platform that balances security, compliance, and delivery speed',
      solution: 'Applied Azure platform engineering patterns, Terraform-based provisioning, and secure operational design',
      impact: 'Delivered a stronger foundation for regulated workload delivery and platform consistency',
      tech: ['Azure', 'Terraform', 'Security', 'Platform Engineering', 'Networking', 'Compliance'],
      githubUrl: 'https://github.com/deepanshub9/Secure-Bank-Platform',
      featured: true
    },
    {
      title: 'Azure DevOps Zero to Hero',
      description: 'A curated Azure DevOps learning and reference repository covering practical delivery patterns, pipelines, and team workflows.',
      problem: 'Keeping Azure DevOps knowledge organized across hands-on examples, notes, and reusable workflow patterns',
      solution: 'Structured a reference collection around Azure DevOps tasks, notes, and implementation examples',
      impact: 'Makes Azure delivery practices easier to reuse across projects and teams',
      tech: ['Azure DevOps', 'Azure', 'Automation', 'Pipelines', 'Documentation', 'Shell'],
      githubUrl: 'https://github.com/deepanshub9/AzureDevOps-Zero-to-Hero',
      featured: true
    },
    {
      title: 'Cloud Incident Tracker',
      description: 'A hands-on learning project for simulating incidents, monitoring response, and validating recovery in cloud environments.',
      problem: 'Practicing the full incident lifecycle in a safe, repeatable way for cloud operations',
      solution: 'Created an incident workflow with tracking, response, and recovery validation steps',
      impact: 'Improves operational readiness and incident response discipline',
      tech: ['Azure', 'Incident Response', 'Automation', 'Observability', 'Operations'],
      githubUrl: 'https://github.com/deepanshub9/Cloud-Incident-Tracker',
      featured: false
    },
    {
      title: 'Terraform Full Course Azure',
      description: 'Azure-focused Terraform learning material that maps infrastructure concepts to practical cloud delivery patterns.',
      problem: 'Keeping Azure Terraform knowledge practical and easy to reuse across environments',
      solution: 'Used course-driven examples and hands-on IaC patterns to reinforce Azure provisioning workflows',
      impact: 'Supports faster onboarding and more consistent Azure infrastructure practices',
      tech: ['Azure', 'Terraform', 'Infrastructure as Code', 'HCL', 'Learning'],
      githubUrl: 'https://github.com/deepanshub9/Terraform-Full-Course-Azure',
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Azure-first platform work, secure infrastructure, and delivery patterns
            shaped by real enterprise and banking environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.filter(p => p.featured).slice(0, 4).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-background border border-border rounded-lg p-6 hover:border-primary/20 transition-colors duration-200 group"
            >
              {/* Project Header */}
              <div className="space-y-4 mb-6">
                {project.featured && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                    Featured Project
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Problem-Solution-Impact */}
              <div className="space-y-3 mb-6">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  <h4 className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">
                    Problem
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {project.problem}
                  </p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                  <h4 className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    Solution
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {project.solution}
                  </p>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <h4 className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1 flex items-center space-x-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>Impact</span>
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {project.impact}
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3 mb-6">
                <h4 className="text-sm font-semibold text-foreground">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted border border-border rounded text-xs font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 6 && (
                    <span className="px-2 py-1 bg-muted/50 border border-border rounded text-xs text-muted-foreground">
                      +{project.tech.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">View Code</span>
                </a>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
          >
            <span>View All Projects</span>
            <ExternalLink className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
