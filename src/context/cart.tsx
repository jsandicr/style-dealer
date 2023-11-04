import { createContext, useMemo } from "react"
import { Cart, Product } from "../types";
import { useCartReducer } from "../hooks/useCartReducer";

interface Props {
    children: JSX.Element | JSX.Element[]
}

type CartContextType = {
    cart: Cart;
    addProduct: (product: Product, sizeId: string, quantity?: number) => void;
    removeProduct: (product: Product) => void;
    clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({children}: Props) => {

    const { addProduct, removeProduct, clearCart, cart } = useCartReducer()

    const contextValue = useMemo(()=>{
        return {
            addProduct,
            removeProduct,
            clearCart,
            cart
        }
    }, [addProduct, removeProduct, clearCart, cart])

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}