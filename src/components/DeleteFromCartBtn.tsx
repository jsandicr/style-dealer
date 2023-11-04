import React from "react"
import { useCart } from "../hooks/useCart"
import { Product } from "../types"
import { Button } from "./ui/button"
import { Trash2 } from "lucide-react"

type Props = {
    product: Product
}

export const DeleteFromCartBtn: React.FC<Props> = ({product}) => {

    const { removeProduct } = useCart()

    return(
        <Button variant='ghost' onClick={() => removeProduct(product)}>
            <Trash2 strokeWidth={1.5} />
        </Button>
    )
}