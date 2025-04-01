import { Button } from "./Button";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div className={`bg-${theme}`}>
        <Button type={'button'} parentMethod={toggleTheme}>Cambiar de Modo</Button>
    </div>
  )
}

export default Navbar
