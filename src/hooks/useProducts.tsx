import { useEffect, useState } from "react"
import { FilterApplys, Product } from "../types";

export const useProducts = (filters?: FilterApplys) => {
    const uri_api = import.meta.env.VITE_API_URI+"products";
    const [products, setProducts] = useState<Product[]>([])

    const fetchProducts = async() => {
        try{
            const url = new URL(uri_api);
            if(filters !== undefined){
                for (const key in filters) {
                    const value = filters[key];
                    if (value) {
                        url.searchParams.append(key, value);
                    }
                }
            }
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const productResult = await response.json()
            setProducts(productResult.allProducts)
        }catch(error){
            console.error("Error fetching data:", error);
        }
    }

    const orderByProducts = (order: string) => {
        const newState = [...products]
        switch(order){
            case "1":
                newState.sort((a, b) => a.entryDate >= b.entryDate ? 1 : -1)
                break;
            case "2":
                newState.sort((a, b) => a.price >= b.price ? 1 : -1)
                setProducts(newState)
                break;
            case "3":
                newState.sort((a, b) => a.price <= b.price ? 1 : -1)
                setProducts(newState)
                break;
        }
        if(newState!==products) setProducts(newState)
    }

    useEffect(()=>{
        fetchProducts()
    },[filters])

    return { products, orderByProducts }
}