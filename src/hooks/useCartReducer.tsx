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

    const addProduct = (product:Product, sizeId: string, quantity?: number, itemId?: string) => {
        const sizeInList: number = sizes.findIndex(item => item._id === sizeId)

        const randomNum = Math.floor(Math.random() * (9999 - 1 + 1)) + 9999;

        const newCartItem: CartItem = {
            id: itemId ?? randomNum.toString(),
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

    const removeProduct = (itemId:string) => {

        const p: Product = {
            _id: '',
            title: '',
            category: '',
            price: 0,
            img: '',
            color: '',
            description: '',
            sizes: '',
            ratings: [],
            labels: [],
            additionalImages: [],
            entryDate: new Date()
        }

        const newCartItem: CartItem = {
            id: itemId,
            quantity: 0,
            product: p,
            size: undefined
        }
        dispatch({
            type: REMOVE_PRODUCT,
            payload: newCartItem
        })
        if(cart.userEmail === '' || undefined) cart.userEmail = user?.email ?? ''
    }

    const clearCart = () => {
        dispatch({
            type: CLEAR_CART
        })
    }

    return ({ addProduct, removeProduct, clearCart, cart })
}