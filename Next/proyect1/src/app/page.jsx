'use client'
import { ReactLenis, useLenis } from 'lenis/react'
import { useState, useContext } from 'react'
import { ProgressBar, HeroSection, FeaturesSection, Footer } from '../components'
import clsx from 'clsx'
import { themedBg } from '@/utils/themeClass'
import { ThemeContext } from '@/contexts/ThemeContext/ThemeContext'

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const {theme} = useContext(ThemeContext)

  // Usar el hook useLenis para manejar el scroll
  const lenis = useLenis(({ scroll, limit, velocity, direction, progress }) => {
    setScrollProgress(progress)
  })

  const handleScrollToFeatures = () => {
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      lenis?.scrollTo(featuresSection)
    }
  }

  return (
    <ReactLenis 
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      <main className={clsx("min-h-screen", themedBg(theme, 'bg-gray-900', 'bg-white' ))}>
        <ProgressBar progress={scrollProgress} />
        <HeroSection 
          scrollProgress={scrollProgress} 
          onScrollToFeatures={handleScrollToFeatures}
        />
        <FeaturesSection scrollProgress={scrollProgress} />
        <Footer />
      </main>
    </ReactLenis>
  )
}
