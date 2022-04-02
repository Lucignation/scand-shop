import { createStore } from 'redux';

import {
  ActionTypes,
  SET_PRODUCT,
  SET_PRODUCTS,
  getCurrencies,
  setProducts,
  setProduct,
  GET_CURRENCIES,
  SET_CURRENCY,
} from './actions';
import { Store, ICurrency } from './types';

const initialState: Store = {
  products: [],
  product: {
    id: '',
    name: '',
    description: '',
    brand: '',
    prices: [],
    inStock: false,
    gallery: [],
    category: '',
  },
  currency: { label: '', symbol: '' },
  currencies: [],
};

function productsReducer(state: Store = initialState, action: ActionTypes) {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        product: setProduct(action.payload),
      };

    case SET_PRODUCTS:
      return {
        ...state,
        products: setProducts(action.payload),
      };

    case GET_CURRENCIES:
      return {
        ...state,
        currencies: getCurrencies(action.payload),
      };

    case SET_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      };
    default:
      return state;
  }
}

// const store = createStore(productsReducer);

// export default store;
