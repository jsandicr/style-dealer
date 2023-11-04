import { useReducer } from "react";
import { Product } from '../types';
import { FAV_ACTIONS, favReducer, initialStateFav } from "../reducers/favReducer";

export const useFavReducer = () => {
    const [ fav, dispatch ] = useReducer(favReducer, initialStateFav);

    const { ADD_FAV, CLEAR_FAV, REMOVE_FAV } = FAV_ACTIONS

    const addFav = (product:Product) => {
        dispatch({
            type: ADD_FAV,
            payload: product
        })
    }

    const removeFav = (product:Product) => {
        dispatch({
            type: REMOVE_FAV,
            payload: product
        })
    }

    const clearFav = () => {
        dispatch({
            type: CLEAR_FAV
        })
    }

    return ({ addFav, removeFav, clearFav, fav })
}