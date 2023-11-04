import { useContext } from "react";
import { FavContext } from "../context/fav";

export function useFav(){
    const favContext = useContext(FavContext)

    if(favContext===undefined) {
        throw new Error('useCart must be used within a FavProvider')
    }

    return favContext
}