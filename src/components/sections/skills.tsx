'use client'

import { motion } from 'framer-motion'
import { Cloud, Settings, Container, BarChart3, Code, Shield } from 'lucide-react'

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Cloud,
      title: 'Cloud & Platforms',
      description: 'Multi-cloud architecture and serverless solutions',
      skills: [
        { name: 'AWS', level: 95, color: 'bg-orange-500' },
        { name: 'Azure', level: 85, color: 'bg-blue-500' },
        { name: 'GCP', level: 75, color: 'bg-green-500' },
        { name: 'Vercel', level: 90, color: 'bg-black' },
      ]
    },
    {
      icon: Settings,
      title: 'CI/CD & Automation',
      description: 'Pipeline orchestration and workflow automation',
      skills: [
        { name: 'GitHub Actions', level: 95, color: 'bg-gray-800' },
        { name: 'Jenkins', level: 85, color: 'bg-blue-600' },
        { name: 'GitLab CI', level: 80, color: 'bg-orange-600' },
        { name: 'CircleCI', level: 75, color: 'bg-green-600' },
      ]
    },
    {
      icon: Container,
      title: 'Containers & Orchestration',
      description: 'Containerization and scalable deployments',
      skills: [
        { name: 'Docker', level: 95, color: 'bg-blue-500' },
        { name: 'Kubernetes', level: 90, color: 'bg-blue-600' },
        { name: 'Helm', level: 85, color: 'bg-navy-600' },
        { name: 'Docker Compose', level: 90, color: 'bg-blue-400' },
      ]
    },
    {
      icon: BarChart3,
      title: 'Monitoring & Observability',
      description: 'Performance tracking and incident response',
      skills: [
        { name: 'Prometheus', level: 85, color: 'bg-orange-500' },
        { name: 'Grafana', level: 90, color: 'bg-orange-600' },
        { name: 'ELK Stack', level: 80, color: 'bg-yellow-500' },
        { name: 'Datadog', level: 85, color: 'bg-purple-600' },
      ]
    },
    {
      icon: Code,
      title: 'IaC & Config Management',
      description: 'Infrastructure automation and version control',
      skills: [
        { name: 'Terraform', level: 95, color: 'bg-purple-600' },
        { name: 'Ansible', level: 85, color: 'bg-red-600' },
        { name: 'CloudFormation', level: 80, color: 'bg-orange-500' },
        { name: 'Pulumi', level: 75, color: 'bg-purple-500' },
      ]
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'DevSecOps practices and security automation',
      skills: [
        { name: 'OWASP', level: 85, color: 'bg-red-600' },
        { name: 'Vault', level: 80, color: 'bg-blue-700' },
        { name: 'SonarQube', level: 85, color: 'bg-blue-500' },
        { name: 'Snyk', level: 80, color: 'bg-purple-600' },
      ]
    },
  ]

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Proficiency
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the DevOps toolchain, 
            from infrastructure provisioning to production monitoring.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-muted/30 border border-border rounded-lg p-6 hover:bg-muted/50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-6">
                  {category.description}
                </p>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1, 
                            duration: 1,
                            ease: 'easeOut'
                          }}
                          viewport={{ once: true }}
                          className={`h-full ${skill.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>


      </div>
    </section>
  )
}
