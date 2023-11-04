import { Select, SelectTrigger, SelectContent, SelectGroup, SelectItem, SelectValue } from "./ui/select"
import { Product, Size } from "../types"
import { useCart } from "../hooks/useCart"

export const SelectSize = ({sizes, defaultValue, product} : { sizes: Size[], defaultValue?: string, product?: Product }) => {
    const { addProduct } = useCart()
    
    return(
        <Select defaultValue={defaultValue} onValueChange={(value)=>addProduct(product!, value, undefined)}>
            <SelectTrigger className="w-[60px]">
                <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                {
                    sizes.map((size)=>{
                        return <SelectItem key={size._id} value={size._id}>{size.size}</SelectItem>
                    })
                }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}