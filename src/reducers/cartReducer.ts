import { CartItem, Cart } from '../types';

const localStorageData = JSON.parse(window.localStorage.getItem('cart')!);

export const initialStateCart: Cart = localStorageData || {
    userEmail: '',
    cartItems: [],
    total: 0,
    cartStatus: "Buying"
};


export type ActionType = {
    type: string;
    payload?: CartItem;
}

const updateLocalStorage = (cart: Cart) => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
}

const removeLocalStorage = () => {
    window.localStorage.removeItem('cart')
}

export const CART_ACTIONS = {
    ADD_PRODUCT: 'ADD_PRODUCT',
    REMOVE_PRODUCT: 'REMOVE_PRODUCT', 
    CLEAR_CART: 'CLEAR_CART'
}

const updatePrice = (cart: Cart): Cart => {
    let total = 0
    cart.cartItems.forEach((item) => {
        total += item.product.price * item.quantity!
    })

    cart.total = parseFloat(total.toFixed(4))
    return cart;
}

export const cartReducer = (state: typeof initialStateCart, action: ActionType): typeof initialStateCart => {

    const { type, payload } : { type: string; payload?: CartItem } = action
    const { ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_CART } = CART_ACTIONS
    
    switch(type){
        case ADD_PRODUCT: {

            if (!payload) return state;
            
            const productInCartId = state.cartItems.findIndex(item => item.id === payload.id);
            
            if (productInCartId >= 0) {
                const newState = {
                    ...state,
                    cartItems: state.cartItems.map((item, index) => {
                        if (index === productInCartId) {
                            const newQuantity = payload.quantity !== undefined
                                ? (payload.quantity ?? item.quantity! + 1)
                                : item.quantity;
                            const newSize = payload.size ? payload.size : item.size;
                            
                            return { ...item, quantity: newQuantity, size: newSize };
                        }
                        return item;
                    }),
                };

                const newStateUpdated = updatePrice(newState);
                updateLocalStorage(newStateUpdated);
                return newStateUpdated;
            }

            const newCartItem: CartItem = {
                ...payload,
                quantity: 1
            };

            const newState = {
                ...state,
                cartItems: [...state.cartItems, newCartItem]
            };

            const newStateUpdated = updatePrice(newState);
            updateLocalStorage(newStateUpdated);
            return newStateUpdated;
        }
        case REMOVE_PRODUCT: {
            if (!payload) return state;

            const itemIndex = state.cartItems.findIndex(item => item.id === payload.id);
            if (itemIndex === -1) return state;

            const newCartItems = [...state.cartItems];
            newCartItems.splice(itemIndex, 1);

            const newState = {
                ...state,
                cartItems: newCartItems
            };

            const newStateUpdated = updatePrice(newState);
            updateLocalStorage(newStateUpdated);
            return newState;
        }
        case CLEAR_CART: {
            removeLocalStorage();
            return {
                userEmail: '',
                cartItems: [],
                total: 0,
                cartStatus: "Buying"
            };
        }
        default:
            return state;
    }
}