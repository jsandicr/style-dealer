import { FilterApplys, ActionType } from '../types'

export const initialStatedFiltersApply: FilterApplys = {
    gender: '',
    discount: '',
    price: '',
    size: '',
    orderBy: ''
}

export const FILTER_ACTIONS = {
    GENDER: 'GENDER',
    DISCOUNT: 'DISCOUNT', 
    PRICE: 'PRICE',
    ORDER_BY: 'ORDER_BY',
    CLEAR: 'CLEAR'
}

export const filterReducer = (state: typeof initialStatedFiltersApply, action: ActionType): typeof initialStatedFiltersApply => {

    const { type, payload } : { type: string; payload?: string } = action
    const { GENDER, DISCOUNT, PRICE, ORDER_BY, CLEAR } = FILTER_ACTIONS
    
    switch(type){
        case GENDER: {
            if(state.gender === payload) break;
            const newState = {
                ...state,
                gender: payload ?? ''
            }
            return newState
        }
        case DISCOUNT: {
            if(state.discount !== payload){
                const newState = {
                    ...state,
                    discount: payload ?? ''
                }
                return newState
            } 
            break;
        }
        case PRICE: {
            if(state.price === payload) break
            const newState = {
                ...state,
                price: payload ?? ''
            }
            return newState
        }
        case ORDER_BY: {
            if(state.orderBy === payload) break
            const newState = {
                ...state,
                orderBy: payload ?? ''
            }
            return newState
        }
        case CLEAR: {
            return initialStatedFiltersApply
        }
    }

    return state
}