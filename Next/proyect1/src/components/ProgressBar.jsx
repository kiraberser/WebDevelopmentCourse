'use client'

import { ThemeContext } from "../contexts/ThemeContext/ThemeContext"
import { useContext } from "react"

export default function ProgressBar({ progress }) {
  const { theme } = useContext(ThemeContext)
  
  return (
    <div 
      className="fixed top-0 left-0 h-1 z-50 transition-all duration-300"
      style={{ 
        width: `${progress * 100}%`,
        backgroundColor: theme === 'dark' ? '#3B82F6' : '#1E40AF'
      }}
    />
  )
} 