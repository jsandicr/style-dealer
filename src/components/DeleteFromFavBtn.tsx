import React from "react"
import { Product } from "../types"
import { Button } from "./ui/button"
import { HeartOff } from "lucide-react"
import { useFav } from "../hooks/useFav"

type Props = {
    product: Product
}

export const DeleteFromFavBtn: React.FC<Props> = ({product}) => {

    const { removeFav } = useFav()

    return(
        <Button variant='ghost' onClick={() => removeFav(product)}>
            <HeartOff strokeWidth={1.5}/>
        </Button>
    )
}