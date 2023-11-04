import { useReducer } from "react";
import { cartReducer, CART_ACTIONS, initialStateCart } from "../reducers/cartReducer";
import { Product, CartItem } from '../types';
import { useSize } from './useSize';
import { useAuth0 } from "@auth0/auth0-react";

export const useCartReducer = () => {
    const [ cart, dispatch ] = useReducer(cartReducer, initialStateCart);

    const { ADD_PRODUCT, CLEAR_CART, REMOVE_PRODUCT } = CART_ACTIONS
    
    const { sizes } = useSize()

    const { user } = useAuth0();

    const addProduct = (product:Product, sizeId: string, quantity?: number) => {
        const sizeInList: number = sizes.findIndex(item => item._id === sizeId)

        const newCartItem: CartItem = {
            id: product._id,
            quantity: quantity,
            product: product,
            size: sizes[sizeInList]
        }


        if(cart.userEmail === '' || undefined) cart.userEmail = user?.email ?? ''

        dispatch({
            type: ADD_PRODUCT,
            payload: newCartItem
        })
    }

    const removeProduct = (product:Product) => {
        const newCartItem: CartItem = {
            id: product._id,
            quantity: 0,
            product: product,
            size: undefined
        }
        dispatch({
            type: REMOVE_PRODUCT,
            payload: newCartItem
        })
    }

    const clearCart = () => {
        dispatch({
            type: CLEAR_CART
        })
    }

    return ({ addProduct, removeProduct, clearCart, cart })
}