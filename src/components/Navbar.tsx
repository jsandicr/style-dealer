import { Link } from "react-router-dom"
import { NavbarAuth } from './NavbarAuth'
import { Search } from "./Search"
import { Cart } from "./Cart"
import { FavCart } from "./FavCart"
import { CategoriesNav } from "./CategoriesNav"
import { useAuth0 } from "@auth0/auth0-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Heart, Settings, User } from "lucide-react"
import { LogOutButton } from "./LogOutButton"
import { LoginButton } from "./LoginButton"
import { useResize } from "../hooks/useResize"

export const Navbar = () => {

    const { user, isAuthenticated } = useAuth0();
    const {screenSize} = useResize()

    return(
        <div>
            {
                (screenSize === 'md' || screenSize === 'lg') && (
                    <NavbarAuth />
                ) 
            }
            <div className="flex justify-between items-center px-10 py-6">
                <Link to={`/`} style={{width: '10%'}}>
                    <h1 className="font-semibold logo">
                        Style Dealer
                    </h1>
                </Link>
                <div className="flex items-center gap-2">
                    {
                        screenSize !== 'sm' && (
                            <CategoriesNav />
                        )
                    }
                    <Search />
                    <FavCart />
                    <Cart />
                    {
                        screenSize === 'sm' && (
                                isAuthenticated ? (
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
                                                <User className="mr-2 h-4 w-4" />
                                                <span>Profile</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Heart className="mr-2 h-4 w-4"/>
                                                <span>Favorites</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Settings className="mr-2 h-4 w-4" />
                                                <span>Settings</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>
                                                <LogOutButton />
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                ) : (
                                    <LoginButton />
                                )
                        )
                    }
                </div>
            </div>
        </div>
    )
}