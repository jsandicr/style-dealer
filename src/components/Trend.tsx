import { useRef } from 'react'
import { Card, CardDescription, CardContent, CardFooter } from "./ui/card"
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useResize } from '../hooks/useResize'
import { useProducts } from '../hooks/useProducts'

export const Trend = () => {

    const { products } = useProducts()

    const { screenSize } = useResize()

    const carouselRef = useRef<HTMLDivElement | null>(null);

    let currentIndex = 0;
    const cardsPerSlide = screenSize !== 'sm' ? 3 : 1;
    const totalCards = 6;
    const cardWidth = screenSize !== 'sm' ? 480 : 420;

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCarousel();
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCarousel();
    };

    const updateCarousel = () => {
        const translateValue = -currentIndex * cardWidth + 'px';
        carouselRef.current!.style.transform = 'translateX(' + translateValue + ')';
    };

    return(
        <div className='flex flex-col justify-center'>
            <div className='flex justify-between mb-5'>
                <h2>Trends</h2>
                <div className='flex gap-5'>
                    <Button variant='outline' onClick={prevSlide} className='rounded-full'>
                        <ChevronLeft />
                    </Button>
                    <Button variant='outline' onClick={nextSlide} className='rounded-full'>
                        <ChevronRight />
                    </Button>
                </div>
            </div>
            <div style={{width: `${totalCards * (100 / cardsPerSlide)}%`, height: '70vh'}}>
                <div ref={carouselRef} className="grid grid-row-1 grid-cols-6 gap-12 h-full" style={{transition: 'transform 0.5s ease-in-out', marginLeft: 'auto', marginRight: 'auto'}}>
                    {
                        ...products.slice(0, 6).map(({_id, title, category, price, img}) => 
                            <Card key={_id} className='border-none'>
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
                        )
                    }
                </div>
            </div>
        </div>
    )
}