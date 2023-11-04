import { describe, expect, it } from "vitest"
import { favReducer, FAV_ACTIONS } from "../src/reducers/favReducer"

describe('fav reducer', (): void => {
  it('should add a product to the favorite list when receiving an ADD_FAV action and the product is not already in the list', () => {
    const initialState = [];
    const action = { type: FAV_ACTIONS.ADD_FAV, payload: { _id: '1', title: 'Product 1' } };
    const newState = favReducer(initialState, action);
    expect(newState).toEqual([{ _id: '1', title: 'Product 1' }]);
  });

  it('should not add a product to the favorite list when receiving an ADD_FAV action and the product is already in the list', () => {
    const initialState = [{ _id: '1', title: 'Product 1' }];
    const action = { type: FAV_ACTIONS.ADD_FAV, payload: { _id: '1', title: 'Product 1' } };
    const newState = favReducer(initialState, action);
    expect(newState).toEqual([{ _id: '1', title: 'Product 1' }]);
  });

  it('should remove a product from the favorite list when receiving a REMOVE_FAV action and the product is in the list', () => {
    const initialState = [{ _id: '1', title: 'Product 1' }];
    const action = { type: FAV_ACTIONS.REMOVE_FAV, payload: { _id: '1', title: 'Product 1' } };
    const newState = favReducer(initialState, action);
    expect(newState).toEqual([]);
  });
});