import { describe, expect, it } from "vitest"
import { cartReducer, CART_ACTIONS } from "../src/reducers/cartReducer"

describe('cart reducer', (): void => {

  it('should add a new product to the cart when receiving an ADD_PRODUCT action with a valid payload', () => {
    const state = {
      userEmail: '',
      cartItems: [],
      total: 0,
      cartStatus: "Buying"
    };

    const action = {
      type: CART_ACTIONS.ADD_PRODUCT,
      payload: {
        id: '1',
        quantity: 1,
        product: {
          _id: '1',
          price: 10
        },
        size: 'M'
      }
    };

    const newState = cartReducer(state, action);

    expect(newState.cartItems.length).toBe(1);
    expect(newState.cartItems[0].id).toBe('1');
    expect(newState.cartItems[0].quantity).toBe(1);
    expect(newState.cartItems[0].product._id).toBe('1');
    expect(newState.cartItems[0].product.price).toBe(10);
    expect(newState.cartItems[0].size).toBe('M');
  });

  it('should update the size of an existing product in the cart when receiving an ADD_PRODUCT action with a payload containing an existing product id and a new size', () => {
    const state = {
      userEmail: '',
      cartItems: [
        {
          id: '1',
          quantity: 1,
          product: {
            _id: '1',
            price: 10
          },
          size: 'M'
        }
      ],
      total: 10,
      cartStatus: "Buying"
    };

    const action = {
      type: CART_ACTIONS.ADD_PRODUCT,
      payload: {
        id: '1',
        quantity: 1,
        product: {
          _id: '1',
          price: 10
        },
        size: 'L'
      }
    };

    const newState = cartReducer(state, action);

    expect(newState.cartItems.length).toBe(1);
    expect(newState.cartItems[0].id).toBe('1');
    expect(newState.cartItems[0].quantity).toBe(1);
    expect(newState.cartItems[0].product._id).toBe('1');
    expect(newState.cartItems[0].product.price).toBe(10);
    expect(newState.cartItems[0].size).toBe('L');
  });

  it('should return the current state when receiving a REMOVE_PRODUCT action without a payload', () => {
    const state = {
      userEmail: '',
      cartItems: [
        {
          id: '1',
          quantity: 1,
          product: {
            _id: '1',
            price: 10
          },
          size: 'M'
        }
      ],
      total: 10,
      cartStatus: "Buying"
    };

    const action = {
      type: CART_ACTIONS.REMOVE_PRODUCT
    };

    const newState = cartReducer(state, action);

    expect(newState).toBe(state);
  });

  it('should return a new state with an empty cart when receiving a CLEAR_CART action', () => {
    const state = {
      userEmail: '',
      cartItems: [
        {
          id: '1',
          quantity: 1,
          product: {
            _id: '1',
            price: 10
          },
          size: 'M'
        }
      ],
      total: 10,
      cartStatus: "Buying"
    };

    const action = {
      type: CART_ACTIONS.CLEAR_CART
    };

    const newState = cartReducer(state, action);

    expect(newState.userEmail).toBe('');
    expect(newState.cartItems.length).toBe(0);
    expect(newState.total).toBe(0);
    expect(newState.cartStatus).toBe('Buying');
  });
});