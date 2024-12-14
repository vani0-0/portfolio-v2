import type { Metadata } from 'next'

import { siteConfig } from '@/config/site'
import { montserrat } from '@/lib/fonts'
import { cn } from '@/lib/utils'

import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `$s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(montserrat.className, 'min-h-screen bg-background antialiased transition-all duration-150')} suppressHydrationWarning>
        <div className="relative flex flex-col min-h-screen items-center">
          {children}
        </div>
      </body>
    </html>
  )
}
