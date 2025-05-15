'use client'
import { ThemeContext } from "../contexts/ThemeContext/ThemeContext"
import { useContext } from "react"

import features from '@/constants/features'

export default function FeaturesSection({ scrollProgress }) {
  const { theme } = useContext(ThemeContext)

  return (
    <section id="features" className="py-20" style={{ backgroundColor: theme === 'dark' ? '#1F2937' : '#FFFFFF' }}>
      <div className="container mx-auto px-4">
        <h2 
          className="text-4xl font-bold text-center mb-12 transform transition-all duration-700"
          style={{
            opacity: Math.min(1, (scrollProgress - 0.2) * 5),
            transform: `translateY(${Math.max(0, 100 - (scrollProgress - 0.2) * 500)}px)`,
            color: theme === 'dark' ? '#FFFFFF' : '#1F2937'
          }}
        >
          Nuestras Características
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 border border-gray-200 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{
                opacity: Math.min(1, (scrollProgress - (0.3 + index * 0.1)) * 5),
                transform: `translateY(${Math.max(0, 50 - (scrollProgress - (0.3 + index * 0.1)) * 250)}px)`,
                backgroundColor: theme === 'dark' ? '#374151' : '#FFFFFF',
                color: theme === 'dark' ? '#FFFFFF' : '#1F2937'
              }}
            >
              <div className="text-blue-600 text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 