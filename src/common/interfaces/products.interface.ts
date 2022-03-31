export interface Product {
  id: string;
  name: string;
  brand: string;
  inStock: boolean;
  gallery: string[];
  category: string;
  prices: Price[];
  description: string;
}

export interface Products {
  products: ProductCategory[];
}

export interface ProductCategory {
  id: string;
  name: string;
  brand: string;
  inStock: boolean;
  gallery: string[];
  category: string;
  prices: Price[];
  description: string;
}

export interface Price {
  amount: number;
  currency: Currency;
}

export interface Currency {
  label?: string;
  symbol?: string;
}
