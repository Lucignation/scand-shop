import { Product } from './types';

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_PRODUCT = 'SET_PRODUCT';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SET_CURRENCY = 'SET_CURRENCY';

export type ActionTypes =
  | { type: typeof SET_PRODUCTS; payload: Product[] }
  | { type: typeof SET_CURRENCY; payload: string }
  | { type: typeof SET_PRODUCT; payload: Product }
  | { type: typeof GET_CURRENCIES; payload: { label: string; symbol: string } };
