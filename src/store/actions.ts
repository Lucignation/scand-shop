import { IProduct, ICurrency } from './types';

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_PRODUCT = 'SET_PRODUCT';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SET_CURRENCY = 'SET_CURRENCY';

export type ActionTypes =
  | { type: typeof SET_PRODUCTS; payload: IProduct[] }
  | { type: typeof SET_CURRENCY; payload: ICurrency }
  | { type: typeof SET_PRODUCT; payload: IProduct }
  | { type: typeof GET_CURRENCIES; payload: ICurrency[] };

export const setProduct = (product: IProduct): ActionTypes => ({
  type: SET_PRODUCT,
  payload: product,
});

export const setCurrency = (currency: ICurrency): ActionTypes => ({
  type: SET_CURRENCY,
  payload: currency,
});

export const setProducts = (products: IProduct[]): ActionTypes => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const getCurrencies = (currencies: ICurrency[]): ActionTypes => ({
  type: GET_CURRENCIES,
  payload: currencies,
});
