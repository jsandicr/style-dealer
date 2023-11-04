import { Card, CardContent } from './ui/card'
import { AddToCartBtn } from './AddToCartBtn'
import { CartItem } from '../types';
import { useSize } from '../hooks/useSize';
import { SelectSize } from './SelectSize';
import { SelectQuantity } from './SelectQuantity';
import { DeleteFromFavBtn } from './DeleteFromFavBtn';
import { DeleteFromCartBtn } from './DeleteFromCartBtn';

type Props = {
    isFavorite?: boolean,
    item: CartItem
}

export const ProductCartItem: React.FC<Props> = ({isFavorite = false, item }) => {

    const { sizes } = useSize()

    return(
        <Card className='flex w-80 border-none'>
            <CardContent className='flex justify-between items-center w-full p-1'>
                <figure className="h-36 w-36">
                    <img src={item.product.img} alt={item.product.title} className="object-cover object-center h-full w-full" />
                </figure>
                <div className='flex flex-col gap-3 items-center'>
                    <span className="font-medium">{item.product.title}</span>
                    {
                        isFavorite ? (
                            <>
                                <div>
                                    {item?.product.price} €
                                </div>
                                <div className='flex'>
                                    <AddToCartBtn product={item.product} />
                                    <DeleteFromFavBtn product={item.product} />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between gap-2">
                                        <span>Size</span>
                                        <SelectSize sizes={sizes} defaultValue={item?.size?._id.toString()} product={item.product} />
                                    </div>
                                    <div className="flex items-center justify-between gap-2">
                                    <span>Quantity</span>
                                    <SelectQuantity defaultValue={item?.quantity?.toString()} product={item.product} />
                                    </div>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    {item?.product.price} €
                                    <DeleteFromCartBtn product={item.product} />
                                </div>
                            </>
                        )
                    }
                </div>
            </CardContent>
        </Card>
    )
}