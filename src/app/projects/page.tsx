'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, TrendingUp, Filter, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useMemo } from 'react'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 4

  const allProjects = [
    {
      title: 'Azure Secure Infrastructure',
      description: 'Azure-focused cloud foundation with private networking, secure workload placement, and delivery patterns for regulated environments.',
      problem: 'Designing a secure Azure landing zone that supports private-by-default application delivery and controlled access boundaries',
      solution: 'Used Terraform, Azure networking constructs, private endpoints, and governance-oriented infrastructure patterns to create a secure base',
      impact: 'Improved platform consistency, security posture, and delivery readiness for Azure workloads',
      tech: ['Azure', 'Terraform', 'Private Endpoint', 'Networking', 'Governance', 'Security', 'Infrastructure as Code'],
      githubUrl: 'https://github.com/deepanshub9/Azure-Secure-Infrastructure',
      category: 'Azure',
      featured: true
    },
    {
      title: 'FinOps Azure Infrastructure',
      description: 'Cloud cost management and optimization initiative focused on Azure visibility, governance, and practical FinOps workflows.',
      problem: 'Helping teams understand cloud spend and act on cost optimisation opportunities without slowing delivery',
      solution: 'Built a Python-based Azure cost visibility workflow with clear reporting and operational guardrails',
      impact: 'Improved cost awareness and created a foundation for better Azure spend decisions',
      tech: ['Azure', 'Python', 'FinOps', 'Governance', 'Reporting', 'Automation'],
      githubUrl: 'https://github.com/deepanshub9/FinOps-Azure-Infrastructure',
      category: 'Azure',
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
      category: 'Azure',
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
      category: 'Azure',
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
      category: 'Azure',
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
      category: 'Azure',
      featured: false
    },
    {
      title: 'Spring Boot Banking Application - DevSecOps on AWS EKS',
      description: 'A secure banking-style application with a complete DevSecOps pipeline deployed on AWS EKS.',
      problem: 'Building a production-ready banking application with automated security scanning and deployment',
      solution: 'Implemented DevSecOps pipeline with Jenkins, SonarQube, OWASP, Snyk, ArgoCD on AWS EKS',
      impact: 'Complete CI/CD automation with security-first approach and container orchestration',
      tech: ['Spring Boot', 'Java', 'Jenkins', 'SonarQube', 'OWASP', 'Snyk', 'ArgoCD', 'AWS EKS', 'Kubernetes', 'Helm', 'Terraform'],
      githubUrl: 'https://github.com/deepanshub9/Springboot-BankApp',
      category: 'AWS',
      featured: true
    },
    {
      title: 'Three-Tier Application Deployment on AWS EKS',
      description: 'End-to-end deployment of a three-tier application using ReactJS, NodeJS, and MongoDB on AWS EKS.',
      problem: 'Deploying complex multi-tier applications with proper orchestration and monitoring',
      solution: 'Used Terraform for infrastructure, Jenkins for CI/CD, EKS for orchestration, and Helm for monitoring',
      impact: 'Scalable microservices architecture with automated deployment and monitoring',
      tech: ['React', 'Node.js', 'MongoDB', 'Terraform', 'Jenkins', 'AWS EKS', 'Helm', 'Prometheus', 'Grafana', 'ArgoCD'],
      githubUrl: 'https://github.com/deepanshub9/Three-tier-app-deployment',
      category: 'AWS',
      featured: true
    },
    {
      title: 'Multi-Environment Infrastructure with Terraform & Ansible',
      description: 'Multi-environment AWS infrastructure provisioning and application deployment automation.',
      problem: 'Managing consistent infrastructure across multiple environments with configuration automation',
      solution: 'Modular Terraform for infrastructure provisioning and Ansible for configuration management',
      impact: 'Consistent, repeatable deployments across dev, staging, and production environments',
      tech: ['Terraform', 'Ansible', 'AWS', 'Python', 'Bash', 'Infrastructure as Code', 'Configuration Management'],
      githubUrl: 'https://github.com/deepanshub9/multi_env_lac_terraform_ansible',
      category: 'AWS',
      featured: false
    },
    {
      title: 'AWS Node.js HTTP API Project',
      description: 'Serverless HTTP API built with Node.js and deployed on AWS, useful as a cross-cloud comparison project.',
      problem: 'Creating a scalable, cost-effective API solution using serverless architecture',
      solution: 'Built Node.js API with AWS Lambda, API Gateway, and other AWS services for serverless deployment',
      impact: 'Highly scalable and cost-effective API solution with automatic scaling and pay-per-use pricing',
      tech: ['Node.js', 'AWS Lambda', 'API Gateway', 'Serverless', 'JavaScript', 'AWS Services'],
      githubUrl: 'https://github.com/deepanshub9/aws-node-http-api-project',
      category: 'AWS',
      featured: false
    }
  ]

  const categories = ['All', 'Azure', 'AWS', 'DevOps', 'AI/MLOps']

  const filteredAndSortedProjects = useMemo(() => {
    const filtered = selectedCategory === 'All' 
      ? allProjects 
      : allProjects.filter(project => project.category === selectedCategory)
    
    return filtered.sort((a, b) => {
      if (sortBy === 'featured') return Number(b.featured) - Number(a.featured)
      if (sortBy === 'name') return a.title.localeCompare(b.title)
      return 0
    })
  }, [selectedCategory, sortBy, allProjects])

  const totalPages = Math.ceil(filteredAndSortedProjects.length / projectsPerPage)
  const currentProjects = filteredAndSortedProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">All Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A portfolio shaped around Azure and AWS platform engineering, with a smaller
              set of DevOps and learning projects for context.
            </p>
          </div>

          {/* Filters and Sorting */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <div className="flex space-x-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category)
                      setCurrentPage(1)
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-background border border-border rounded-lg text-foreground"
            >
              <option value="featured">Featured First</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-muted/30 border border-border rounded-lg p-6 hover:border-primary/20 transition-colors duration-200 group"
              >
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

                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-foreground">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-background border border-border rounded text-xs font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === page
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-border hover:bg-muted'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}