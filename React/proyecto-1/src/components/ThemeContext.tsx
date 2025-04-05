//Importar las dependencias
import { ReactNode, createContext, useCallback } from "react";

// declarar el typado que se recibe thmeContext
interface ThemeContextType {
    theme: string,
    toggleTheme: () => void
}

// colocar el ThemeContext y sus valores por defecto
export const ThemeContext = createContext<ThemeContextType>({
    theme: 'white',
    toggleTheme: () => {}
})

//Declarar el typado del ThemeProvider
interface ThemeProviderProps {
    children: ReactNode
}

// Declarar el Themeprovider y usar useState para colorcar cariables
import { useState } from "react";

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState('white')
    const [textColor, setTextColor] = useState('black')

    const toggleTheme = useCallback((): void => {
        setTheme(prevTheme => prevTheme === 'white' ? 'black' : 'white')
        setTextColor(prevColor => prevColor === 'black' ? 'white' : 'black')
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`bg-${theme} text-${textColor}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}


// Crear la funcion toggleTheme y hacer el cambio de color tanto para la letra como para el bg

// Retornar el ThemeContext.Provider con sus valores y dentro de un div que tendrá la logica del cambio con el childre




