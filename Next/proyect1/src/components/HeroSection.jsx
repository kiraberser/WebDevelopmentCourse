'use client'

import Link from "next/link"
import { useContext, useState, useEffect, useRef } from "react"

import { ThemeContext } from "../contexts/ThemeContext/ThemeContext"
import { getProfileClient } from "@/utils/clientProfile"

export default function HeroSection({ scrollProgress, onScrollToFeatures }) {
  const { theme } = useContext(ThemeContext)
  const [userName, setUserName] = useState('')
  const profileFetchedRef = useRef(false)

  useEffect(() => {
    if (!profileFetchedRef.current) {
      try {
        const getUserName = async () => {
          const response = await getProfileClient();
          console.log(response)
          if (response && response.username) {
             setUserName(response.username)
          }
        }
        getUserName();
      } catch (error) {
        console.error('Error al obtener el nombre de usuario:', error)
      } finally {
        profileFetchedRef.current = true;
      }
    }
  }, []);

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
              href={'http://localhost:3000/signup/'}
            >
              Sign Up
            </Link>
        }
      </div>
    </section>
  )
} 