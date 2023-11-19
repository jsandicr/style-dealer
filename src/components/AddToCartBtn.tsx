import React, { useState } from "react";
import { Product } from '../types';
import { Button } from "./ui/button"
import { useCart } from "../hooks/useCart";
import { ShoppingBag } from 'lucide-react'
import { useFav } from "../hooks/useFav";
import { SelectSizeModal } from "./SelectSizeModal";

type BtnProps = {
    product: Product,
    className?: string,
    sizeId?: string,
    itemId?: string 
};

export const AddToCartBtn: React.FC<BtnProps> = ({product, className, sizeId, itemId}) => {
    const { addProduct } = useCart();
    const { removeFav } = useFav();

    const [ showSizeSelected, setShowSizeSelected ] = useState(false)

    const handleShowSizeSelected = (value: boolean) => {
        setShowSizeSelected(value)
    }

    return(
        <>
            <Button variant='ghost' className={className} onClick={() => {
                if(!sizeId){
                    setShowSizeSelected(true)
                    return;
                }
                removeFav(product)
                addProduct(product, sizeId, undefined, itemId)
            }}>
                <ShoppingBag strokeWidth={1.5}/>
            </Button>
            {
                showSizeSelected ? (
                    <SelectSizeModal product={product} handleShowSizeSelected={handleShowSizeSelected} />
                ) : undefined
            }
        </>
    )
}