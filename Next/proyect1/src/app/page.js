'use client'
import { ReactLenis, useLenis } from 'lenis/react'
import { useState } from 'react'
import { ProgressBar, HeroSection, FeaturesSection, Footer } from '../components'

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

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
      <main className="min-h-screen">
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
