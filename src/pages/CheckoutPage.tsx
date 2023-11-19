import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Label } from '../components/ui/label'
import { Input } from "../components/ui/input"
import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue} from "../components/ui/select"
import { AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert"
import { Button } from "../components/ui/button"
import { Layout } from "../components/Layout"
import { Separator } from '../components/ui/separator'
import { Trend } from "../components/Trend"
import { ProductCard } from "../components/ProductCard"
import { useCart } from '../hooks/useCart';
import { useFav } from "../hooks/useFav"
import { Link } from "react-router-dom"
import { useState } from 'react'

const api_uri = import.meta.env.VITE_API_URI+"purchase/"

export const CheckoutPage = () => {

    const [checkoutSuccess, setCheckoutSuccess] = useState<null | boolean>(null);
    const [errorMessage, setErrorMessage] = useState('');

    const { cart, clearCart } = useCart()
    const { fav } = useFav()
    
    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();

        const options: RequestInit = {
            method: "POST",
            body: JSON.stringify({
                amount: cart.total,
                items: cart.cartItems,
                userEmail: cart.userEmail
            }),
            headers: {
                Accept: "application/json, text/plain",
                "Content-Type": "application/json;charset=UTF-8"
            }
        };

        try{
            const response = await fetch(api_uri+"checkout", options)
            if (!response.ok) {
                if (response.status === 400) {
                    const errorResponse = await response.json();
                    setErrorMessage('Error: ' + errorResponse.message);
                    setCheckoutSuccess(false);
                    setTimeout(() => {
                        setCheckoutSuccess(null);
                    }, 2000);
                    return;
                }
                throw new Error("Failed to fetch data");
            }
            setCheckoutSuccess(true);
            setTimeout(() => {
                setCheckoutSuccess(null);
            }, 2000);
            clearCart()
        }catch(e){
            console.log("Err try: ", e)
        }
    }

    return(
        <>
            <div>
                <Layout className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 grid-rows-1 md:grid-rows-1 lg:grid-rows-1 gap-10'>
                    <div className="col-span-1 md:col-span-3 lg:col-span-3">
                        <span className="text-2xl font-medium">
                            Cart
                        </span>
                        {
                            cart.cartItems.length === 0 ? <p className="my-5">No hay productos...</p>
                            :
                            <ul className="my-5 flex flex-col gap-5">
                                {
                                    cart.cartItems.map((item)=>{
                                        return (
                                            <li key={item.id}>
                                                <ProductCard item={item} />
                                                <Separator style={{marginTop: '10px'}}/>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </div>
                    <div className="row-start-2 md:row-start-1 lg:row-start-1 col-start-1 md:col-start-4 lg:col-start-4 col-span-1 md:col-span-3 lg:col-span-3">
                        <form onSubmit={handleSubmit}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Resumen</CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-6">
                                    <div className="flex justify-between">
                                        <Label>Subtotal</Label>
                                        <Label>{cart.total ? cart.total : '-'}€</Label>
                                    </div>
                                    <div className="flex justify-between">
                                        <Label>Shipping and handling charges</Label>
                                        <Label>Free</Label>
                                    </div>
                                    <Separator />
                                    <div className="flex justify-between">
                                        <Label>Total</Label>
                                        <Label>{cart.total ? cart.total : '-'}€</Label>
                                    </div>
                                    <Separator />
                                </CardContent>
                                <CardHeader>
                                    <CardTitle>Payment Method</CardTitle>
                                    <CardDescription>
                                        Add a new payment method to your account.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-6">
                                    <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
                                    <div>
                                        <RadioGroupItem value="card" id="card" className="peer sr-only" />
                                        <Label
                                        htmlFor="card"
                                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                        >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="mb-3 h-6 w-6"
                                        >
                                            <rect width="20" height="14" x="2" y="5" rx="2" />
                                            <path d="M2 10h20" />
                                        </svg>
                                            Card
                                        </Label>
                                    </div>
                                    <div>
                                        <RadioGroupItem
                                        value="paypal"
                                        id="paypal"
                                        className="peer sr-only"
                                        />
                                        <Label
                                        htmlFor="paypal"
                                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                        >
                                        <div>
                                            <svg viewBox="0 0 24 24" className="mb-3 h-6 w-6">
                                                <path
                                                    d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
                                                    fill="currentColor"
                                                    />
                                            </svg>
                                        </div>
                                        Paypal
                                        </Label>
                                    </div>
                                    <div>
                                        <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
                                        <Label
                                            htmlFor="apple"
                                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                        >
                                        <div>
                                            <svg viewBox="0 0 24 24" className="mb-3 h-6 w-6">
                                                <path
                                                    d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                                                    fill="currentColor"
                                                    />
                                            </svg>
                                        </div>
                                            Apple
                                        </Label>
                                    </div>
                                    </RadioGroup>
                                        <div className="grid gap-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input id="name" placeholder="First Last" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="number">Card number</Label>
                                            <Input id="number" placeholder="" />
                                        </div>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="grid gap-2">
                                                <Label htmlFor="month">Expires</Label>
                                                <Select>
                                                <SelectTrigger id="month">
                                                    <SelectValue placeholder="Month" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="1">January</SelectItem>
                                                    <SelectItem value="2">February</SelectItem>
                                                    <SelectItem value="3">March</SelectItem>
                                                    <SelectItem value="4">April</SelectItem>
                                                    <SelectItem value="5">May</SelectItem>
                                                    <SelectItem value="6">June</SelectItem>
                                                    <SelectItem value="7">July</SelectItem>
                                                    <SelectItem value="8">August</SelectItem>
                                                    <SelectItem value="9">September</SelectItem>
                                                    <SelectItem value="10">October</SelectItem>
                                                    <SelectItem value="11">November</SelectItem>
                                                    <SelectItem value="12">December</SelectItem>
                                                </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="grid gap-2">
                                                <Label htmlFor="year">Year</Label>
                                                <Select>
                                                <SelectTrigger id="year">
                                                    <SelectValue placeholder="Year" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {Array.from({ length: 10 }, (_, i) => (
                                                    <SelectItem key={i} value={`${new Date().getFullYear() + i}`}>
                                                        {new Date().getFullYear() + i}
                                                    </SelectItem>
                                                    ))}
                                                </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="grid gap-2">
                                                <Label htmlFor="cvc">CVC</Label>
                                                <Input id="cvc" placeholder="CVC" />
                                            </div>
                                        </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full" type="submit">Continue</Button>
                                </CardFooter>
                            </Card>
                        </form>
                    </div>
                    <div className='row-span-1 md:row-span-2 lg:row-span-2 col-span-1 md:col-span-6 lg:col-span-6 my-8'>
                        <span className="text-2xl font-medium">
                            Favoritos
                        </span>
                        {
                            fav.length === 0 ? <p className="my-5">No hay fav...</p>
                            :
                                <ul className="my-4">
                                    {
                                        fav.map((fav)=>{
                                            return(
                                                <li key={fav._id} className="flex flex-col gap-5">
                                                    <ProductCard isFavorite={true} item={{quantity: 0, product: fav, size: undefined}} />
                                                    <Separator style={{marginTop: '10px'}}/>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                        }
                        <Button variant='link' className="flex justify-start p-0">
                            <Link to={'/fav'}>
                                Ir a favoritos
                            </Link>
                        </Button>
                    </div>
                </Layout>
                <Layout className='mt-8'>
                    <span className="text-2xl font-medium">
                        Tambien te podria interesar
                    </span>
                    <Trend />
                </Layout>
            </div>
            {checkoutSuccess === false && (
                <div style={{position: 'sticky', bottom: '20px', left: '20px', width: '50%'}}>
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            {errorMessage}
                        </AlertDescription>
                    </Alert>
                </div>
            )}
            {checkoutSuccess === true && (
                <div style={{position: 'sticky', bottom: '20px', left: '20px', width: '50%'}}>
                    <Alert variant="success">
                        <CheckCircle className="h-4 w-4"/>
                        <AlertTitle>Purchase completed</AlertTitle>
                    </Alert>
                </div>
            )}
            </>
    )
}