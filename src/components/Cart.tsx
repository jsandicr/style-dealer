import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from './ui/dropdown-menu'
import { ShoppingBag } from "lucide-react"
import { Button } from './ui/button'
import { ScrollArea } from "./ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card'
import { Separator } from './ui/separator'
import { useAuth0 } from '@auth0/auth0-react'
import { ProductCartItem } from "./ProductCartItem"
import { LoginButton } from "./LoginButton"
import { Link } from "react-router-dom"
import { useCart } from '../hooks/useCart'

export const Cart = () => {
    const { isAuthenticated } = useAuth0();
    const { cart } = useCart();

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost'>
                    <ShoppingBag className="h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-[90vw] md:w-[450px] lg:w-[450px] mr-4 md:mr-3 lg:mr-3 mt-2'>
                    <Card className="rounded-md p-4 gap-3 p-4 border-none">
                        <CardHeader>
                            <CardTitle>Cart</CardTitle>
                            <Separator style={{marginTop: '10px'}}/>
                        </CardHeader>
                        {
                            isAuthenticated ? (
                                <>
                                    <ScrollArea className="h-[300px]">
                                        <CardContent className="grid gap-4">
                                            {
                                            cart.cartItems.length === 0 ? <p className="my-5">No products found...</p>
                                            :
                                            (
                                                cart.cartItems.map((item) => (
                                                    <div
                                                        key={item.id!+item.size?._id}
                                                    >
                                                        <ProductCartItem item={item} />
                                                        <Separator />
                                                    </div>
                                                ))
                                            )
                                        }
                                        </CardContent>
                                    </ScrollArea>

                                    <CardFooter className='pt-5 flex flex-col gap-2'>
                                        <p>Total: {cart.total}€</p>
                                        <Link to={`/checkout`} style={{width: '100%'}}>
                                            <Button className="w-full">
                                                Go to
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </>
                            ) : (
                                <div className="p-6 gap-5 flex flex-col justify-center items-center">
                                    <p>Aun no has iniciado sesion</p>
                                    <LoginButton />
                                </div>
                            )
                        }
                    </Card>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}