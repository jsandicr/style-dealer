import { Size } from "../types"
import { useState, useEffect } from "react"

export const useSize = () => {
    const uri_api = import.meta.env.VITE_API_URI+"sizes"
    const [ sizes, setSizes ] = useState<Size[]> ([])

    useEffect(() => {
        const fetchSizes = async() => {
            try{
                const response = await fetch(uri_api)
                if(!response.ok){
                    throw new Error("Failed to fetch data");
                }
                const sizeResult = await response.json()
                setSizes(sizeResult.allSizes)
            }catch(error){
                console.error("Error fetching data:", error);
            }
        }

        fetchSizes()
    }, [])

    return { sizes }
}