import { User } from "@auth0/auth0-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Heart, Store } from "lucide-react"
import { LogOutButton } from "./LogOutButton"
import { useResize } from '../hooks/useResize'
import { ChangeThemeBtn } from "./ChangeThemeBtn"
import { Link } from 'react-router-dom'
 
type Props = {
    user: User
} 

export const Profile: React.FC<Props> = ({user}) => {
    const { screenSize } = useResize()

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost2">
                    <Avatar>
                        <AvatarImage src={user?.picture} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="md:w-56 lg:w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {
                    screenSize === 'sm' && (
                        <DropdownMenuItem className="gap-1">
                            <ChangeThemeBtn />
                            Theme
                        </DropdownMenuItem>
                    )
                }
                <DropdownMenuItem>
                    <Link to={'/fav'} style={{display: 'flex'}}>
                        <Heart className="mr-2 h-4 w-4"/>
                        Favorites
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to={'/stores'} style={{display: 'flex'}}>
                        <Store className="mr-2 h-4 w-4"/>
                        Stores
                    </Link>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOutButton />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}