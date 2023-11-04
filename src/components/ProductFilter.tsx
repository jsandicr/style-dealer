import { Card, CardContent, CardHeader } from './ui/card'
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { AddToCartBtn } from './AddToCartBtn';
import { AddToFavBtn } from './AddToFavBtn';

type Props = {
    product: Product;
};

export const ProductFilter = ({product}: Props) => {
    return(
        <Card className='flex flex-col items-center border-none'>
            <CardHeader className='p-0'>
                <Link to={`/products/info/${product._id}`}>
                    <figure className="h-52 w-64">
                        <img src={product.img} alt={product.title} className="object-cover object-center h-full w-full" />
                    </figure>
                </Link>
            </CardHeader>
            <CardContent>
                <div className='flex flex-col py-5 w-64'>
                    <span className="font-medium">{product.title} </span>
                    <span>{product.category} </span>
                    <span>{product.color} </span>
                    <span>{product.price} €</span>
                </div>
                <div className='flex'>
                    <AddToCartBtn product={product} />
                    <AddToFavBtn product={product} />
                </div>
            </CardContent>

        </Card>
    )
}