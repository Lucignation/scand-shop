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

export interface IProducts {
  products: IProductCategory[];
}

export interface IProductCategory {
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
  label: string;
  symbol: string;
}
