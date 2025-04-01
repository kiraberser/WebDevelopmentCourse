//Importar las dependencias
import { createContext, ReactNode, useState } from "react";

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
export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setToggleTheme] = useState('white')
    const [textColor, setTextColor] = useState('black')

// Crear la funcion toggleTheme y hacer el cambio de color tanto para la letra como para el bg
    const toggleTheme = (): void => {
        setToggleTheme(prevTheme => prevTheme === 'white' ? 'black' : 'white')
        setTextColor(prevColor => prevColor === 'black' ? 'white': 'black')
    }

    return (
// Retornar el ThemeContext.Provider con sus valores y dentro de un div que tendrá la logica del cambio con el childre
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`bg-${theme} text-${textColor}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}




