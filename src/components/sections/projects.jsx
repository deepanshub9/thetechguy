'use client'

import { motion } from 'framer-motion'
import { Github, TrendingUp } from 'lucide-react'

export function ProjectsSection() {
  const featuredProjects = [
    {
      title: 'Spring Boot Banking Application - DevSecOps on AWS EKS',
      description: 'Comprehensive, secure banking web application built with Spring Boot, featuring modern web technologies and enterprise-grade security with complete DevSecOps pipeline.',
      problem: 'Building a production-ready banking application with automated security scanning and deployment',
      solution: 'Implemented DevSecOps pipeline with Jenkins, SonarQube, OWASP, Snyk, ArgoCD on AWS EKS',
      impact: 'Complete CI/CD automation with security-first approach and container orchestration',
      tech: ['Spring Boot', 'Java', 'Jenkins', 'SonarQube', 'OWASP', 'Snyk', 'ArgoCD', 'AWS EKS', 'Kubernetes', 'Helm', 'Terraform'],
      githubUrl: 'https://github.com/deepanshub9/Springboot-BankApp',
      image: '/project-banking.jpg',
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
      image: '/project-threetier.jpg',
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
      image: '/project-terraform.jpg',
      featured: true
    },
    {
      title: 'Two-Tier Flask Application on Kubernetes',
      description: 'Production-ready deployment of a two-tier Flask web application on Kubernetes cluster with MySQL database, demonstrating modern containerized application deployment practices.',
      problem: 'Containerizing and orchestrating a full-stack application with persistent storage',
      solution: 'Deployed Flask app and MySQL on Kubernetes with persistent volumes and proper networking',
      impact: 'Scalable, resilient application architecture with container orchestration best practices',
      tech: ['Python', 'Flask', 'MySQL', 'Kubernetes', 'Docker', 'AWS EC2', 'Persistent Volumes'],
      githubUrl: 'https://github.com/deepanshub9/two-tier-flask-app',
      image: '/project-flask.jpg',
      featured: false
    },
    {
      title: 'Kubernetes Starter Guide',
      description: 'Comprehensive learning repository for Kubernetes beginners with practical examples, hands-on tutorials, and best practices for container orchestration.',
      problem: 'Learning Kubernetes can be overwhelming for beginners',
      solution: 'Created structured learning path with practical examples and real-world scenarios',
      impact: 'Helping developers learn Kubernetes fundamentals and advanced concepts systematically',
      tech: ['Kubernetes', 'Docker', 'YAML', 'kubectl', 'Container Orchestration'],
      githubUrl: 'https://github.com/deepanshub9/Kubernetes-starter',
      image: '/project-k8s-guide.jpg',
      featured: false
    },
    {
      title: 'Health Tracker REST API',
      description: 'RESTful API service for health tracking application with comprehensive endpoints for user management, health metrics, and data analytics.',
      problem: 'Building a scalable backend service for health data management',
      solution: 'Developed REST API with proper authentication, data validation, and performance optimization',
      impact: 'Efficient health data management system with secure API endpoints',
      tech: ['REST API', 'Backend Development', 'Database Design', 'Authentication'],
      githubUrl: 'https://github.com/deepanshub9/health-tracker-rest',
      image: '/project-health.jpg',
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
            Real-world DevOps solutions that transformed development workflows 
            and infrastructure reliability at scale.
          </p>
        </motion.div>

        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-4">
                  {project.featured && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      Featured Project
                    </span>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Problem-Solution-Impact */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">
                        Problem
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {project.problem}
                      </p>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        Solution
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {project.solution}
                      </p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2 flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>Impact</span>
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted border border-border rounded-full text-xs font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                </div>
              </div>

              {/* Project Visual */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-muted border border-border rounded-lg p-8 aspect-video flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <div className="w-8 h-8 bg-primary rounded-lg"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground">
                        {project.title}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Architecture Diagram
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}