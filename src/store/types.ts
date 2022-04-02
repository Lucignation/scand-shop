export interface IProduct {
  id: string;
  name: string;
  brand: string;
  inStock: boolean;
  gallery: string[];
  category: string;
  prices: IPrice[];
  description: string;
}

export interface IPrice {
  amount: number;
  currency: ICurrency;
}

export interface ICurrency {
  label?: string;
  symbol?: string;
}

export interface Store {
  products: IProduct[];
  product: IProduct;
  currency: ICurrency;
  currencies: ICurrency[];
}
