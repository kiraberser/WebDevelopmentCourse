'use client'

import Link from "next/link";
import { ThemeController } from "./ThemeController";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext/ThemeContext";

const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
  
    return(
      <nav className={theme === 'dark' ? 'bg-gray-900 shadow-md p-4' : 'bg-white shadow-md p-4'}>
          <ul className="flex justify-center space-x-6">
            <ThemeController parentMethod={toggleTheme}/>
            <li>
              <Link
                href="/"
                className={theme === 'dark' ? 'text-gray-300 hover:text-blue-400 transition-colors' : 'text-gray-700 hover:text-blue-500 transition-colors'}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
               className={theme === 'dark' ? 'text-gray-300 hover:text-blue-400 transition-colors' : 'text-gray-700 hover:text-blue-500 transition-colors'}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
               className={theme === 'dark' ? 'text-gray-300 hover:text-blue-400 transition-colors' : 'text-gray-700 hover:text-blue-500 transition-colors'}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
               className={theme === 'dark' ? 'text-gray-300 hover:text-blue-400 transition-colors' : 'text-gray-700 hover:text-blue-500 transition-colors'}
              >
                Contact Us
              </Link>
            </li>
          </ul>

        </nav>
    )
}

export default Navbar