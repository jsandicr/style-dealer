import { Select, SelectTrigger, SelectContent, SelectGroup, SelectItem, SelectValue } from "./ui/select"
import { Product } from "../types"
import { useCart } from "../hooks/useCart"
import { quantity } from '../const';

export const SelectQuantity = ({defaultValue, product, sizeId, itemId} : { defaultValue?: string, product?: Product, sizeId: string, itemId?: string }) => {
    const { addProduct } = useCart()
    
    return(
        <Select defaultValue={defaultValue} onValueChange={(value)=>addProduct(product!, sizeId, parseInt(value), itemId)}>
            <SelectTrigger className="w-[60px]">
                <SelectValue placeholder="Select quantity" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                {
                    quantity.map((q)=>{
                        return <SelectItem key={q.id} value={q.id.toString()}>{q.quantity}</SelectItem>
                    })
                }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}