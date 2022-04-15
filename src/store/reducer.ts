import { combineReducers } from 'redux';

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
import { Store, ICurrency, IProduct, IPrice } from './types';

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
        product: action.payload,
      };

    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case GET_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
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

const rootReducer = combineReducers({
  product: productsReducer,
});

export default rootReducer;

// const store = createStore<IRootState, any, any, any>(
//   productsReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;
