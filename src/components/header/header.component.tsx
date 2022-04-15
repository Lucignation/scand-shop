import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { gql } from '@apollo/client';
// import NavLink from './NavLink/NavLink';
import { connect } from 'react-redux';

import Logo from '../../assets/img/logo.svg';
import DownArrow from '../../assets/img/down-arrow.svg';
import Cart from '../../assets/img/cart.svg';

import './header.component.css';

import { Store, ICurrency } from '../../store/types';
import client from '../../common/apollo-client';

type myProps = {
  to?: string;
  currency: any;
};

type myState = {
  symbol?: string;
  currencies?: Array<ICurrency>;
  isShowCurrency?: boolean;
};
class Header extends React.Component<myProps, myState> {
  state: myState = {
    symbol: '$',
  };

  componentDidMount() {
    this.fetchCurrencies();
  }

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

  handleSelectedCurrency(item: string | undefined) {
    console.log(item);
    this.setState({
      ...this.state,
      symbol: item,
      isShowCurrency: !this.state.isShowCurrency,
    });
  }

  render() {
    console.log(this.state);
    const { isShowCurrency, symbol, currencies } = this.state;
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
            <li className='header-nav-items'>
              <NavLink to='/'>
                <img src={Logo} alt='logo' />
              </NavLink>
            </li>
            <div className='header-nav-items right-nav'>
              <li className='header-nav-item'>
                <div className='header-nav-current'>
                  <div
                    className={`currencies ${
                      isShowCurrency ? 'show-currency' : 'hide-currency'
                    }`}
                  >
                    {currencies?.map((currency, index) => (
                      <p
                        key={index}
                        className='currency'
                        onClick={() =>
                          this.handleSelectedCurrency(currency.symbol)
                        }
                      >
                        {currency.symbol}
                      </p>
                    ))}
                  </div>
                  {symbol ? symbol : '$'}
                  <img
                    src={DownArrow}
                    alt='down arrow'
                    onClick={() => this.showCurrencies()}
                  />
                </div>
              </li>
              <li className='header-nav-item'>
                <p>
                  <img src={Cart} alt='cart' />
                </p>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    );
  }
}

const mapPropsToState = (state: Store) => ({
  currency: state.product,
});

export default connect(mapPropsToState)(Header);
