'use client'

import { createContext } from "react"

export const ThemeContext = createContext({
    theme: 'white',
    toggleTheme: () => {}
}) 

