'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, TrendingUp } from 'lucide-react'

export default function ProjectsPage() {
  const allProjects = [
    {
      title: 'Spring Boot Banking Application - DevSecOps on AWS EKS',
      description: 'Comprehensive, secure banking web application built with Spring Boot, featuring modern web technologies and enterprise-grade security with complete DevSecOps pipeline.',
      problem: 'Building a production-ready banking application with automated security scanning and deployment',
      solution: 'Implemented DevSecOps pipeline with Jenkins, SonarQube, OWASP, Snyk, ArgoCD on AWS EKS',
      impact: 'Complete CI/CD automation with security-first approach and container orchestration',
      tech: ['Spring Boot', 'Java', 'Jenkins', 'SonarQube', 'OWASP', 'Snyk', 'ArgoCD', 'AWS EKS', 'Kubernetes', 'Helm', 'Terraform'],
      githubUrl: 'https://github.com/deepanshub9/Springboot-BankApp',
      featured: true
    },
    {
      title: 'Three-Tier Application Deployment on AWS EKS',
      description: 'End-to-end deployment of a Three-Tier Web Application using ReactJS, NodeJS, and MongoDB on AWS EKS with complete DevOps automation.',
      problem: 'Deploying complex multi-tier applications with proper orchestration and monitoring',
      solution: 'Used Terraform for infrastructure, Jenkins for CI/CD, EKS for orchestration, and Helm for monitoring',
      impact: 'Scalable microservices architecture with automated deployment and monitoring',
      tech: ['React', 'Node.js', 'MongoDB', 'Terraform', 'Jenkins', 'AWS EKS', 'Helm', 'Prometheus', 'Grafana', 'ArgoCD'],
      githubUrl: 'https://github.com/deepanshub9/Three-tier-app-deployment',
      featured: true
    },
    {
      title: 'Multi-Environment Infrastructure with Terraform & Ansible',
      description: 'Robust Infrastructure as Code solution that provisions and manages multi-environment AWS infrastructure using Terraform modules and automates application deployment with Ansible.',
      problem: 'Managing consistent infrastructure across multiple environments with configuration automation',
      solution: 'Modular Terraform for infrastructure provisioning and Ansible for configuration management',
      impact: 'Consistent, repeatable deployments across dev, staging, and production environments',
      tech: ['Terraform', 'Ansible', 'AWS', 'Python', 'Bash', 'Infrastructure as Code', 'Configuration Management'],
      githubUrl: 'https://github.com/deepanshub9/multi_env_lac_terraform_ansible',
      featured: true
    },
    {
      title: 'React Assignment - Modern Frontend Application',
      description: 'Modern React application showcasing component-based architecture, state management, and responsive design principles with clean, maintainable code.',
      problem: 'Building a scalable React application with modern development practices',
      solution: 'Implemented React with hooks, context API, and responsive design using modern CSS frameworks',
      impact: 'Demonstrates proficiency in modern React development and frontend best practices',
      tech: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Responsive Design', 'Component Architecture'],
      githubUrl: 'https://github.com/deepanshub9/React-Assignment',
      featured: false
    },
    {
      title: 'AWS Node.js HTTP API Project',
      description: 'Serverless HTTP API built with Node.js and deployed on AWS, demonstrating cloud-native development and serverless architecture patterns.',
      problem: 'Creating a scalable, cost-effective API solution using serverless architecture',
      solution: 'Built Node.js API with AWS Lambda, API Gateway, and other AWS services for serverless deployment',
      impact: 'Highly scalable and cost-effective API solution with automatic scaling and pay-per-use pricing',
      tech: ['Node.js', 'AWS Lambda', 'API Gateway', 'Serverless', 'JavaScript', 'AWS Services'],
      githubUrl: 'https://github.com/deepanshub9/aws-node-http-api-project',
      featured: false
    }
  ]

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
            <h1 className="text-4xl font-bold text-foreground mb-4">All Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete collection of DevOps solutions, infrastructure automation, and cloud-native applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allProjects.map((project, index) => (
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
        </motion.div>
      </div>
    </div>
  )
}