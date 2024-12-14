import { ThemeProvider } from 'next-themes'
import React from 'react'

function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider
      enableSystem
      defaultTheme="system"
      attribute="class"
    >
      {children}
    </ThemeProvider>
  )
}

export default Provider
