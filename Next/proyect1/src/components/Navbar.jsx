'use client'

import Link from "next/link";
import clsx from 'clsx'
import { useContext, useState } from "react";

import { ThemeController } from "./ThemeController";
import { ThemeContext } from "../contexts/ThemeContext/ThemeContext";

import navLinks from "@/constants/navLinks"

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative mb-10">
      <nav className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} fixed top-0 w-full shadow-md p-4 z-50`}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo o título del sitio (opcional) */}
          <div className={`font-bold text-xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            <Link href="/">
              Logo
            </Link>
          </div>
          
          {/* Botón de menú hamburguesa para móviles */}
          <button 
            className="lg:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Enlaces de navegación para pantallas grandes */}
          <div className="hidden lg:flex items-center space-x-6">
            <ThemeController parentMethod={toggleTheme} />
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  'transition-colors',
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-blue-400'
                    : 'text-gray-700 hover:text-blue-500'
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Menú móvil desplegable */}
        <div 
          className={`${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } lg:hidden transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <div className={`flex flex-col space-y-4 mt-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="flex justify-center pb-2">
              <ThemeController parentMethod={toggleTheme} />
            </div>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  'py-2 px-4 transition-colors text-center',
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                    : 'text-gray-700 hover:text-blue-500 hover:bg-gray-100'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar