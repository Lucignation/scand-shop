import React from 'react';

import {
  Product,
  Products,
  ProductCategory,
} from '../../../common/interfaces/products.interface';

import './products-grid-item.component.css';

type myProps = {
  // product: Product;
  _product: Array<ProductCategory>;
};

type myState = {
  products: Array<Product>;
};

class ProductsGridItem extends React.Component<myProps, myState> {
  handleSelectProduct = (item: Product) => {
    console.log(item);
  };
  render() {
    const { _product } = this.props;
    const newProducts = this.state;
    console.log(_product);

    return _product.map((item, index) => (
      <div
        key={index}
        className='product-grid-item'
        onClick={() => this.handleSelectProduct(item)}
      >
        <div className='product-grid-item-frame'>
          <img
            className='product-grid-item-img'
            src={item.gallery[0]}
            alt={item.name}
          />
        </div>
        <h2 className='product-grid-item-name'>{item.name}</h2>
        <h4 className='product-grid-item-price'>
          {item.prices[0].currency.symbol}
          {item.prices[0].amount}
        </h4>
      </div>
    ));
  }
}

export default ProductsGridItem;
