import { ActionTypes } from '../constants/action-types';

const intialState = {
  product: [
    {
      id: 1,
      title: 'Short',
      category: 'Pants',
    },
  ],
};
export const productReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
