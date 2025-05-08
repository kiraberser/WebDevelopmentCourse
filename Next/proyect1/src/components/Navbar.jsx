'use client'

import Link from "next/link";
import clsx from 'clsx'
import { useContext } from "react";

import { ThemeController } from "./ThemeController";
import { ThemeContext } from "../contexts/ThemeContext/ThemeContext";

import navLinks from "@/constants/navLinks"

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className="relative mb-10">
      <nav className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} fixed top-0 w-full shadow-md p-4 z-50`}>
        <ul className="flex justify-center space-x-6">
          <ThemeController parentMethod={toggleTheme} />
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
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
            </li>
          ))}
        </ul>

      </nav>
    </div>
  )
}

export default Navbar