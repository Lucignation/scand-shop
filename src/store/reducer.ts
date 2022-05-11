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
  ADD_PRODUCT,
  REMOVE_PRODUCT,
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
  currency: { label: 'USD', symbol: '$' },
  currencies: [],
  cart: [],
  total: 0,
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

    case ADD_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case REMOVE_PRODUCT:
      console.log(action.payload.id);
      return {
        ...state,
        cart: state.cart.filter((p) => p.id !== action.payload.id),
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
