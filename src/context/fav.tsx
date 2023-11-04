import { createContext, useMemo } from "react"
import { Product } from "../types";
import { useFavReducer } from "../hooks/useFavReducer";

interface Props {
    children: JSX.Element | JSX.Element[]
}

type FavContextType = {
    fav: Product[];
    addFav: (product: Product) => void;
    removeFav: (product: Product) => void;
    clearFav: () => void;
};

export const FavContext = createContext<FavContextType | undefined>(undefined);

export const FavProvider = ({children}: Props) => {

    const { addFav, removeFav, fav, clearFav } = useFavReducer()

    const contextValue = useMemo(() => {
        return {
            addFav,
            removeFav,
            clearFav,
            fav,
        };
    }, [addFav, removeFav, clearFav, fav]);

    return(
        <FavContext.Provider value={contextValue}>
            {children}
        </FavContext.Provider>
    )
}