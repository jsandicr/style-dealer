import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "../../ThemeProvider"

export const ChangeThemeBtn = () => {
    const { theme, setTheme } = useTheme()

    return(
        <Button variant='ghost' onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")} className="p-0 md:p-2 lg:p-2">
            {theme === "light" ? 
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            : <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />}
        </Button>
    )
}