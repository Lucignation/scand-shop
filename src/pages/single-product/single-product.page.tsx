import React from 'react';
import { connect } from 'react-redux';

import { Store, IProduct, IPrice } from '../../store/types';

import './single-product.page.css';

type myProps = {
  products: any;
};

type myState = {
  amount: number;
  symbol: string;
};

class SingleProduct extends React.Component<myProps, myState> {
  state: myState = {
    amount: this.props.products.product.prices[0]?.amount,
    symbol: this.props.products.product.prices[0]?.currency.symbol,
  };
  render() {
    console.log(this.state);
    console.log(this.props.products.product.prices[0].amount);
    const { product } = this.props.products;
    return (
      <div>
        {product && (
          <div className='single-product-grid-item'>
            <div className='images-column'>
              {product.gallery.map((pix: string, index: number) => (
                <div key={index} className='product-images-frame'>
                  <img
                    src={pix}
                    alt={product.name}
                    className='product-images'
                  />
                </div>
              ))}
            </div>

            <div className='main-image-column'>
              <img
                src={product.gallery[0]}
                alt={product.name}
                className='product-image-single'
              />
            </div>

            <div className='product-description-column'>
              <h1 className='product-title'>{product.name}</h1>
              <h2 className='product-subtitle'>{product.brand}</h2>

              <div>
                <span className='product-size-title'>SIZE:</span>
                <span className='product-sizes'>
                  <p className='product-size'>XL</p>{' '}
                  <p className='product-size'>S</p>{' '}
                  <p className='product-size'>M</p>{' '}
                  <p className='product-size'>L</p>
                </span>
              </div>
              <div className='product-price'>
                <span className='product-price-title'>PRICE:</span>
                <div className='product-price-single'>
                  {this.state.symbol}
                  {this.state.amount}
                </div>
              </div>
              <div className='product-add-cart'>ADD TO CART</div>
              {
                <div
                  dangerouslySetInnerHTML={{
                    __html: product.description,
                  }}
                  className='product-description'
                />
              }
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapPropsToState = (state: Store) => ({
  products: state.product,
});

export default connect(mapPropsToState)(SingleProduct);
