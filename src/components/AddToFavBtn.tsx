import React from "react";
import { Product } from "../types";
import { Button } from "./ui/button"
import { useFav } from "../hooks/useFav";
import { Heart } from "lucide-react";
import { useCart } from "../hooks/useCart";

type BtnProps = {
    product: Product,
    className?: string
};

export const AddToFavBtn: React.FC<BtnProps> = ({product, className}) => {
    const { addFav } = useFav();
    const { removeProduct } = useCart()

    return(
        <Button variant='ghost' className={className} onClick={() => {
            removeProduct(product)
            addFav(product)}
        }>
            <Heart strokeWidth={1.5} />
        </Button>
    )
}