import { Select, SelectTrigger, SelectContent, SelectGroup, SelectItem, SelectValue } from "./ui/select"
import { Product } from "../types"
import { useCart } from "../hooks/useCart"
import { quantity } from '../const';

export const SelectQuantity = ({defaultValue, product} : { defaultValue?: string, product?: Product }) => {
    const { addProduct } = useCart()
    
    return(
        <Select defaultValue={defaultValue} onValueChange={(value)=>addProduct(product!, undefined, parseInt(value))}>
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