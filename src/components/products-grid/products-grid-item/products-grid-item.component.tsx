import React from 'react';

import {
  IProduct,
  IProducts,
  IProductCategory,
} from '../../../common/interfaces/products.interface';

import './products-grid-item.component.css';

import cartCircle from '../../../assets/img/cart-circle.svg';

type myProps = {
  // product: Product;
  _product: Array<IProductCategory>;
};

type myState = {
  products: Array<IProduct>;
};

class ProductsGridItem extends React.Component<myProps, myState> {
  state: myState = {
    products: [],
  };

  handleSelectProduct = (item: IProduct, index: number) => {
    if (this.state.products.includes(item)) {
      this.setState(() => ({
        ...this.state,
        products: this.state.products.filter((i) => i.id !== item.id),
      }));
    } else if (!item.inStock) {
      this.setState(() => ({
        ...this.state,
        products: [...this.state.products, item],
      }));
    }
  };
  render() {
    // this.setState({ products: [], isSelected: false, selectedId: 0 });
    const { _product } = this.props;
    const newProducts = this.state;
    console.log(_product);

    return _product.map((item, index) => (
      <div
        key={index}
        className={
          item.inStock
            ? 'product-grid-item out-of-stock-frame'
            : 'product-grid-item'
        }
        onClick={() => this.handleSelectProduct(item, index)}
      >
        {item.inStock && (
          <div className='out-of-stock'>
            <h1>OUT OF STOCK</h1>
          </div>
        )}
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

        {this.state.products.includes(item) && (
          <div className='selected-icon'>
            <img src={cartCircle} alt='item selected' />
          </div>
        )}
      </div>
    ));
  }
}

export default ProductsGridItem;
