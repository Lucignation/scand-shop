import React from 'react';
import { connect } from 'react-redux';
import {
  ICurrency,
  IPrice,
  IProduct,
} from '../../common/interfaces/products.interface';
import { Store } from '../../store/types';
import Button from '../button/button.component';

//importing from folders
import CartPreviewItem from './cart-preview-item/cart-preview-item.component';

import './cart-preview.component.css';

type props = {
  product: Store | any;
};

type state = {
  count: number;
  productsAmount: number;
};

class CartPreview extends React.Component<props, state> {
  state: state = {
    count: 1,
    productsAmount: 0,
  };
  render() {
    const { cart, currency } = this.props.product;

    // const currentCurrency = cart.map((currency: any) => currency.prices).flat();

    const price = cart.map((c: any) => c.prices); //get all prices in all currencies from the cart

    const cartPrices = price.flat();

    const currentAmount = cartPrices.filter(
      (p: any) => p.currency.label === currency.label //get prices of current currency selected
    );

    const currentCurrency = currentAmount.map((l: any) => l.currency.symbol); //selected Currency

    const totalAmount: number = currentAmount
      .map((c: any) => c.amount)
      .reduce((acc: any, a: any) => acc + a, 0); //iterate through them and sum them up

    return (
      <div className='cart-preview'>
        <div className='cart-preview-title'>
          <span className='cart-preview-title-name'>My Bag</span>, {cart.length}{' '}
          item
          {cart.length > 1 ? 's' : ''}
        </div>
        {cart.length > 0 ? (
          cart.map((product: IProduct, index: number) => (
            <CartPreviewItem key={index} product={product} />
          ))
        ) : (
          <p>Cart is empty</p>
        )}
        <div className='cart-total'>
          <div>Total</div>
          <div>
            {currentCurrency[0]}
            {totalAmount.toFixed(2)}
          </div>
        </div>
        <div className='cart-btns'>
          <Button text='VIEW BAG' btnType={true} />
          <Button text='CHECK OUT' />
        </div>
      </div>
    );
  }
}

const mapPropsToState = (state: Store) => ({
  product: state.product,
});

export default connect(mapPropsToState)(CartPreview);
