import { LoginButton } from "./LoginButton"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator" 
import { Link } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react'
import { Profile } from "./Profile"
import { ChangeThemeBtn } from "./ChangeThemeBtn"

export const NavbarAuth = () => {
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
                <ChangeThemeBtn />
                {
                    isAuthenticated ? (
                        <>
                            <span>Hello, {user?.name}</span>
                            <Profile user={user!} />
                        </>
                    ) : (
                        <LoginButton />
                    )
                }
            </div>
        </div>
    )
}