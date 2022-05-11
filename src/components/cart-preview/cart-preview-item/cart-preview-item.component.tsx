import React from 'react';
import { connect } from 'react-redux';
import {
  ICurrency,
  IPrice,
  IProduct,
} from '../../../common/interfaces/products.interface';
import { Store } from '../../../store/types';

//imports from folders
import Button from '../../button/button.component';

//CSS Styles
import './cart-preview-item.component.css';

type myProps = {
  product: IProduct | any;
  store: Store | any;
};

type myState = {
  count: number;
};
class CartPreviewItem extends React.Component<myProps, myState> {
  state: myState = {
    count: 1,
  };

  handleReduce(product: IProduct) {
    //reduce the count
    this.setState({ ...this.state, count: this.state.count - 1 });
    console.log(this.props.store.cart.indexOf(product));
    console.log(this.props.store.cart);
  }

  handleAdd(product: IProduct) {
    //add the count

    this.props.store.cart.push(product);
    this.setState({ ...this.state, count: this.state.count + 1 });

    // if (this.props.store.cart.some((c: any) => c.id === id)) {
    //   this.setState({ ...this.state, count: this.state.count + 1 });
    // }
  }

  render() {
    const { currency, cart } = this.props.store;
    const { name, description, gallery, inStock, prices, category, brand, id } =
      this.props.product;

    const currentCurrency = prices.filter(
      (p: IPrice) => p.currency.label === currency.label
    )[0].currency.symbol;

    // const mapAmount = new Map();

    const currentAmount =
      prices.filter((p: IPrice) => p.currency.label === currency.label)[0]
        .amount * this.state.count;

    const price = cart.map((c: any) => c.prices); //get all prices in all currencies from the cart
    const cartPrices = price.flat();

    const curAmount = cartPrices.filter(
      (p: any) => p.currency.label === currency.label //get prices of current currency selected
    );

    const currentA = cart
      .map((p: any) => p.prices)
      .flat()
      .filter((c: any) => c.currency.label === currency.label);

    const newAmount = currentA
      .map((c: any) => c.amount)
      .reduce((r: any, b: any) => r + b, 0)
      .toFixed(2);
    console.log(newAmount);

    const productNumber = cart.filter((p: any) => p.id === id).length;

    console.log(productNumber);

    // console.log(curAmount.map((c: any) => c));

    // const total: number = curAmount
    //   .map((c: any) => c.amount * this.state.count)
    //   .reduce((acc: any, a: any) => acc + a, 0); //iterate through them and sum them up

    // console.log(total);

    // this.props.productsAmount = currentAmount;

    // console.log(this.props.productsAmount)

    // const totalAmount: number = currentAmount.reduce(
    //   (acc: any, a: any) => acc + a,
    //   0
    // ); //iterate through them and sum them up

    return (
      <div>
        <div className='cart-item-top'>
          <div className='cart-item-info'>
            <div>{name}</div>{' '}
            <div>
              {currentCurrency}
              {currentAmount.toFixed(2)}
            </div>
            <div>
              <p>Size: </p>
              <span className='product-sizes'>
                <p className='product-size'>XL</p>{' '}
                <p className='product-size'>S</p>{' '}
                <p className='product-size'>M</p>{' '}
                <p className='product-size'>L</p>
              </span>
            </div>
            <div>
              <p>Color: </p>
              <span className='product-sizes'>
                <p className='product-size'>.</p>{' '}
                <p className='product-size'>.</p>{' '}
                <p className='product-size'>.</p>{' '}
              </span>
            </div>
          </div>

          <div className='cart-item-attr'>
            <div onClick={() => this.handleAdd(this.props.product)}>+</div>
            <div>{productNumber}</div>
            <div onClick={() => this.handleReduce(this.props.product)}>-</div>
          </div>

          <div className='cart-item-img'>
            <img
              className='product-grid-item-img'
              src={gallery[0]}
              alt={name}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapPropsToState = (state: Store) => ({
  store: state.product,
});

export default connect(mapPropsToState)(CartPreviewItem);
