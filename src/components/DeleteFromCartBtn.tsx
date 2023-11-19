import React from "react"
import { useCart } from "../hooks/useCart"
import { Button } from "./ui/button"
import { Trash2 } from "lucide-react"

type Props = {
    itemId: string,
}

export const DeleteFromCartBtn: React.FC<Props> = ({itemId}) => {

    const { removeProduct } = useCart()

    return(
        <Button variant='ghost' onClick={() => removeProduct(itemId)}>
            <Trash2 strokeWidth={1.5} />
        </Button>
    )
}