import { Card, CardDescription, CardContent, CardFooter } from "./ui/card"
import { Link } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Separator } from "../components/ui/separator";

export const Trend = () => {
    const { products } = useProducts()

    return(
        <div className='flex flex-col justify-center'>
            <div className='mb-5'>
                <h2>Trends</h2>
            </div>
            <Separator />
            {
                products.length === 0 ? (
                    <p className="my-5">No products found...</p>
                ) : (
                    <Splide aria-label="My Favorite Images">
                    {
                        ...products.slice(0, 6).map(({_id, title, category, price, img}) => 
                        <SplideSlide key={_id} style={{margin: '40px 0'}}>
                            <Card className='border-none'>
                                <Link to={`/products/info/${_id}`}>
                                    <CardContent className={`h-2/3 p-0`}>
                                        <figure className="h-80 w-full">
                                            <img src={img} alt={title} className="object-cover object-center h-full w-full" />
                                        </figure>
                                    </CardContent>
                                    <CardFooter className='flex justify-between px-0 py-3'>
                                        <div>
                                            <p>{title}</p>
                                            <CardDescription>{category}</CardDescription>
                                        </div>
                                        <div>
                                            <p>{price}$</p>
                                        </div>
                                    </CardFooter>
                                </Link>
                            </Card>
                        </SplideSlide>
                    )}
                    </Splide>
                )
            }
        </div>
    )
}