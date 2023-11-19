import { Link } from "react-router-dom"
import { NavbarAuth } from './NavbarAuth'
import { Search } from "./Search"
import { Cart } from "./Cart"
import { FavCart } from "./FavCart"
import { CategoriesNav } from "./CategoriesNav"
import { useAuth0 } from "@auth0/auth0-react"
import { LoginButton } from "./LoginButton"
import { useResize } from '../hooks/useResize'
import { Profile } from "./Profile"

export const Navbar = () => {

    const { user, isAuthenticated } = useAuth0();
    const { screenSize } = useResize()

    return(
        <div>
            {
                screenSize !== 'sm' && (
                    <NavbarAuth />
                ) 
            }
            <div className="flex justify-between items-center px-10 py-6">
                <Link to={`/`} style={{width: '25%'}}>
                    <h1 className="font-semibold logo text-xs md:text-lg lg:text-lg">
                    <figure className="h-6 md:h-10 lg:h-10 w-8 md:w-14 lg:w-14">
                        <img src="/logo.png" alt="logo" className="object-cover object-center h-full w-full" />
                    </figure>
                    </h1>
                </Link>
                <div className="flex items-center md:gap-2 lg:gap-2">
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
                                    <Profile user={user!} />
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