import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { RouteComponentProps } from 'react-router-dom';
import { setProduct } from '../../../store/actions';

import { Store } from '../../../store/types';

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
  setProduct: any;
  // history: string;
};

type myState = {
  products: Array<IProduct>;
};

class ProductsGridItem extends React.Component<myProps, myState> {
  state: myState = {
    products: [],
  };

  handleSelectProduct = (item: IProduct) => {
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

  handleSingleProduct = (item: IProduct) => {
    console.log(item);
    this.props.setProduct(item);
    // this.props.history.push({ pathname: `/products/${item.id}`, state: item });
  };
  render() {
    // this.setState({ products: [], isSelected: false, selectedId: 0 });
    const { _product } = this.props;
    const newProducts = this.state;
    // console.log(_product);
    console.log(this.props);

    return _product.map((item, index) => (
      <Link to={`/products/${item.id}`} key={index} className='product-link'>
        <div
          // key={index}
          className={
            item.inStock
              ? 'product-grid-item out-of-stock-frame'
              : 'product-grid-item'
          }
          onClick={() => this.handleSingleProduct(item)}
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
          <div onClick={() => this.handleSelectProduct(item)}>
            <h2 className='product-grid-item-name'>{item.name}</h2>
            <h4 className='product-grid-item-price'>
              {item.prices[0].currency.symbol}
              {item.prices[0].amount}
            </h4>
          </div>

          {this.state.products.includes(item) && (
            <div className='selected-icon'>
              <img src={cartCircle} alt='item selected' />
            </div>
          )}
        </div>
      </Link>
    ));
  }
}

const mapPropsToState = (state: Store) => ({
  products: state.products,
});

export default connect(mapPropsToState, { setProduct })(ProductsGridItem);
