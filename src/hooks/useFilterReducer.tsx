import { useReducer } from "react";
import { filterReducer, FILTER_ACTIONS, initialStatedFiltersApply } from "../reducers/filterReducer"

export const useFilterReducer = () => {
    const [ filtersApply, dispatch ] = useReducer(filterReducer, initialStatedFiltersApply);

    const { GENDER, DISCOUNT, ORDER_BY, PRICE, SIZE, CLEAR } = FILTER_ACTIONS
    
    const addGender = (gender?: string) => {
        gender = filtersApply.gender === gender ? undefined : gender
        dispatch({
            type: GENDER,
            payload: gender
        })
    }

    const addDiscount = (discount?: string) => {
        discount = filtersApply.discount === discount ? undefined : discount
        dispatch({
            type: DISCOUNT,
            payload: discount
        })
    }

    const addOrderBy = (orderBy: string) => {  
        dispatch({
            type: ORDER_BY,
            payload: orderBy
        }
    )}

    const addPrice = (price?: string) => {
        price = filtersApply.price === price ? undefined : price
        dispatch({
            type: PRICE,
            payload: price
        })
    }

    const addSize = (size?: string) => {
        size = filtersApply.size === size ? undefined : size
        dispatch({
            type: SIZE,
            payload: size
        })
    }

    const clearFilters = () => {
        dispatch({
            type: CLEAR
        })
    }

    return ({ addGender, addDiscount, addOrderBy, addPrice, addSize, clearFilters, filtersApply })
}