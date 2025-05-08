'use client'
import { ThemeContext } from "../contexts/ThemeContext/ThemeContext"
import { useContext } from "react"

export default function Footer() {
  const { theme } = useContext(ThemeContext)
  
  return (
    <footer className="py-12" style={{ backgroundColor: theme === 'dark' ? '#111827' : '#1F2937' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Sobre Nosotros</h4>
            <p className="text-gray-400">Creamos experiencias web únicas y memorables.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Contacto</h4>
            <p className="text-gray-400">Email: info@ejemplo.com</p>
            <p className="text-gray-400">Tel: (123) 456-7890</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
} 