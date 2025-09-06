'use client'

export function ClientWrapper({ children }) {
  return <div suppressHydrationWarning>{children}</div>
}