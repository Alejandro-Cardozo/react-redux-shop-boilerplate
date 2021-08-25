import { ActionTypes } from '../constants/action-types';

const initialState = {
  product: [
    {
      id: 1,
      title: 'Short',
      category: 'Pants',
    },
  ],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
