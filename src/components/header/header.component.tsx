import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { gql } from '@apollo/client';
// import NavLink from './NavLink/NavLink';

import Logo from '../../assets/img/logo.svg';
import DownArrow from '../../assets/img/down-arrow.svg';
import UpArrow from '../../assets/img/up-arrow.svg';
import Cart from '../../assets/img/cart.svg';

import './header.component.css';

import { Store, ICurrency } from '../../store/types';
import client from '../../common/apollo-client';
import { getCurrency } from '../../store/actions';

import CartPreview from '../cart-preview/cart-preview.component';

type myProps = {
  to?: string;
  product: Store | any;
  getCurrency: (currency: ICurrency) => void;
};

type myState = {
  symbol?: string;
  label?: string;
  currencies?: Array<ICurrency>;
  isShowCurrency?: boolean;
  isShowCart: boolean;
};
class Header extends React.Component<myProps, myState> {
  private myRef = React.createRef<HTMLDivElement>();

  state: myState = {
    symbol: '$',
    label: 'USD',
    isShowCart: false,
  };

  componentDidMount() {
    this.fetchCurrencies();
    this.useOutsideClick(this.myRef);
  }

  // componentWillUnmount() {
  //   this.useOutsideClick(this.myRef);
  // }

  async fetchCurrencies() {
    const FETCH_CURRENCIES = gql`
      query {
        currencies {
          label
          symbol
        }
      }
    `;

    const res = await client.query({
      query: FETCH_CURRENCIES,
    });

    const { loading, data, networkStatus } = res;
    console.log(data.currencies);
    this.setState({ ...this.state, currencies: data.currencies });
  }

  showCurrencies() {
    this.setState({
      ...this.state,
      isShowCurrency: !this.state.isShowCurrency,
    });
  }

  useOutsideClick(ref: any) {
    document.addEventListener(
      'mousedown',
      (event) =>
        ref.current &&
        !ref.current.contains(event.target) &&
        this.setState({
          ...this.state,
          isShowCart: false,
        })
    );
  }

  async handleSelectedCurrency(
    item: string | undefined,
    label: string | undefined
  ) {
    const money: ICurrency = {
      symbol: item,
      label: label,
    };

    await this.props.getCurrency(money);
    console.log(item, label);
    this.setState({
      ...this.state,
      symbol: item,
      label: label,
      isShowCurrency: !this.state.isShowCurrency,
    });
  }

  async showCartInfo() {
    this.setState({ ...this.state, isShowCart: !this.state.isShowCart });
  }

  render() {
    console.log(this.state);
    const { isShowCurrency, symbol, currencies, label } = this.state;
    const { currency, cart } = this.props.product;

    console.log(currency);
    return (
      <header>
        <nav>
          <ul className='header-nav-group'>
            <div className='header-nav-items left-nav'>
              <li className='header-nav-item'>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                  }
                >
                  WOMEN
                </NavLink>
              </li>
              <li className='header-nav-item'>
                <NavLink
                  to='/men'
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                  }
                >
                  MEN
                </NavLink>
              </li>
              <li className='header-nav-item'>
                <NavLink
                  to='/kids'
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'link'
                  }
                >
                  KIDS
                </NavLink>
              </li>
            </div>
            <li className='header-nav-items logo'>
              <NavLink to='/'>
                <img src={Logo} alt='logo' />
              </NavLink>
            </li>
            <div className='header-nav-items right-nav'>
              <li className='nav-currency'>
                <div className='header-nav-current'>
                  <div
                    className={`currencies ${
                      isShowCurrency ? 'show-currency' : 'hide-currency'
                    }`}
                  >
                    {currencies?.map((currency, index) => (
                      <p
                        key={index}
                        className={
                          currencies.indexOf(currency) === currency
                            ? 'currency-active'
                            : 'currency'
                        }
                        onClick={() =>
                          this.handleSelectedCurrency(
                            currency.symbol,
                            currency.label
                          )
                        }
                      >
                        {currency.symbol} {currency.label}
                      </p>
                    ))}
                  </div>
                  {currency && currency.symbol}
                  {this.state.isShowCurrency ? (
                    <img
                      src={UpArrow}
                      alt='down arrow'
                      onClick={() => this.showCurrencies()}
                    />
                  ) : (
                    <img
                      src={DownArrow}
                      alt='down arrow'
                      onClick={() => this.showCurrencies()}
                    />
                  )}
                </div>
              </li>
              <div ref={this.myRef}>
                <li className='cart' onClick={() => this.showCartInfo()}>
                  <p>
                    <img src={Cart} alt='cart' />
                    {cart && <span className='cart-count'>{cart.length}</span>}
                  </p>
                </li>

                {this.state.isShowCart && <CartPreview />}
              </div>
            </div>
          </ul>
        </nav>
      </header>
    );
  }
}

const mapPropsToState = (state: Store) => ({
  product: state.product,
});

export default connect(mapPropsToState, { getCurrency })(Header);
