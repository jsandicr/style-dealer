import { Product } from '../types';

export const initialStateFav: Product[] = JSON.parse(window.localStorage.getItem('fav')!) || [];

export type ActionType = {
    type: string;
    payload?: Product;
}

const updateLocalStorage = (fav: Product[]) => {
    window.localStorage.setItem('fav', JSON.stringify(fav))
}

export const FAV_ACTIONS = {
    ADD_FAV: 'ADD_FAV',
    REMOVE_FAV: 'REMOVE_FAV', 
    CLEAR_FAV: 'CLEAR_FAV'
}

export const favReducer = (state: typeof initialStateFav, action: ActionType): typeof initialStateFav => {

    const { type, payload } : { type: string; payload?: Product } = action
    const { ADD_FAV, REMOVE_FAV, CLEAR_FAV } = FAV_ACTIONS

    switch(type){
        case ADD_FAV: {
            const favInList = state.some(item => item._id === payload!._id)

            if (favInList === false) {
                const newState = [
                    ...state,
                ];

                newState.push(payload!)
                updateLocalStorage(newState);
                return newState;
            }

            return state;
        }
        case REMOVE_FAV: {
            const newState = [
                ...state.filter(item => item._id !== payload!._id)
            ];     
            updateLocalStorage(newState);
            return newState;
        }
        case CLEAR_FAV: {

            updateLocalStorage(initialStateFav);
            return initialStateFav;
        }
        default:
            return state;
    }
}