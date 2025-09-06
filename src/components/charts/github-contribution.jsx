'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function GitHubContribution({ username }) {
  const [contributions, setContributions] = useState([])
  const [totalContributions, setTotalContributions] = useState(0)
  const [loading, setLoading] = useState(true)

  // Generate mock data for demonstration
  useEffect(() => {
    const generateMockData = () => {
      const data = []
      const total = Math.floor(Math.random() * 500) + 200
      
      // Generate last 365 days
      for (let i = 365; i >= 0; i--) {
        const date = new Date()
        date.setDate(date.getDate() - i)
        
        const contributionCount = Math.floor(Math.random() * 10)
        let color = '#161b22' // No contributions (dark theme)
        
        if (contributionCount > 0) {
          if (contributionCount <= 2) color = '#0e4429'
          else if (contributionCount <= 4) color = '#006d32'
          else if (contributionCount <= 6) color = '#26a641'
          else color = '#39d353'
        }
        
        data.push({
          date: date.toISOString().split('T')[0],
          contributionCount,
          color,
        })
      }
      
      setContributions(data)
      setTotalContributions(total)
      setLoading(false)
    }

    // Simulate API call delay
    setTimeout(generateMockData, 1000)
  }, [username])

  const getIntensityClass = (count) => {
    if (count === 0) return 'bg-muted'
    if (count <= 2) return 'bg-green-200 dark:bg-green-900'
    if (count <= 4) return 'bg-green-400 dark:bg-green-700'
    if (count <= 6) return 'bg-green-500 dark:bg-green-600'
    return 'bg-green-600 dark:bg-green-500'
  }

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="animate-pulse">
          <div className="h-4 bg-muted rounded mb-2"></div>
          <div className="grid grid-cols-12 gap-1">
            {Array.from({ length: 52 * 7 }).map((_, i) => (
              <div key={i} className="h-3 bg-muted rounded-sm"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Group contributions by weeks
  const weeks = []
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          {totalContributions} contributions in the last year
        </span>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-muted-foreground">Less</span>
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-muted rounded-sm"></div>
            <div className="w-3 h-3 bg-green-200 dark:bg-green-900 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-400 dark:bg-green-700 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-500 dark:bg-green-600 rounded-sm"></div>
            <div className="w-3 h-3 bg-green-600 dark:bg-green-500 rounded-sm"></div>
          </div>
          <span className="text-xs text-muted-foreground">More</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-flex flex-col space-y-1 min-w-full">
          {['Mon', 'Wed', 'Fri'].map((day, dayIndex) => (
            <div key={day} className="flex items-center space-x-1">
              <div className="w-8 text-xs text-muted-foreground text-right">
                {dayIndex === 0 ? 'Mon' : dayIndex === 1 ? 'Wed' : 'Fri'}
              </div>
              <div className="flex space-x-1">
                {weeks.map((week, weekIndex) => {
                  const dayData = week[dayIndex * 2] // Show Mon, Wed, Fri for condensed view
                  return dayData ? (
                    <motion.div
                      key={`${weekIndex}-${dayIndex}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: weekIndex * 0.01 }}
                      className={`w-3 h-3 rounded-sm ${getIntensityClass(dayData.contributionCount)}`}
                      title={`${dayData.contributionCount} contributions on ${dayData.date}`}
                    />
                  ) : (
                    <div key={`${weekIndex}-${dayIndex}`} className="w-3 h-3" />
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-xs text-muted-foreground">
        Learn how we{' '}
        <a 
          href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          count contributions
        </a>
        .
      </div>
    </motion.div>
  )
}