import React from "react";
import { Product } from "../types";
import { Button } from "./ui/button"
import { useFav } from "../hooks/useFav";
import { Heart } from "lucide-react";
import { useCart } from "../hooks/useCart";

type BtnProps = {
    product: Product,
    className?: string,
    itemId?: string 
};

export const AddToFavBtn: React.FC<BtnProps> = ({product, className, itemId}) => {
    const { addFav } = useFav();
    const { removeProduct } = useCart()

    return(
        <Button variant='ghost' className={className} onClick={() => {
            if(itemId) removeProduct(itemId);
            addFav(product)}
        }>
            <Heart strokeWidth={1.5} />
        </Button>
    )
}