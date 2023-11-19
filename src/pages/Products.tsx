import { Layout } from "../components/Layout"
import { Button } from "../components/ui/button"
import { SlidersHorizontal } from "lucide-react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Accordion, AccordionTrigger, AccordionContent, AccordionItem } from "../components/ui/accordion"
import { Checkbox } from "../components/ui/checkbox"
import { ProductFilter } from "../components/ProductFilter"
import { useParams } from "react-router-dom"
import { useCallback, useEffect, useState } from "react"
import { useProducts } from "../hooks/useProducts"
import { useSize } from "../hooks/useSize"
import { typeFilters } from "../types"
import { useFilterReducer } from "../hooks/useFilterReducer"
import { listOrderBy, filters} from '../const'

export const Products = () => {

    const { sizes } = useSize()
    const [ showFilters, setShowFilters ] = useState(true)
    const { addGender, addDiscount, addPrice, clearFilters, filtersApply } = useFilterReducer()

    const { products, orderByProducts } = useProducts(filtersApply)
    const params = useParams()

    function decodeValue(value?:string):string{
        return value ? value.replace(/%20/g, ' ') : '';
    }

    const validateFilters = useCallback((value?: string) => {
        const filtersToCheck = [...filters];
            
        filtersToCheck.forEach((filter, index) => {
            if (filter.options.includes(value!)) {
                if(index === 0) {
                    addGender(value);
                }
                if(index === 1) {
                    addDiscount(value);
                }
                if(index === 2) {
                    addPrice(value);
                }
            }
        });
    }, [addGender, addDiscount, addPrice]);

    useEffect(()=>{
        clearFilters()
        const category = decodeValue(params.category);
        validateFilters(category)
        const subcategory = decodeValue(params.subcategory);
        validateFilters(subcategory)
    }, [params])

    return(
        <>
        <Layout className="w-full flex justify-between my-4 gap-2">
            <span className="text-sm md:text-xl lg:text-xl">
                {decodeValue(params.category)}
                {params.subcategory && ` - ${decodeValue(params.subcategory)}`}
            </span>
            <div className="flex gap-1 md:gap-2 lg:gap-2">
                <Button className="flex gap-2"
                    onClick={()=> setShowFilters(!showFilters)}>
                    <span>Filters</span>
                    <SlidersHorizontal size={20} strokeWidth={1} />
                </Button>
                <Select onValueChange={(value)=>{
                    orderByProducts(value)
                }}>
                    <SelectTrigger className="w-[100px] md:w-[180px] lg:w-[180px]">
                        <SelectValue placeholder="Order by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {
                                listOrderBy.map(({id, title}) => 
                                    <SelectItem key={id} value={id.toString()} >
                                        {title}
                                    </SelectItem>
                                )
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </Layout>
        <Layout className="grid grid-cols-4">
            <div className={`${showFilters ? '' : 'hidden'} relative col-span-1`}>
                <div className="sticky top-28">
                    {
                        filters.map(({id, title, type, options})=>{
                            return(
                                <Accordion key={id} type="single" collapsible>
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="">
                                            {title} {type === typeFilters.size ? sizes.length : options.length}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                        {
                                            type === typeFilters.check && (
                                                <ul className="flex flex-col justify-between gap-4 p-2">
                                                    {
                                                        options.map((option: string) => {
                                                            const isChecked = filtersApply.gender === option || filtersApply.discount === option || filtersApply.price === option;
                                                            return(
                                                                <li key={option} className="flex gap-1 items-center">
                                                                    <Checkbox key={option} checked={isChecked} onCheckedChange={() => {
                                                                        validateFilters(option);
                                                                    } } />
                                                                    <span className="font-semibold">{option}</span>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            )
                                        }
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            )
                        })
                    }
                </div>
            </div>
            <div className={`${showFilters ? 'col-span-3' : 'col-span-4'} ${products.length === 0 ? 'h-[70vh]' : undefined} grid md:grid-cols-2 lg:grid-cols-3 md:p-5 p-2 lg:p-5 gap-2`}>
                {
                    products.length > 0 ? products.map((product)=>{
                        return(
                            <ProductFilter key={product._id} product={product} />
                        )
                    }) : <p>No products found...</p>
                }
            </div>
        </Layout>
        </>
    )
}