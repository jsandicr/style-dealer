import { Card, CardContent } from './ui/card'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog'
import { CartItem } from '../types';
import { SelectSize } from './SelectSize'
import { useSize } from '../hooks/useSize'
import { SelectQuantity } from './SelectQuantity'
import { AddToCartBtn } from './AddToCartBtn';
import { DeleteFromCartBtn } from './DeleteFromCartBtn';
import { AddToFavBtn } from './AddToFavBtn';
import { DeleteFromFavBtn } from './DeleteFromFavBtn';

type Props = {
    isFavorite?: boolean,
    item: CartItem
}

export const ProductCard: React.FC<Props> = ({isFavorite = false, item}) => {

    const { sizes } = useSize()

    if(!item) return

    return(
        <Card className='flex'>
            <figure className="h-52 w-64">
                <img src={item.product.img} alt={item.product.title} className="object-cover object-center h-full w-full" />
            </figure>
            <CardContent className={`flex justify-between w-full p-5`}>
                <div className='flex flex-col gap-2'>
                    <span className="font-medium">{item.product.title}</span>
                    <span>{item.product.category}</span>
                    <span>{item.product.color} </span>
                    {
                        isFavorite ? (
                            <>
                                <Dialog>
                                    <DialogTrigger className="flex justify-start p-0">
                                        Select size
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                        <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                                        <DialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                                <div className='flex'>
                                        <AddToCartBtn product={item.product} />
                                        <DeleteFromFavBtn product={item.product} />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex gap-2">
                                    <div className="flex items-center gap-2">
                                        <span>Size</span>
                                        <SelectSize sizes={sizes} defaultValue={item.size?._id.toString()} product={item.product} />
                                    </div>
                                    <div className="flex items-center gap-2">
                                    <span>Quantity</span>
                                    <SelectQuantity defaultValue={item.quantity?.toString()} product={item.product} />
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className='flex'>
                                        <AddToFavBtn product={item.product} />
                                        <DeleteFromCartBtn product={item.product} />
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
                <div>
                    {item.product.price} €
                </div>
            </CardContent>
        </Card>
    )
}