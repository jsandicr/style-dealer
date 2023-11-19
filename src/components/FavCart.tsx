import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from './ui/dropdown-menu'
import { Button } from "./ui/button"
import { Heart } from "lucide-react"
import { ProductCartItem } from "./ProductCartItem"
import { ScrollArea } from "./ui/scroll-area"
import { LoginButton } from "./LoginButton"
import { Separator } from "./ui/separator"
import { useAuth0 } from '@auth0/auth0-react'
import { useFav } from '../hooks/useFav'
import { Link } from 'react-router-dom'

export const FavCart = () => {
    const { isAuthenticated } = useAuth0();

    const { fav } = useFav()

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost'>
                    <Heart className="h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-[90vw] md:w-[450px] lg:w-[450px] mr-7 md:mr-3 lg:mr-3 mt-2'>
                    <Card className="gap-3 p-4 border-none">
                        <CardHeader>
                            <CardTitle>Favorites</CardTitle>
                            <Separator style={{marginTop: '10px'}}/>
                        </CardHeader>
                        {
                            isAuthenticated ? (
                            <>
                                <ScrollArea className="h-[300px]">
                                    <CardContent className="grid gap-4">
                                        {
                                            fav.length === 0 ? <p className="my-5">No favorites found...</p>
                                            :
                                            (
                                                fav.map((item) => (
                                                    <div
                                                        key={item._id}
                                                    >
                                                        <ProductCartItem isFavorite={true} item={{quantity: 0, product: item, size: undefined}} />
                                                        <Separator />
                                                    </div>
                                                ))
                                            )
                                        }
                                    </CardContent>
                                </ScrollArea>
                                <CardFooter className='pt-5'>
                                    <Link to={`/fav`} style={{width: '100%'}}>
                                        <Button className="w-full">
                                            Go to
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </>
                            ) : (
                                <CardContent className="p-6 gap-5 flex flex-col justify-center items-center">
                                    <p>Aun no has iniciado sesion</p>
                                    <LoginButton />
                                </CardContent>
                            )
                        }
                    </Card>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}