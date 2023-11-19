import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Moon, Sun, Settings, User, Heart } from "lucide-react"
import { LogOutButton } from "./LogOutButton"
import { LoginButton } from "./LoginButton"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator" 
import { Link } from "react-router-dom"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from './ui/dropdown-menu'
import { useTheme } from "../../ThemeProvider"
import { useAuth0 } from '@auth0/auth0-react'

export const NavbarAuth = () => {
    const { theme, setTheme } = useTheme()
    const { user, isAuthenticated } = useAuth0();

    return(
        <div className="flex justify-end items-center px-10 py-6" style={{height: '10vh'}}>
            <div className="flex items-center gap-5">
                <Link to={'/stores'}>
                    <Button variant='link'>
                        Stores
                    </Button>
                </Link>
                <Separator orientation="vertical" />
                <Button variant='ghost' onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}>
                    {theme === "light" ? 
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    : <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />}
                </Button>
                {
                    isAuthenticated ? (
                        <>
                            <span>Hola, {user?.name}</span>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost2">
                                        <Avatar>
                                            <AvatarImage src={user?.picture} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <Link to={'/fav'} className="flex">
                                            <Heart className="mr-2 h-4 w-4"/>
                                            <span>Favorites</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <LogOutButton />
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                    ) : (
                        <LoginButton />
                    )
                }
            </div>
        </div>
    )
}