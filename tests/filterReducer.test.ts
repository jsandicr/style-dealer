import { describe, expect, it } from "vitest";
import { filterReducer } from '../src/reducers/filterReducer';

describe('filter reducer', (): void => {

    it('should update the gender filter when the GENDER action is passed with a new value', () => {
        const initialState = {
          gender: '',
          discount: '',
          price: '',
          size: '',
          orderBy: ''
        };
        const action = { type: 'GENDER', payload: 'male' };
        const newState = filterReducer(initialState, action);
        expect(newState.gender).toEqual('male');
    });

    it('should update the gender filter when the GENDER action is passed with a different value', () => {
        const initialState = {
          gender: 'women',
          discount: '',
          price: '',
          size: '',
          orderBy: ''
        };
        const action = { type: 'GENDER', payload: 'male' };
        const newState = filterReducer(initialState, action);
        expect(newState.gender).toEqual('male');
    });

    it('should update the discount filter when the DISCOUNT action is passed with a new value different from the current one', () => {
        const initialState = {
          gender: '',
          discount: '',
          price: '',
          size: '',
          orderBy: ''
        };
        const action = { type: 'DISCOUNT', payload: '10%' };
        const newState = filterReducer(initialState, action);
        expect(newState.discount).toEqual('10%');
    });

    it('should update the price filter when the PRICE action is passed with a new value different from the current one', () => {
        const initialState = {
          gender: '',
          discount: '',
          price: '',
          size: '',
          orderBy: ''
        };
        const action = { type: 'PRICE', payload: '100' };
        const newState = filterReducer(initialState, action);
        expect(newState.price).toEqual('100');
    });

    it('should update the price filter when the PRICE action is passed with a new value different from the current one', () => {
        const initialState = {
          gender: '',
          discount: '',
          price: '',
          size: '',
          orderBy: ''
        };
        const action = { type: 'SIZE', payload: 'EU 10' };
        const newState = filterReducer(initialState, action);
        expect(newState.size).toEqual('EU 10');
    });

    it('should update the price filter when the PRICE action is passed with a new value different from the current one', () => {
        const initialState = {
          gender: '',
          discount: '',
          price: '',
          size: '',
          orderBy: ''
        };
        const action = { type: 'ORDER_BY', payload: 'lower to higher' };
        const newState = filterReducer(initialState, action);
        expect(newState.orderBy).toEqual('lower to higher');
    });
})