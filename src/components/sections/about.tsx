'use client'

import { motion } from 'framer-motion'
import { GitCommit, Users, Award, Coffee } from 'lucide-react'
import { GitHubContribution } from '@/components/charts/github-contribution'
import { personalInfo } from '@/lib/constants'

export function AboutSection() {
  const stats = [
    { icon: GitCommit, label: 'Projects Deployed', value: '68+' },
    { icon: Users, label: 'Followers', value: '8+' },
    { icon: Award, label: 'Years Experience', value: '4+' },
    { icon: Coffee, label: 'Coffee Consumed', value: '∞' },
  ]

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Azure-focused DevOps engineer at Central Bank of Ireland, building secure,
            reliable platforms with strong delivery discipline and automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                My current work is heavily Azure-centric. At Central Bank of Ireland, I
                focus on Event Hub streaming, Service Bus messaging, Logic App automation,
                API Gateway style integrations, and private networking patterns that keep
                regulated workloads secure and observable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the past 4+ years, I&apos;ve specialized in cloud infrastructure,
                containerization, and CI/CD automation, with most of my recent delivery
                time spent in Azure. I still value the lessons from my earlier DWS work,
                especially around operational discipline, but my portfolio now leans much
                more toward Azure architecture and platform engineering.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I&apos;m not designing cloud platforms, you&apos;ll find me contributing to
                open-source projects, refining delivery pipelines, or exploring the latest
                Azure capabilities that improve reliability and security.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center p-4 rounded-lg bg-background border border-border"
                  >
                    <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* GitHub Contribution Graph */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                GitHub Activity
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Real-time contribution graph showing my coding activity and project commits.
              </p>
              <GitHubContribution username={personalInfo.github} />
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Facts</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>🎯 Specialized in Azure, Kubernetes, and Terraform</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>🚀 Built CI/CD pipelines processing 1000+ deployments/month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>📈 Reduced deployment time from hours to minutes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>🔒 Security-first approach with automated compliance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>☁️ Event Hub, Service Bus, Logic Apps, Private Endpoints, and API gateways</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>🏦 Azure delivery aligned with Central Bank of Ireland operations</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
