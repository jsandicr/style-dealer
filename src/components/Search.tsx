import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { Card } from './ui/card';
import { Separator } from '@radix-ui/react-separator';

export const Search = () => {

    const [products, setProducts] = useState<Product[] | undefined> (undefined)

    const debounceRef = useRef<NodeJS.Timeout>()
    const lastSearch = useRef<string | undefined>(undefined)
    const searchContainerRef = useRef<HTMLDivElement | null>(null);

    const onSearchChange = ( event: ChangeEvent<HTMLInputElement> ) => {
        if(debounceRef.current) clearTimeout(debounceRef.current)

        debounceRef.current = setTimeout(() => {
            const query = event.target.value
            if(query != lastSearch.current)
            {
                fetchQueryProducts(event.target.value)
                lastSearch.current = event.target.value
            }
        }, 500)
    }

    const uri_api = import.meta.env.VITE_API_URI+"products";

    const fetchQueryProducts = async(query: string) => {
        if(!query){
            setProducts(undefined);
            return;
        }
        const response = await fetch(uri_api+"/query/"+query.trim())
        if(!response.ok) {
            throw new Error("Failed to fetch data");
        }   
        const productsResult = await response.json()
        setProducts(productsResult.products)
    }   

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                searchContainerRef.current &&
                !searchContainerRef.current.contains(event.target as Node)
            ) {
                setProducts([]);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return(
        <div className="relative flex justify-center items-center h-10 w-full md:w-96 lg:w-full rounded-md border border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
            <input placeholder="Search..." className="bg-transparent focus:outline-none w-full h-full p-2" onChange={onSearchChange} />
            <Card className='absolute top-10 w-full rounded-md border bg z-20'>
            {
                products && products.length > 0 && (
                    <ul className='w-full flex flex-col gap-2 z-20'>
                        {
                            products.map((product)=>{
                                return(
                                    <li key={product._id} className='w-full flex justify-center p-2'>
                                        <Link to={`/products/info/${product._id}`} onClick={() => setProducts([])}>
                                            <p>{product.title} </p>
                                        </Link>
                                        <Separator />
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
            }
            </Card>
        </div>
    )
}