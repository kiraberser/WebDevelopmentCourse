'use client'
import Link from "next/link"
import { ThemeContext } from "../contexts/ThemeContext/ThemeContext"
import { useContext, useState, useEffect } from "react"

export default function HeroSection({ scrollProgress, onScrollToFeatures }) {
  const { theme } = useContext(ThemeContext)
  const [userName, setUserName] = useState('')

  useEffect(() => {
    // Función para obtener el nombre del usuario
    const getUserName = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/user')
        const data = await response.json()
        if (data.userId) {
          setUserName(data.userId)
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    getUserName()
  }, [])

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: theme === 'dark'
          ? 'linear-gradient(to bottom, #1E3A8A, #312E81)'
          : 'linear-gradient(to bottom, #3B82F6, #6366F1)'
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      <div className="text-center px-4 relative z-10 text-white">
        <h1
          className="text-5xl md:text-6xl font-bold mb-6 transform transition-all duration-700"
          style={{
            opacity: 1 - scrollProgress * 2,
            transform: `translateY(${scrollProgress * 100}px)`
          }}
        >
          Bienvenido {userName ? userName : ''} a Mi Sitio
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 transform transition-all duration-700 delay-100"
          style={{
            opacity: 1 - scrollProgress * 2,
            transform: `translateY(${scrollProgress * 100}px)`
          }}
        >
          Descubre una nueva experiencia web
        </p>
        <button
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          onClick={onScrollToFeatures}
        >
          Comenzar
        </button>
        {
          userName ?
            <Link
              className="bg-black m-2 text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
              href={'http://localhost:3000/profile/'}
            >
              Perfil
            </Link> :
            <Link
              className="bg-black m-2 text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
              href={'http://localhost:3000/sign-up/'}
            >
              Sign Up
            </Link>
        }

      </div>
    </section>
  )
} 